import React from 'react';
import ReactDom from 'react-dom';
import  'style-loader!css-loader!scss/normalize.css';
import  'scss/main.scss';

/*组件引用*/
import Nav from 'js/nav';
import Footer from 'js/footer';

ReactDom.render(
    <div>
        <Nav/>
        <Footer/>
    </div>
    ,
    document.getElementById('app')
);