import { Link } from "react-router-dom"

function showLink(data) {
    var row = new Array()
    for (var i = 0; i < data.length; i++) {
        if (i === 0) {
            row.push(<a className="nav-link active" data-toggle="pill" href={"#news-" + data[i].id} role="tab">{data[i].topic}</a>)
        } else {
            row.push(<a className="nav-link" data-toggle="pill" href={"#news-" + data[i].id} role="tab">{data[i].topic}</a>)
        }
    }
    return row
}

function itemTab(item, topic) {
    return (
        <div className="col-3">
            {/* Item post */}
            <div>
                <a href={item.link} className="wrap-pic-w hov1 trans-03">
                    <img src={item.description} alt="IMG" />
                </a>
                <div className="p-t-10">
                    <h5 className="p-b-5">
                        <a href={item.link} className="f1-s-5 cl3 hov-cl10 trans-03">
                            {item.title}
                        </a>
                    </h5>
                    <span className="cl8">
                        <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                            {topic}
                        </a>
                        <span className="f1-s-3 m-rl-3">
                            -
                        </span>
                        <span className="f1-s-3">
                            {item.pubDate}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

function showContent(data) {
    var row = new Array()
    for (var i = 0; i < data.length; i++) {
        var arr = data[i].data.rss.channel[0].item
        if (i === 0) {
            row.push(<div className="tab-pane show active" id={"news-" + data[i].id} role="tabpanel">
                <div className="row">
                    {itemTab(arr[4], data[i].topic)}
                    {itemTab(arr[5], data[i].topic)}
                    {itemTab(arr[6], data[i].topic)}
                    {itemTab(arr[7], data[i].topic)}
                </div>
            </div>)
        } else {
            row.push(<div className="tab-pane show" id={"news-" + data[i].id} role="tabpanel">
                <div className="row">
                    {itemTab(arr[4], data[i].topic)}
                    {itemTab(arr[5], data[i].topic)}
                    {itemTab(arr[6], data[i].topic)}
                    {itemTab(arr[7], data[i].topic)}
                </div>
            </div>)
        }
    }
    return row
}

export default function TabHeader(props) {
    var data = props.data
    var check = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].data && data[i].data.rss) {
            check++
        }
    }
    if (check === data.length) {
        console.log("Tab", data)
        return (
            <li className={props.active === 1 ? "mega-menu-item main-menu-active"  : "mega-menu-item"}>
                <Link to={props.link}>{data[0].topic}</Link>
                <div className="sub-mega-menu">
                    <div className="nav flex-column nav-pills" role="tablist">
                        {showLink(data)}
                        {/* <a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
                        <a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
                        <a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
                        <a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
                        <a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
                        <a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a> */}
                    </div>
                    <div className="tab-content">
                        {showContent(data)}
                    </div>
                </div>
            </li>
        )
    } else {
        return <div></div>
    }
}