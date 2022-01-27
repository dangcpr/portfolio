import './App.css';
import CountUp from 'react-countup';

const Card = (props) => {
    return(
        <div className="Card" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={props.delay}>
            <h2 id={props.name}>
            {props.number}
            </h2>
            <p class="Card-content">{props.content}</p>
        </div>
    )
}
function AboutMe() {
    return(
        <div id="AboutMe" className='BlockPage' data-aos="fade-up" data-aos-duration="1200">
            <h1 id="AboutMeH1">
                About Me
            </h1>
            <div className="Cards">
                { Card({ 
                        delay: 700,
                        name:"Birthday",  
                        number:20,
                        content:"Con số mang ý nghĩa đặc biệt. Tôi là sinh viên khoá K20 và năm nay tôi đã 20 tuổi."}) }
                { Card({ 
                        delay: 1400,
                        name:"Birthday",  
                        number:5,
                        content:"Đây là số project hiện có của tôi (bao gồm cả đồ án môn học, đồ án cá nhân và đồ án của các tổ chức tôi tham gia ở phần Portfolio)"}) }
                { Card({ 
                        delay: 2100,
                        name:"Birthday",  
                        number:14,
                        content:"Nó không có ý nghĩa gì đặc biệt lắm. Chỉ là con số may mắn của tôi :3"}) }
            </div>
        </div>
    )
}
export default AboutMe;