export default function ComponentPost(props) {
    var Item = props.data
    console.log('arr', Item)
    if (Item[0].data && Item[0].data.rss) {
        return (
            <div className="bg0 p-t-70 p-b-55">
                    <div className="container">
                        <div className="row justify-content-center">
                            {MainComponentPost(Item)}
                            {SubComponentPost(Item)}
                        </div>
                    </div>
                </div>
        )
    } else {
        return (
            <div>
                Loadding...
            </div>
        )
    }
}

function MainComponentPost(Item) {
    var itemNews = Item[0]
    var data = itemNews.data.rss.channel[0].item
    var author = itemNews.data.rss.channel[0].generator
    return (
        <div className="col-md-10 col-lg-8 p-b-80">
            <div className="row">
                {showPost(data, author, 1)}
            </div>
            {/* Pagination */}
            <div className="flex-wr-s-c m-rl--7 p-t-15">
                {Pagination(data, author, data.length)}
            </div>
        </div>
    )
}

function Pagination(data, author, length) {
    var btn = new Array();
    var list = (length-4)/12
    for (var i = 1; i <= list; i++) {
        btn.push(
            <button onClick={() => alert(i)} className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7">{i}</button>
        )
    }
    return btn;
}

function SubComponentPost(Item) {
    var itemHot = Item[1]
    var data = itemHot.data.rss.channel[0].item
    return (
        <div className="col-md-10 col-lg-4 p-b-80">
            <div className="p-l-10 p-rl-0-sr991">
                {/* Subscribe */}
                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                    <h5 className="f1-m-5 cl0 p-b-10">
                        Theo dõi
                    </h5>
                    <p className="f1-s-1 cl0 p-b-25">
                        Đăng ký thành viên ngay để có thể theo dõi những tin tức nóng hổi mỗi ngày.
                    </p>
                    <form className="size-a-9 pos-relative">
                        <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email" />
                        <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                            <i className="fa fa-arrow-right" />
                        </button>
                    </form>
                </div>
                {/* Most Popular */}
                <div className="p-b-23">
                    <div className="how2 how2-cl4 flex-s-c">
                        <h3 className="f1-m-2 cl3 tab01-title">
                            Nổi Bật
                        </h3>
                    </div>
                    <ul className="p-t-35">
                        {showHotNews(data)}
                    </ul>
                </div>
                {/*  */}
                <div className="flex-c-s p-b-50">
                    <a href="#">
                        <img className="max-w-full" src="images/banner-02.jpg" alt="IMG" />
                    </a>
                </div>
                {/* Tag */}
                <div>
                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                        <h3 className="f1-m-2 cl3 tab01-title">
                            Thẻ
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
    )
}

function showPost(data, author, page) {
    var post = new Array();
    var pageLength = page*12 + 4
    for (var i = 4; i < pageLength; i++) {
        if (pageLength > data.length)
            break;
        post.push(
            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                {/* Item latest */}
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src={data[i].description} alt="IMG" />
                    </a>
                    <div className="p-t-16">
                        <h5 className="p-b-5">
                            {/* <Link to="/detail" className="f1-m-3 cl2 hov-cl10 trans-03">
                                You wish lorem ipsum dolor sit amet consectetur
                            </Link> */}
                            <a href={data[i].link} className="f1-m-3 cl2 hov-cl10 trans-03">
                            {data[i].title}
                            </a>
                        </h5>
                        <span className="cl8">
                            <a href={data[i].link} className="f1-s-4 cl8 hov-cl10 trans-03">
                                by {author}
                            </a>
                            <span className="f1-s-3 m-rl-3">
                                -
                            </span>
                            <span className="f1-s-3">
                                {data[i].pubDate}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return post;
}

function showHotNews(data) {
    var post = new Array();
    for (var i = 0; i < 5; i++) {
        post.push(
            <li className="flex-wr-sb-s p-b-22">
            <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                {i+1}
            </div>
            <a href={data[i].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                {data[i].title}
            </a>
        </li>
        )
    }
    return post;
}