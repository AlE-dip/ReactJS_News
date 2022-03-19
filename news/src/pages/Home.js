import React, { Component } from "react";
import FeaturePost from "./content/FeaturePost";
import Topic from "./content/Topic";
import Item from "./content/Item";
import ItemList from "./content/ItemList";
import MostPopular from "./content/MostPopular";

export default function Home(props) {


    var trang_chu = new Item()

    var giai_tri = new Item()
    var the_thao = new Item()
    var du_lich = new Item()
    var khoa_hoc = new Item()
    var cuoi = new Item()
    var topicGiaiTri = new Array()

    var thoi_su = new Item()
    var the_gioi = new Item()
    var phap_luat = new Item()
    var giao_duc = new Item()
    var kinh_doanh = new Item()
    var topicThoiSu = new Array()

    var doi_song = new Item()
    var suc_khoe = new Item()
    var so_hoa = new Item()
    var xe = new Item()
    var tam_su = new Item()
    var topicDoiSong = new Array()

    var noi_bat = new Item()
    var moi_nhat = new Item()
    var xem_nhieu = new Item()

    //FeaturePost
    //console.log("Home", props.dataApp)
    trang_chu.data = props.dataApp.trang_chu
    trang_chu.topic = "Trang chủ"
    trang_chu.id = 0
    trang_chu.indexOfData = 0

    //Giải trí
    giai_tri.data = props.dataApp.giai_tri
    giai_tri.topic = "Giải trí"
    giai_tri.id = 1
    giai_tri.indexOfData = 0;

    //The thao
    the_thao.data = props.dataApp.the_thao
    the_thao.topic = "Thể thao"
    the_thao.id = 2
    the_thao.indexOfData = 0;

    //The thao
    du_lich.data = props.dataApp.du_lich
    du_lich.topic = "Du lịch"
    du_lich.id = 3
    du_lich.indexOfData = 0;

    //Khoa hoc
    khoa_hoc.data = props.dataApp.khoa_hoc
    khoa_hoc.topic = "Khoa học"
    khoa_hoc.id = 4
    khoa_hoc.indexOfData = 0;

    //Cuoi
    cuoi.data = props.dataApp.cuoi
    cuoi.topic = "Cười"
    cuoi.id = 5
    cuoi.indexOfData = 0;

    topicGiaiTri.push(giai_tri)
    topicGiaiTri.push(the_thao)
    topicGiaiTri.push(du_lich)
    topicGiaiTri.push(khoa_hoc)
    topicGiaiTri.push(cuoi)

    //Thoi su
    thoi_su.data = props.dataApp.thoi_su
    thoi_su.topic = "Thời sự"
    thoi_su.id = 6
    thoi_su.indexOfData = 0;

    //The gioi
    the_gioi.data = props.dataApp.the_gioi
    the_gioi.topic = "Thế giới"
    the_gioi.id = 7
    the_gioi.indexOfData = 0;

    //Phap luat
    phap_luat.data = props.dataApp.phap_luat
    phap_luat.topic = "Pháp luật"
    phap_luat.id = 8
    phap_luat.indexOfData = 0;

    //Giao duc
    giao_duc.data = props.dataApp.giao_duc
    giao_duc.topic = "Giáo dục"
    giao_duc.id = 9
    giao_duc.indexOfData = 0;

    //Kinh doanh
    kinh_doanh.data = props.dataApp.kinh_doanh
    kinh_doanh.topic = "Kinh doanh"
    kinh_doanh.id = 10
    kinh_doanh.indexOfData = 0;

    topicThoiSu.push(thoi_su)
    topicThoiSu.push(the_gioi)
    topicThoiSu.push(phap_luat)
    topicThoiSu.push(giao_duc)
    topicThoiSu.push(kinh_doanh)

    //Doi song
    doi_song.data = props.dataApp.doi_song
    doi_song.topic = "Đời sống"
    doi_song.id = 11
    doi_song.indexOfData = 0;

    //Suc khoe
    suc_khoe.data = props.dataApp.suc_khoe
    suc_khoe.topic = "Sức khỏe"
    suc_khoe.id = 12
    suc_khoe.indexOfData = 0;

    //So hoa
    so_hoa.data = props.dataApp.so_hoa
    so_hoa.topic = "Số hóa"
    so_hoa.id = 13
    so_hoa.indexOfData = 0;

    //Xe
    xe.data = props.dataApp.xe
    xe.topic = "Xe"
    xe.id = 14
    xe.indexOfData = 0;

    //Tam su
    tam_su.data = props.dataApp.tam_su
    tam_su.topic = "Tâm sự"
    tam_su.id = 15
    tam_su.indexOfData = 0;

    topicDoiSong.push(doi_song)
    topicDoiSong.push(suc_khoe)
    topicDoiSong.push(so_hoa)
    topicDoiSong.push(xe)
    topicDoiSong.push(tam_su)

    //Noi bat
    noi_bat.data = props.dataApp.noi_bat
    noi_bat.topic = "Nổi bật"
    noi_bat.id = 16
    noi_bat.indexOfData = 0;

    //Moi nhat
    moi_nhat.data = props.dataApp.moi_nhat
    moi_nhat.topic = "Mới nhất"
    moi_nhat.id = 17
    moi_nhat.indexOfData = 0;

    //Xem nhieu
    xem_nhieu.data = props.dataApp.xem_nhieu
    xem_nhieu.topic = "Xem nhiều"
    xem_nhieu.id = 18
    xem_nhieu.indexOfData = 0;

    // console.log("Home gt", giai_tri)
    // console.log("Home tc", trang_chu)
    // console.log("Home tt", the_thao)
    // console.log("Home tt", topicGiaiTri)
    // console.log("Home tt", topicThoiSu)
   // console.log("Home nb", noi_bat)
    //console.log("Home mn", moi_nhat)
    //console.log("Home xn", xem_nhieu)


    return (
        <div>
            {/* <!-- Headline --> */}
            {/* Breadcrumb */}
            <div className="container">
                <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1 p-r-30 m-tb-6">
                        {/* Page heading */}
                        <div className="container p-t-4 p-b-40">
                            <h2 className="f1-l-1 cl2">
                                Trang chủ
                            </h2>
                        </div>
                    </div>
                    <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                        <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Tìm kiếm" />
                        <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                            <i className="zmdi zmdi-search" />
                        </button>
                    </div>
                </div>
            </div>



            {/* Feature post */}
            <FeaturePost data={trang_chu} />

            {/* Post */}
            < section className="bg0 p-t-70" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="p-b-20">
                                {/* Entertainment */}
                                <Topic data={topicThoiSu} />
                                {/* Business */}
                                <Topic data={topicDoiSong} />
                                {/* Travel */}
                                <Topic data={topicGiaiTri} />
                                {/* <Topic data={state.trang_chu} /> */}
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-4">
                            <div className="p-l-10 p-rl-0-sr991 p-b-20">
                                {/*  */}
                                <MostPopular data={noi_bat}/>
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
                                            Liên kết
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
            </section >
            {/* Banner */}
            < div className="container" >
                <div className="flex-c-c">
                    <a href="#">
                        <img className="max-w-full" src="images/banner-01.jpg" alt="IMG" />
                    </a>
                </div>
            </div >
            {/* Latest */}
            < section className="bg0 p-t-60 p-b-35" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 p-b-20">
                            <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                                <h3 className="f1-m-2 cl3 tab01-title">
                                    Mới nhất
                                </h3>
                            </div>
                            <div className="row p-t-35">
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[4]} /> : <div></div>}
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[5]} /> : <div></div>}
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[6]} /> : <div></div>}
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[7]} /> : <div></div>}
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[8]} /> : <div></div>}
                                {trang_chu.data && trang_chu.data.rss ? <ItemList data={trang_chu.data.rss.channel[0].item[9]} /> : <div></div>}


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
            </section >
        </div>
    )
}

