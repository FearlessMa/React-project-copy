/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';
export class SectionDoc extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="sectionDoc" className="section-box">
                <h1>产品文档</h1>
                <div className="doc-list">
                    <div className="item-div">
                        <div className="border-div"></div>
                        <div className="doc-list-item">
                            <div className="doc-item-icon">01</div>
                            <div className="doc-item-content">注册登录</div>
                        </div>
                    </div>
                    <div className="item-div">
                        <div className="border-div"></div>
                        <div className="doc-list-item">
                            <div className="doc-item-icon">02</div>
                            <div className="doc-item-content">创建项目</div>
                        </div>
                    </div>
                    <div className="item-div">
                        <div className="border-div"></div>
                        <div className="doc-list-item">
                            <div className="doc-item-icon">03</div>
                            <div className="doc-item-content">获取秘钥</div>
                        </div>
                    </div>
                    <div className="item-div">
                        <div className="border-div"></div>
                        <div className="doc-list-item">
                            <div className="doc-item-icon">04</div>
                            <div className="doc-item-content">生成签名</div>
                        </div>
                    </div>
                    <div className="item-div">
                        <div className="border-div"></div>
                        <div className="doc-list-item">
                            <div className="doc-item-icon">05</div>
                            <div className="doc-item-content">启动项目</div>
                        </div>
                    </div>
                </div>
                <div className="doc-btn">
                    查看更多文档
                </div>
            </div>
        );
    }
}