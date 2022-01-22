import './App.css';
import {useState, useEffect} from 'react'
import ReactTypingEffect from 'react-typing-effect';

function ComingSoon() {
    return(
        <div className='background'>
            <ReactTypingEffect className='CMS' 
            text={["Coming soon ...", "See you later!"]}
            />
        </div>
    )
}
export default ComingSoon;