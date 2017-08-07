/**
 * Created by MHC-PC on 2017/7/24.
 */
import React from 'react';
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="header">
                <ul className="multicast">
                    <li className="li-img">
                        <img src="src/img/b6.jpg" alt=""/>
                    </li>
                </ul>
                <div className="header-news">
                    <div className="news-box">
                        <div className="news-box-title">
                            <img src="./src/img/news1.png" alt=""/>
                        </div>
                        <ul>
                            <li>
                                <a href="#">收钱码新政公告</a>
                            </li>
                            <li>
                                <a href="#">服务商收钱码收单服务业务协作费延迟发放通知 </a>
                            </li>
                            <li>
                                <a href="#">收钱码物料申请变更公告 </a>
                            </li>
                            <li>
                                <a href="#">查看更多> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}