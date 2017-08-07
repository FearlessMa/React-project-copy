/**
 * Created by MHC-PC on 2017/8/1.
 */
import React from 'react';
export class Section05 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="section05" className="section-box section05-box">
                <h1>区块链特性</h1>
                <div className="section05-container">
                    <div className="section05-c-item">
                        <div className="section05-c-t">
                            不可篡改，可追溯
                        </div>
                        <div className="section05-c-c">
                            参与方都变成区块链网络的一个节点，便于监管与审计资金流、信息流等
                        </div>
                        <div className="section05-hidden-box">
                            <a href="#">查看更多</a>
                        </div>
                    </div>
                    <div className="section05-c-item">
                        <div className="section05-c-t">
                            效率提升，降低成本
                        </div>
                        <div className="section05-c-c">
                            通过程序化记录、存储、传递、核实、分析信息数据，能够将交易流程大大简化，从而提升了交易效率
                        </div>
                        <div className="section05-hidden-box">
                            <a href="#">查看更多</a>
                        </div>
                    </div>
                    <div className="section05-c-item">
                        <div className="section05-c-t">
                            去中心化
                        </div>
                        <div className="section05-c-c">
                            避免了单一记账人被控制贿赂而记假账的可能性，同时除非所有的节点被破坏，否则账目就不会丢失，从而保证了账目数据的安全性
                        </div>
                        <div className="section05-hidden-box">
                            <a href="#">查看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}