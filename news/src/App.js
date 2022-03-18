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
        thoi_su: null,
        the_gioi: null,
        phap_luat: null,
        giao_duc: null,
        kinh_doanh: null,
        doi_song: null,
        suc_khoe: null,
        so_hoa: null,
        xe: null,
        tam_su: null,
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

        //Thoi su
        this.callBackendAPI('/thoi_su')
            .then(res => {
                this.setState({ thoi_su: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //The gioi
        this.callBackendAPI('/the_gioi')
            .then(res => {
                this.setState({ the_gioi: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Phap luat
        this.callBackendAPI('/phap_luat')
            .then(res => {
                this.setState({ phap_luat: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Giao duc
        this.callBackendAPI('/giao_duc')
            .then(res => {
                this.setState({ giao_duc: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Kinh doanh
        this.callBackendAPI('/kinh_doanh')
            .then(res => {
                this.setState({ kinh_doanh: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Doi song
        this.callBackendAPI('/doi_song')
            .then(res => {
                this.setState({ doi_song: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Suc khoe
        this.callBackendAPI('/suc_khoe')
            .then(res => {
                this.setState({ suc_khoe: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //So hoa
        this.callBackendAPI('/so_hoa')
            .then(res => {
                this.setState({ so_hoa: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Xe
        this.callBackendAPI('/xe')
            .then(res => {
                this.setState({ xe: res })
                //console.log("The thao", this.state.the_thao)
            })
            .catch(err => console.log(err));

        //Tam su
        this.callBackendAPI('/tam_su')
            .then(res => {
                this.setState({ tam_su: res })
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