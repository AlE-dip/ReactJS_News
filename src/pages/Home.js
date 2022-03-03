import React from "react";

export default function Home() {
    return (
        <React.Fragment>

            <div>
                {/* Header */}
                <header>
                    {/* Header desktop */}
                    <div className="container-menu-desktop">
                        <div className="topbar">
                            <div className="content-topbar container h-100">
                                <div className="left-topbar">
                                    <span className="left-topbar-item flex-wr-s-c">
                                        <span>
                                            New York, NY
                                        </span>
                                        <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                                        <span>
                                            HI 58° LO 56°
                                        </span>
                                    </span>
                                    <a href="#" className="left-topbar-item">
                                        About
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Contact
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Sing up
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Log in
                                    </a>
                                </div>
                                <div className="right-topbar">
                                    <a href="#">
                                        <span className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-pinterest-p" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-vimeo-v" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Header Mobile */}
                        <div className="wrap-header-mobile">
                            {/* Logo moblie */}
                            <div className="logo-mobile">
                                <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
                            </div>
                            {/* Button show menu */}
                            <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </div>
                        </div>
                        {/* Menu Mobile */}
                        <div className="menu-mobile">
                            <ul className="topbar-mobile">
                                <li className="left-topbar">
                                    <span className="left-topbar-item flex-wr-s-c">
                                        <span>
                                            New York, NY
                                        </span>
                                        <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />
                                        <span>
                                            HI 58° LO 56°
                                        </span>
                                    </span>
                                </li>
                                <li className="left-topbar">
                                    <a href="#" className="left-topbar-item">
                                        About
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Contact
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Sing up
                                    </a>
                                    <a href="#" className="left-topbar-item">
                                        Log in
                                    </a>
                                </li>
                                <li className="right-topbar">
                                    <a href="#">
                                        <span className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-pinterest-p" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-vimeo-v" />
                                    </a>
                                    <a href="#">
                                        <span className="fab fa-youtube" />
                                    </a>
                                </li>
                            </ul>
                            <ul className="main-menu-m">
                                <li>
                                    <a href="index.html">Home</a>
                                    <ul className="sub-menu-m">
                                        <li><a href="index.html">Homepage v1</a></li>
                                        <li><a href="home-02.html">Homepage v2</a></li>
                                        <li><a href="home-03.html">Homepage v3</a></li>
                                    </ul>
                                    <span className="arrow-main-menu-m">
                                        <i className="fa fa-angle-right" aria-hidden="true" />
                                    </span>
                                </li>
                                <li>
                                    <a href="category-01.html">News</a>
                                </li>
                                <li>
                                    <a href="category-02.html">Entertainment </a>
                                </li>
                                <li>
                                    <a href="category-01.html">Business</a>
                                </li>
                                <li>
                                    <a href="category-02.html">Travel</a>
                                </li>
                                <li>
                                    <a href="category-01.html">Life Style</a>
                                </li>
                                <li>
                                    <a href="category-02.html">Video</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                    <ul className="sub-menu-m">
                                        <li><a href="category-01.html">Category Page v1</a></li>
                                        <li><a href="category-02.html">Category Page v2</a></li>
                                        <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                                        <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                                        <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                                        <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                                        <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                    <span className="arrow-main-menu-m">
                                        <i className="fa fa-angle-right" aria-hidden="true" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/*  */}
                        <div className="wrap-logo container">
                            {/* Logo desktop */}
                            <div className="logo">
                                <a href="index.html"><img src="images/icons/logo-01.png" alt="LOGO" /></a>
                            </div>
                            {/* Banner */}
                            <div className="banner-header">
                                <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img src="images/banner-01.jpg" alt="IMG" /></a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="wrap-main-nav">
                            <div className="main-nav">
                                {/* Menu desktop */}
                                <nav className="menu-desktop">
                                    <a className="logo-stick" href="index.html">
                                        <img src="images/icons/logo-01.png" alt="LOGO" />
                                    </a>
                                    <ul className="main-menu">
                                        <li className="main-menu-active">
                                            <a href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Homepage v1</a></li>
                                                <li><a href="home-02.html">Homepage v2</a></li>
                                                <li><a href="home-03.html">Homepage v3</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-01.html">News</a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
                                                    <a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
                                                    <a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
                                                    <a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
                                                    <a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
                                                    <a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="news-0" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-05.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-10.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Finance
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-14.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Beach
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-36.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Technology
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="news-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-50.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-08.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-07.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-06.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="news-2" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-21.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-24.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-22.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-23.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="news-3" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-25.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-27.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-26.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-34.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="news-4" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-35.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-36.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-37.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-38.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="news-5" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-39.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-41.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-42.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-40.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-02.html">Entertainment </a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
                                                    <a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
                                                    <a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="enter-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-25.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-27.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-26.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-34.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="enter-2" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-35.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-36.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-37.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-38.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="enter-3" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-39.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-41.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-42.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-40.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-01.html">Business</a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#business-1" role="tab">All</a>
                                                    <a className="nav-link" data-toggle="pill" href="#business-2" role="tab">Economy</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="business-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-10.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-11.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-26.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-34.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="business-2" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-35.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-36.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-37.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-38.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-02.html">Travel</a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#travel-1" role="tab">All</a>
                                                    <a className="nav-link" data-toggle="pill" href="#travel-2" role="tab">Hotels</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="travel-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-39.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-41.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-42.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-40.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="travel-2" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-35.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-36.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-37.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-38.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-01.html">Life Style</a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#life-1" role="tab">All</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="life-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-25.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-27.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-26.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-34.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mega-menu-item">
                                            <a href="category-02.html">Video</a>
                                            <div className="sub-mega-menu">
                                                <div className="nav flex-column nav-pills" role="tablist">
                                                    <a className="nav-link active" data-toggle="pill" href="#video-1" role="tab">All</a>
                                                </div>
                                                <div className="tab-content">
                                                    <div className="tab-pane show active" id="video-1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-50.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 18
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-08.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Feb 12
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-07.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 20
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-3">
                                                                {/* Item post */}
                                                                <div>
                                                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                        <img src="images/post-06.jpg" alt="IMG" />
                                                                    </a>
                                                                    <div className="p-t-10">
                                                                        <h5 className="p-b-5">
                                                                            <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                                Donec metus orci, malesuada et lectus vitae
                                                                            </a>
                                                                        </h5>
                                                                        <span className="cl8">
                                                                            <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                                Music
                                                                            </a>
                                                                            <span className="f1-s-3 m-rl-3">
                                                                                -
                                                                            </span>
                                                                            <span className="f1-s-3">
                                                                                Jan 15
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                            <ul className="sub-menu">
                                                <li><a href="category-01.html">Category Page v1</a></li>
                                                <li><a href="category-02.html">Category Page v2</a></li>
                                                <li><a href="blog-grid.html">Blog Grid Sidebar</a></li>
                                                <li><a href="blog-list-01.html">Blog List Sidebar v1</a></li>
                                                <li><a href="blog-list-02.html">Blog List Sidebar v2</a></li>
                                                <li><a href="blog-detail-01.html">Blog Detail Sidebar</a></li>
                                                <li><a href="blog-detail-02.html">Blog Detail No Sidebar</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Headline */}
                <div className="container">
                    <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
                            <span className="text-uppercase cl2 p-r-8">
                                Trending Now:
                            </span>
                            <span className="dis-inline-block cl6 slide100-txt pos-relative size-w-0" data-in="fadeInDown" data-out="fadeOutDown">
                                <span className="dis-inline-block slide100-txt-item animated visible-false">
                                    Interest rate angst trips up US equity bull market
                                </span>
                                <span className="dis-inline-block slide100-txt-item animated visible-false">
                                    Designer fashion show kicks off Variety Week
                                </span>
                                <span className="dis-inline-block slide100-txt-item animated visible-false">
                                    Microsoft quisque at ipsum vel orci eleifend ultrices
                                </span>
                            </span>
                        </div>
                        <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                            <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
                            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                <i className="zmdi zmdi-search" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Feature post */}
                <section className="bg0">
                    <div className="container">
                        <div className="row m-rl--1">
                            <div className="col-md-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-3 how1 pos-relative" style={{ backgroundImage: 'url(images/post-01.jpg)' }}>
                                    <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            Business
                                        </a>
                                        <h3 className="how1-child2 m-t-14 m-b-10">
                                            <a href="blog-detail-01.html" className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                                Microsoft quisque at ipsum vel orci eleifend ultrices
                                            </a>
                                        </h3>
                                        <span className="how1-child2">
                                            <span className="f1-s-4 cl11">
                                                Jack Sims
                                            </span>
                                            <span className="f1-s-3 cl11 m-rl-3">
                                                -
                                            </span>
                                            <span className="f1-s-3 cl11">
                                                Feb 16
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-rl-1">
                                <div className="row m-rl--1">
                                    <div className="col-12 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-4 how1 pos-relative" style={{ backgroundImage: 'url(images/post-02.jpg)' }}>
                                            <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    Culture
                                                </a>
                                                <h3 className="how1-child2 m-t-14">
                                                    <a href="blog-detail-01.html" className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
                                                        London ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-5 how1 pos-relative" style={{ backgroundImage: 'url(images/post-03.jpg)' }}>
                                            <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    Life Style
                                                </a>
                                                <h3 className="how1-child2 m-t-14">
                                                    <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        Pellentesque dui nibh, pellen-tesque ut dapibus ut
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-5 how1 pos-relative" style={{ backgroundImage: 'url(images/post-04.jpg)' }}>
                                            <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03" />
                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    Sport
                                                </a>
                                                <h3 className="how1-child2 m-t-14">
                                                    <a href="blog-detail-01.html" className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        Motobike Vestibulum vene-natis purus nec nibh volutpat
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Post */}
                <section className="bg0 p-t-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8">
                                <div className="p-b-20">
                                    {/* Entertainment */}
                                    <div className="tab01 p-b-20">
                                        <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                            {/* Brand tab */}
                                            <h3 className="f1-m-2 cl12 tab01-title">
                                                Entertainment
                                            </h3>
                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#tab1-1" role="tab">All</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab1-2" role="tab">Celebrity</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab1-3" role="tab">Movies</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab1-4" role="tab">Music</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab1-5" role="tab">Games</a>
                                                </li>
                                                <li className="nav-item-more dropdown dis-none">
                                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/*  */}
                                            <a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                View all
                                                <i className="fs-12 m-l-5 fa fa-caret-right" />
                                            </a>
                                        </div>
                                        {/* Tab panes */}
                                        <div className="tab-content p-t-35">
                                            {/* - */}
                                            <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-05.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        American live music lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-06.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-07.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Game
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-08.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Celebrity
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-09.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        American live music lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-08.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Celebrity
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-06.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-07.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Game
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-08.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        American live music lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-07.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Celebrity
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-06.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-05.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Game
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-06.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        American live music lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-09.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Celebrity
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-07.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-08.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Game
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-07.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        American live music lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-08.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Celebrity
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-06.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Music
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-09.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Game
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Business */}
                                    <div className="tab01 p-b-20">
                                        <div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                            {/* Brand tab */}
                                            <h3 className="f1-m-2 cl13 tab01-title">
                                                Business
                                            </h3>
                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#tab2-1" role="tab">All</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab2-2" role="tab">Finance</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab2-3" role="tab">Money &amp; Markets</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab2-4" role="tab">Small Business</a>
                                                </li>
                                                <li className="nav-item-more dropdown dis-none">
                                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/*  */}
                                            <a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                View all
                                                <i className="fs-12 m-l-5 fa fa-caret-right" />
                                            </a>
                                        </div>
                                        {/* Tab panes */}
                                        <div className="tab-content p-t-35">
                                            {/* - */}
                                            <div className="tab-pane fade show active" id="tab2-1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-10.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        Bitcoin lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Finance
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-11.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Small Business
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-12.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Economy
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-13.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Money &amp; Markets
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab2-2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-13.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        Bitcoin lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Finance
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-12.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Small Business
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-11.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Economy
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-10.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Money &amp; Markets
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab2-3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-11.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        Bitcoin lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Finance
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-12.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Small Business
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-13.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Economy
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-10.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Money &amp; Markets
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab2-4" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-12.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        Bitcoin lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Finance
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-13.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Small Business
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-10.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Economy
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-11.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Money &amp; Markets
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Travel */}
                                    <div className="tab01 p-b-20">
                                        <div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                            {/* Brand tab */}
                                            <h3 className="f1-m-2 cl14 tab01-title">
                                                Travel
                                            </h3>
                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-toggle="tab" href="#tab3-1" role="tab">All</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab3-2" role="tab">Hotels</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab3-3" role="tab">Flight</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab3-4" role="tab">Beachs</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-toggle="tab" href="#tab3-5" role="tab">Culture</a>
                                                </li>
                                                <li className="nav-item-more dropdown dis-none">
                                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/*  */}
                                            <a href="category-01.html" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                                View all
                                                <i className="fs-12 m-l-5 fa fa-caret-right" />
                                            </a>
                                        </div>
                                        {/* Tab panes */}
                                        <div className="tab-content p-t-35">
                                            {/* - */}
                                            <div className="tab-pane fade show active" id="tab3-1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-14.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        You wish lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Hotels
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-15.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Beachs
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-16.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Flight
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-17.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Culture
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab3-2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-15.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        You wish lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Hotels
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-16.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Beachs
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-17.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Flight
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-18.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Culture
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab3-3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-16.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        You wish lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Hotels
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-17.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Beachs
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-18.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Flight
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-14.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Culture
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab3-4" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-17.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        You wish lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Hotels
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-18.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Beachs
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-14.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Flight
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-15.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Culture
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* - */}
                                            <div className="tab-pane fade" id="tab3-5" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="m-b-30">
                                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-18.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="p-t-20">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                                        You wish lorem ipsum dolor sit amet consectetur
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                                        Hotels
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 18
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-17.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Beachs
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 17
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-16.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Flight
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 16
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Item post */}
                                                        <div className="flex-wr-sb-s m-b-30">
                                                            <a href="blog-detail-01.html" className="size-w-1 wrap-pic-w hov1 trans-03">
                                                                <img src="images/post-15.jpg" alt="IMG" />
                                                            </a>
                                                            <div className="size-w-2">
                                                                <h5 className="p-b-5">
                                                                    <a href="blog-detail-01.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>
                                                                <span className="cl8">
                                                                    <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                                                        Culture
                                                                    </a>
                                                                    <span className="f1-s-3 m-rl-3">
                                                                        -
                                                                    </span>
                                                                    <span className="f1-s-3">
                                                                        Feb 12
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-4">
                                <div className="p-l-10 p-rl-0-sr991 p-b-20">
                                    {/*  */}
                                    <div>
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Most Popular
                                            </h3>
                                        </div>
                                        <ul className="p-t-35">
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    1
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    2
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit consectetur non neque
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    3
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Nunc vestibulum, enim vitae condimentum volutpat lobortis ante
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    4
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit justo consectetur non neque elementum
                                                </a>
                                            </li>
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                                                    5
                                                </div>
                                                <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                                    Proin velit consectetur non neque
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*  */}
                                    <div className="flex-c-s p-t-8">
                                        <a href="#">
                                            <img className="max-w-full" src="images/banner-02.jpg" alt="IMG" />
                                        </a>
                                    </div>
                                    {/*  */}
                                    <div className="p-t-50">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Stay Connected
                                            </h3>
                                        </div>
                                        <ul className="p-t-35">
                                            <li className="flex-wr-sb-c p-b-20">
                                                <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
                                                    <span className="fab fa-facebook-f" />
                                                </a>
                                                <div className="size-w-3 flex-wr-sb-c">
                                                    <span className="f1-s-8 cl3 p-r-20">
                                                        6879 Fans
                                                    </span>
                                                    <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                        Like
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex-wr-sb-c p-b-20">
                                                <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
                                                    <span className="fab fa-twitter" />
                                                </a>
                                                <div className="size-w-3 flex-wr-sb-c">
                                                    <span className="f1-s-8 cl3 p-r-20">
                                                        568 Followers
                                                    </span>
                                                    <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                        Follow
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex-wr-sb-c p-b-20">
                                                <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0">
                                                    <span className="fab fa-youtube" />
                                                </a>
                                                <div className="size-w-3 flex-wr-sb-c">
                                                    <span className="f1-s-8 cl3 p-r-20">
                                                        5039 Subscribers
                                                    </span>
                                                    <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                        Subscribe
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner */}
                <div className="container">
                    <div className="flex-c-c">
                        <a href="#">
                            <img className="max-w-full" src="images/banner-01.jpg" alt="IMG" />
                        </a>
                    </div>
                </div>
                {/* Latest */}
                <section className="bg0 p-t-60 p-b-35">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-20">
                                <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Latest Articles
                                    </h3>
                                </div>
                                <div className="row p-t-35">
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-01.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-02.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 16
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-03.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 15
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-04.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 13
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-05.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 10
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                        {/* Item latest */}
                                        <div className="m-b-45">
                                            <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                                <img src="images/latest-06.jpg" alt="IMG" />
                                            </a>
                                            <div className="p-t-16">
                                                <h5 className="p-b-5">
                                                    <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                        You wish lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl8">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 09
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-4">
                                <div className="p-l-10 p-rl-0-sr991 p-b-20">
                                    {/* Video */}
                                    <div className="p-b-55">
                                        <div className="how2 how2-cl4 flex-s-c m-b-35">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Featured Video
                                            </h3>
                                        </div>
                                        <div>
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="images/video-01.jpg" alt="IMG" />
                                                <button className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-01">
                                                    <span className="fab fa-youtube" />
                                                </button>
                                            </div>
                                            <div className="p-tb-16 p-rl-25 bg3">
                                                <h5 className="p-b-5">
                                                    <a href="#" className="f1-m-3 cl0 hov-cl10 trans-03">
                                                        Music lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </h5>
                                                <span className="cl15">
                                                    <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                        by John Alvarado
                                                    </a>
                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>
                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Subscribe */}
                                    <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
                                        <h5 className="f1-m-5 cl0 p-b-10">
                                            Subscribe
                                        </h5>
                                        <p className="f1-s-1 cl0 p-b-25">
                                            Get all latest content delivered to your email a few times a month.
                                        </p>
                                        <form className="size-a-9 pos-relative">
                                            <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email" />
                                            <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                                <i className="fa fa-arrow-right" />
                                            </button>
                                        </form>
                                    </div>
                                    {/* Tag */}
                                    <div className="p-b-55">
                                        <div className="how2 how2-cl4 flex-s-c m-b-30">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Tags
                                            </h3>
                                        </div>
                                        <div className="flex-wr-s-s m-rl--5">
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Fashion
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Lifestyle
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Denim
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Streetstyle
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Crafts
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Magazine
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                News
                                            </a>
                                            <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Blogs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer>
                    <div className="bg2 p-t-40 p-b-25">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 p-b-20">
                                    <div className="size-h-3 flex-s-c">
                                        <a href="index.html">
                                            <img className="max-s-full" src="images/icons/logo-02.png" alt="LOGO" />
                                        </a>
                                    </div>
                                    <div>
                                        <p className="f1-s-1 cl11 p-b-16">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
                                        </p>
                                        <p className="f1-s-1 cl11 p-b-16">
                                            Any questions? Call us on (+1) 96 716 6879
                                        </p>
                                        <div className="p-t-15">
                                            <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                                <span className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                                <span className="fab fa-twitter" />
                                            </a>
                                            <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                                <span className="fab fa-pinterest-p" />
                                            </a>
                                            <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                                <span className="fab fa-vimeo-v" />
                                            </a>
                                            <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                                <span className="fab fa-youtube" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 p-b-20">
                                    <div className="size-h-3 flex-s-c">
                                        <h5 className="f1-m-7 cl0">
                                            Popular Posts
                                        </h5>
                                    </div>
                                    <ul>
                                        <li className="flex-wr-sb-s p-b-20">
                                            <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-01.jpg" alt="IMG" />
                                            </a>
                                            <div className="size-w-5">
                                                <h6 className="p-b-5">
                                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                        Donec metus orci, malesuada et lectus vitae
                                                    </a>
                                                </h6>
                                                <span className="f1-s-3 cl6">
                                                    Feb 17
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex-wr-sb-s p-b-20">
                                            <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-02.jpg" alt="IMG" />
                                            </a>
                                            <div className="size-w-5">
                                                <h6 className="p-b-5">
                                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                    </a>
                                                </h6>
                                                <span className="f1-s-3 cl6">
                                                    Feb 16
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex-wr-sb-s p-b-20">
                                            <a href="#" className="size-w-4 wrap-pic-w hov1 trans-03">
                                                <img src="images/popular-post-03.jpg" alt="IMG" />
                                            </a>
                                            <div className="size-w-5">
                                                <h6 className="p-b-5">
                                                    <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03">
                                                        Suspendisse dictum enim quis imperdiet auctor
                                                    </a>
                                                </h6>
                                                <span className="f1-s-3 cl6">
                                                    Feb 15
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-lg-4 p-b-20">
                                    <div className="size-h-3 flex-s-c">
                                        <h5 className="f1-m-7 cl0">
                                            Category
                                        </h5>
                                    </div>
                                    <ul className="m-t--12">
                                        <li className="how-bor1 p-rl-5 p-tb-10">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Fashion (22)
                                            </a>
                                        </li>
                                        <li className="how-bor1 p-rl-5 p-tb-10">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Technology (29)
                                            </a>
                                        </li>
                                        <li className="how-bor1 p-rl-5 p-tb-10">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Street Style (15)
                                            </a>
                                        </li>
                                        <li className="how-bor1 p-rl-5 p-tb-10">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                Life Style (28)
                                            </a>
                                        </li>
                                        <li className="how-bor1 p-rl-5 p-tb-10">
                                            <a href="#" className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                                                DIY &amp; Crafts (16)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg11">
                        <div className="container size-h-4 flex-c-c p-tb-15">
                            <span className="f1-s-1 cl0 txt-center">
                                Copyright © 2018
                                <a href="#" className="f1-s-1 cl10 hov-link1">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </span>
                        </div>
                    </div>
                </footer>
                {/* Back to top */}
                <div className="btn-back-to-top" id="myBtn">
                    <span className="symbol-btn-back-to-top">
                        <span className="fas fa-angle-up" />
                    </span>
                </div>
                {/* Modal Video 01*/}
                <div className="modal fade" id="modal-video-01" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document" data-dismiss="modal">
                        <div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">×</div>
                        <div className="wrap-video-mo-01">
                            <div className="video-mo-01">
                                <iframe src="https://www.youtube.com/embed/wJnBTPUQS5A?rel=0" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
            {/* <!--===============================================================================================--> */}
            <script src="vendor/animsition/js/animsition.min.js"></script>
            {/* <!--===============================================================================================--> */}
            <script src="vendor/bootstrap/js/popper.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
            {/* <!--===============================================================================================--> */}
            <script src="js/main.js"></script>


        </React.Fragment>
    )
}