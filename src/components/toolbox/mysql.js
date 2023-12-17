import React from "react";
import '../../styles/toolbox/mysql.css';
import mysql from '../../images/toolbox/mysql.png';

const Mysql = () => {

    const handleMouseOver = () => {
        const mysqlContainer = document.querySelector('.mysql');
        const mysqlImg = document.querySelector('.mysql-img');
        if (mysqlImg.classList.contains('mysql-disappear')) {
            mysqlImg.classList.remove('mysql-disappear');
        };
        mysqlImg.classList.add('mysql-appear');
        mysqlContainer.style.height = '100px';
    }
    const handleMouseOut = () => {
        const mysqlContainer = document.querySelector('.mysql');
        const mysqlImg = document.querySelector('.mysql-img');
        mysqlImg.classList.remove('mysql-appear');
        mysqlImg.classList.add('mysql-disappear');
        mysqlContainer.style.height = 'auto';
    }

    return (
        <div className="mysql-main">
            <div className="mysql" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <p>MySql</p>
                <img className="mysql-img" src={mysql} alt="mysql" />
            </div>
            <div className="protector"></div>
        </div>
    )
}

export default Mysql;