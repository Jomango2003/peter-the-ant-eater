import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'

function App(){
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
//hi
ReactDOM.render(<App/>, document.getElementById("root"));
