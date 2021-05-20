import React from 'react';
import './Banner.css'

export default function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner-buttons">
                    <button className="button">Playing</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">
                    Proident culpa tempor cillum non ipsum aliquip anim non. Nisi aliquip labore voluptate veniam voluptate. Cupidatat non et magna pariatur sit veniam commodo irure laboris duis ad tempor. Lorem qui eu voluptate eu esse fugiat non tempor aute ipsum irure et sunt.
                </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}
