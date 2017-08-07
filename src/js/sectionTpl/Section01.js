/**
 * Created by MHC-PC on 2017/7/27.
 */
import React from 'react';

export class Section01 extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div id="section01" className="section-box section-A">
                <h1>平台功能</h1>
                <div>
                    <ul>
                        <li>
                            <div className="product-icon">
                                <img src="src/img/p-icon-system1.png" alt=""/>
                            </div>
                            <h3>智能管控系统</h3>
                            <p>
                                支持对底层云计算平台的运维
                                <br/>
                                灵活确定区块链部署的规模和节点运行状态
                                <br/>
                                功能完备的api接口及实时监控、历史浏览，及智能合约的部署、调用功能
                            </p>
                        </li>
                        <li>
                            <div className="product-icon">
                                <img src="src/img/p-icon-open.png" alt=""/>
                            </div>
                            <h3>开放平台</h3>
                            <p>
                               提供易用的API、请客户端、外链服务等，降低技术门槛
                            </p>
                        </li>
                        <li>
                            <div className="product-icon">
                                <img src="src/img/p-icon-module.png" alt=""/>
                            </div>
                            <h3>核心模块化</h3>
                            <p>
                                共识机制、加密机制、智能合约等核心模块深度优化
                                <br/>
                                联盟的稳定性、安全和性能得到提升
                            </p>
                        </li>
                        <li>
                            <div className="product-icon">
                                <img src="src/img/p-icon-skill.png" alt=""/>
                            </div>
                            <h3>支撑技术</h3>
                            <p>
                                Kubernates集群管理基于Docker的容器化部署
                                <br/>
                                完善的日志分析工具
                            </p>
                        </li>
                        <li>
                            <div className="product-icon">
                                <img src="src/img/p-icon-more.png" alt=""/>
                            </div>
                            <h3>更多功能</h3>
                            <p>
                                敬请期待
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}