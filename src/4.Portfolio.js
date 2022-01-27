import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from './LogoDang.png';
import ComputerIcon from './Icons';

function Portfoilio() {
    return(
        <div id="Portfolio" className='BlockPage' data-aos="fade-up" data-aos-duration="1200">
            <h1 id="PortfolioH1">
                Portfolio
            </h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(226, 27, 60)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(226, 27, 60)' }}
                    date="11/09/2021 - Hiện tại"
                    iconStyle={{ background: 'rgb(226, 27, 60)', color: '#fff' }}
                    icon= {<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Google Developer Student Club - HCMUS</h3>
                    <h4 className="vertical-timeline-element-subtitle">Event Team</h4>
                    <p>
                        Thành viên ban Sự kiện tại GDSC-HCMUS.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="05/07/2021 - Hiện tại"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon= {<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">SAB in HCMUS</h3>
                    <h4 className="vertical-timeline-element-subtitle">SAB Academy</h4>
                    <p>
                    Thành viên ban Học thuật tại SAB.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(216, 158, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(216, 158, 0)' }}
                    date="05/10/2020 - Hiện tại"
                    iconStyle={{ background: 'rgb(216, 158, 0)', color: '#fff' }}
                    icon= {<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Trường Đại học Khoa học Tự nhiên - ĐHQG TPHCM</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sinh viên khoá K2020</h4>
                    <p>
                    Sinh viên khoa CNTT - Chương trình Chuẩn - Hệ Chính Quy.
                    GPA: Kỳ 1: 7.94/10 - Kỳ 2: 8.68/10.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(38, 137, 12)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(38, 137, 12)' }}
                    date="21/08/2017 - 09/08/2020"
                    iconStyle={{ background: 'rgb(38, 137, 12)', color: '#fff' }}
                    icon= {<ComputerIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Trường THPT Chuyên Hùng Vương - Gia Lai</h3>
                    <h4 className="vertical-timeline-element-subtitle">C3A 17-20</h4>
                    <p>
                    Là học sinh lớp chuyên Toán - GPA: Lớp 10: 8.7/10 - Lớp 11: 8.7/10 - Lớp 12: 8.5/10.
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
</div>
    )
}
export default Portfoilio;