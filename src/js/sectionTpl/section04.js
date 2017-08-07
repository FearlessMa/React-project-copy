/**
 * Created by MHC-PC on 2017/7/31.
 */
import React from 'react';
export class Section04 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <div id="section04" className="section-box section04-box">
                    <h1>场景案例</h1>
                    <div className="section-fill">
                        <img src="src/img/b8.png" alt=""/>
                        <div className="section-fill-module"></div>
                        <div className="section04-content-box">
                                <div className="section04-item">
                                    <img src="./src/img/icon-card.png" alt=""/>
                                    <div className="section04-item-title">信用证</div>
                                    <div className="section04-iTitle">基于区块链的国内信用证</div>
                                    <div className="section04-reverse">
                                        <div className="section04-item-content">
                                            <span>业务流程信息共享</span>
                                            <span>取代信开，实时高效</span>
                                            <span>低成本，分布式</span>
                                            <span>公钥加密私钥解密，保证数据隐私</span>
                                            <span>私钥签名公钥验签，防止数据抵赖</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section04-item">
                                    <img src="./src/img/icon-qy.png" alt=""/>
                                    <div className="section04-item-title">数字签约</div>
                                    <div className="section04-iTitle">效率、权威、中立、公正</div>
                                    <div className="section04-reverse">
                                        <div className="section04-item-content">
                                            <span>满足金融机数据安全及隐私要求</span>
                                            <span>全流程数字化、参与方式多样</span>
                                            <span>集中管理，实现监督科技</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section04-item">
                                    <img src="./src/img/icon-qkl.png" alt=""/>
                                    <div className="section04-item-title">供应链金融</div>
                                    <div className="section04-iTitle">深度整合信息流、物流、资金流和商业流</div>
                                    <div className="section04-reverse">
                                        <div className="section04-item-content">
                                            <span>形成可信的信息流</span>
                                            <span>资产数字化</span>
                                            <span>提高监管能力</span>
                                            <span>形成通用的机构协助基础设施</span>
                                            <span>聚合数据、降低融资成本</span>
                                            <span>资源共享、实现共赢</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}