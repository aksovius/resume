import React from 'react';
import '../css/Hobby.scss'

const Hobby = () => {
    return (
            <div className="hobby" id='hobby'>
                <div className="hobby__image">
                    <div className="hobby__info hobby__author">Photo by <a className="myLink" href="/" target="_blank">JK</a></div>
                    <div className="hobby__info hobby__location">Travel and cycling is my passion </div>
                </div>
            </div>
    );
};

export default Hobby;