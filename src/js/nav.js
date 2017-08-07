/**
 * Created by MHC on 2017/7/23.
 * nav组件
 */
import React from 'react';
export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state ={navList: [{href:"#",itemName:'首页'},
        {href:"section01",itemName:'平台功能'},
        {href:"section04",itemName:'场景案例'},
        {href:"section05",itemName:'区块链特性'},
        {href:"section06",itemName:'同业合作'},
        {href:"sectionDoc",itemName:'产品文档'}
      ]
    };
    this.handelClick=this.handelClick.bind(this);
  }
  render() {
    const navListDOM = this.state.navList.map((navList,index)=>{
      return (<li key={`${navList.itemName}-${index}`}>
        <a href={navList.href} onClick={this.handelClick}>{navList.itemName}</a>
      </li>)
    });
    return  (
        <nav className="nav-bar">
          <div className="div-nav">
            <div className="logo">区块链开放平台</div>
            <ul className="nav-list">
              {navListDOM}
            </ul>
            <div className="login">
              <a href="#">注册</a>
              <a href="#">登陆</a>
            </div>
          </div>
        </nav>
    );
  }
  handelClick(e){
      //滚动动画函数传入a标签的父级元素
      /*function ScrollTop (elemParent ){
          console.log(elemParent);
          elemParent.addEventListener('click',scrollCallBack);
      }*/
      //elemParent事件监听回调
      //function scrollCallBack(e){
      //console.log(e.target);
          e.preventDefault();
      //e.target.tagName="A" 报错？
          //if(e.target.tagName="A"){
              var id=e.target.getAttribute('href').split('#').join('');
             // console.log(id);
              var top = 0;
              if(id){
                  //获得锚点目标
                  var elemAnchor=document.getElementById(id);
                  //锚点目标距离顶部距离
                   top = elemAnchor.offsetTop;
              }
              //console.log(top);
              //滚动条当前位置
              var currentPosition= document.body.scrollTop;
              //设置动画时间ms
              var duration =30;
              //计算duration时间内滚动条需要移动距离
              var speed =(top-currentPosition)/duration;
              //设置定时器
              var timer=setInterval(function(){
                  scrollTo(0,currentPosition)
                  currentPosition+=speed;
                  if(speed>0){
                      if(currentPosition>=top){
                          clearInterval(timer);
                      }
                  }else{
                      if(currentPosition<top){
                          clearInterval(timer);
                      }
                  }
              },10);


        //  }
      //}

      //ScrollTop(this);
  }
}
