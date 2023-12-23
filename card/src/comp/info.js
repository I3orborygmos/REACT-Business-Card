import React from "react"
import MyImage from './image.jpg'

export default function Info() {
    return (
        <div className="info">
            <img src={MyImage} alt="website developer" className="info--pic"/>
            <h1 className="info--name">Connor McDonald</h1>
            <h2 className="info--title">Frontend Developer</h2>
            <ul>
                <li><a href="mailto:connor.mcdonald24@gmail.com" className="btn--mail">Mail</a></li>
                <li><a href="https://github.com/I3orborygmos" className="btn--git">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/itsmeconnor/" className="btn--link">Lindedin</a></li>
            </ul>
        </div>
    )   
}