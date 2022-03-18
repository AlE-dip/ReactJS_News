export default function MostPopular(props) {
    var Item = props.data
    if (Item.data && Item.data.rss) {
        var data = Item.data.rss.channel[0].item
        return (
            <div>
                <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">
                        {Item.topic}
                    </h3>
                </div>
                <ul className="p-t-35">
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            1
                        </div>
                        <a href={data[0].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {data[0].title}
                        </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            2
                        </div>
                        <a href={data[1].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {data[1].title}
                        </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            3
                        </div>
                        <a href={data[2].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {data[2].title}
                        </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            4
                        </div>
                        <a href={data[3].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {data[3].title}
                        </a>
                    </li>
                    <li className="flex-wr-sb-s p-b-22">
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                            5
                        </div>
                        <a href={data[4].link} className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {data[4].title}
                        </a>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (<div></div>)
    }
}