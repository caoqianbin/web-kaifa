import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css'
export default function Header(){
    
    return (
        <div className='header1-wrap'>
            <header>
                
                <div style={{float:'left',lineHeight:'30px'}}>
                    
                    <Link to='/all'>全部</Link>
                    <Link to='/good'>精华</Link>
                    <Link to='/share'>分享</Link>
                    <Link to='/answer'>问答</Link>
                    <Link to='/recruit'>招聘</Link>
                    <Link to='/custom'>客户端测试</Link>
                </div>
            </header>
        </div>
    )
} 