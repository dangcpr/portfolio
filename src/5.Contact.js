import './App.css';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import { saveAs } from "file-saver";
import React from "react";

function CV() {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/uc?id=1VgI24OnOg2KV1HJ6vZSWe8g2KXl4uSEw&export=download",
            "[CV] NHDang - NoPhone.pdf"
        );
    };
    return (
            <Button btnStyle="success" className="downCV" onClick={saveFile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Download CV
            </Button>
    )
}

function Contact() {
    return(
        <div id="Contact" className='BlockPage' data-aos="fade-up" data-aos-duration="1200">
            <h1 id="ContactH1">
                Contact Me
            </h1>
            {CV({})}
            <div className="ContactInfo" data-aos="fade-up" data-aos-duration="1200">
                <p style={{fontSize: "18px", letterSpacing: "1.8px"}}>Email: <a style={{color: "white"}}href='mailto:haidangchuprong@gmail.com'>haidangchuprong@gmail.com</a></p>
                <p style={{fontSize: "18px", letterSpacing: "1.8px"}}>Facebook: <a style={{color: "white"}}href='https://facebook.com/dangcpr'>https://facebook.com/dangcpr</a></p>
                <p style={{fontSize: "18px", letterSpacing: "1.8px"}}>Calendly: <a style={{color: "white"}}href='https://calendly.com/dangcpr/45min'>https://calendly.com/dangcpr/45min</a></p>
                <p style={{fontSize: "18px", letterSpacing: "1.8px"}}>Giờ hành chính: 07:30 - 17:00 hằng ngày</p>
                <p style={{fontSize: "18px", letterSpacing: "1.8px"}}>(Gửi email và tin nhắn vào giờ này để được phản hồi nhanh nhất)</p>
            </div>
        </div>
    )
}
export default Contact;