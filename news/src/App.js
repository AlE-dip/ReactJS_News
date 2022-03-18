import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Route, BrowserRouter } from "react-router-dom";
import About from './pages/About';
import News from './pages/News';

class App extends Component {

    state = {
        trang_chu: null,
        giai_tri: null,
        the_thao: null,
        du_lich: null,
        khoa_hoc: null,
        cuoi: null,
    };

    componentDidMount() {
        //trang chu
        this.callBackendAPI('/trang_chu')
            // .then(res => this.setState({ data: res.rss }))
            .then(res => {
                // this.setState({data: res})
                this.setState({ trang_chu: res })
                //console.log("Trang chu", this.state.trang_chu)
            })
            .catch(err => console.log(err));

        //giai tri
        this.callBackendAPI('/giai_tri')
            .then(res => {
                this.setState({ giai_tri: res })
                // console.log("Giai tri", this.state.giai_tri)
            })
            .catch(err => console.log(err));

        //the thao
        this.callBackendAPI('/the_thao')
            .then(res => {
                this.setState({ the_thao: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Du lich
        this.callBackendAPI('/du_lich')
            .then(res => {
                this.setState({ du_lich: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Khoa học
        this.callBackendAPI('/khoa_hoc')
        .then(res => {
            this.setState({ khoa_hoc: res })
            //console.log("The thao", this.state.the_thao)
        })
        .catch(err => console.log(err));

        //Cuoi
        this.callBackendAPI('/cuoi')
            .then(res => {
                this.setState({ cuoi: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        console.log("App", this.state)
        return (

            <div>

                <BrowserRouter>
                    <Header />
                    <Route exact path="/" >
                        <Home dataApp={this.state} />
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/news" >
                        <News dataApp={this.state} />
                    </Route>
                    <Footer />
                </BrowserRouter>

                {/* <div dangerouslySetInnerHTML={{ __html: this.state.data }} /> */}
            </div>


        );
    }
}

export default App;