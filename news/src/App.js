import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Route, BrowserRouter } from "react-router-dom";
import About from './pages/About';
import News from './pages/News';
import Entertainment from './pages/Entertainment';


class App extends Component {

    state = {
        data: 'APP'
    };

    componentDidMount() {
        this.callBackendAPI()
            // .then(res => this.setState({ data: res.rss }))
            .then(res => {
                var arr = res.rss.channel[0].item
                console.log('rss', arr)
                this.setState({ data: res })
            })
            .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();
        console.log('RSS', body)

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    home = () => {
        return (
            <Home dataFromParent={this.state.data} />
        )
    }

    render() {
        return (

            <div>

                <BrowserRouter>
                    <Header />
                    <Route exact path="/" >
                        <Home dataFromParent={this.state.data} />
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route path="/entertainment" component={Entertainment} />
                    <Footer />
                </BrowserRouter>

                {/* <div dangerouslySetInnerHTML={{ __html: this.state.data }} /> */}
            </div>


        );
    }
}

export default App;