import React from "react"
import FeaturePost from "./content/FeaturePost"
import Item from "./content/Item"
import { Link } from "react-router-dom"
import ComponentPost from "./content/ComponentPost"

export default function News(props) {
    var tin_moi = new Item()
    tin_moi.data = props.dataApp.xem_nhieu
    tin_moi.topic = "Tin Mới"
    tin_moi.id = 0
    tin_moi.indexOfData = 0

    var noi_bat = new Item()
    noi_bat.data = props.dataApp.noi_bat
    noi_bat.topic = "Nổi Bật"
    noi_bat.id = 1
    noi_bat.indexOfData = 0

    var array_News = new Array()
    array_News.push(tin_moi)
    array_News.push(noi_bat)

    return (
        <div>

            {/* Breadcrumb */}
            <div className="container">
                <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1 p-r-30 m-tb-6">
                        <a href="/" className="breadcrumb-item f1-s-3 cl9">
                            Trang chủ
                        </a>
                        <a href="/tin_moi" className="breadcrumb-item f1-s-3 cl9">
                            {tin_moi.topic}
                        </a>
                    </div>
                    <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                        <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
                        <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                            <i className="zmdi zmdi-search" />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Page heading */}
            <div className="container p-t-4 p-b-40">
                <h2 className="f1-l-1 cl2">
                   {tin_moi.topic}
                </h2>
            </div>
            
            {/* Feature post */}
            <FeaturePost data={tin_moi} />

            {/* Post */}
            <ComponentPost data={array_News} />
        </div>

    )
}