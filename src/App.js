import logo from './logo.svg';
import cover from './Cover-fb.jpg';
import './App.css';
import ComingSoon from './CMS';
import AnhDang from './AnhDang.jpg';
import Menu from './1.Menu';
import HomePage from './2.HomePage';
import AboutMe from './3.AboutMe'
import Portfolio from './4.Portfolio'
import Contact from './5.Contact'

function App() {
  return (
    /*<ComingSoon></ComingSoon>*/ /*Dùng để thay thế khi cần nâng cấp trang web - Để sử dụng hãy gỡ cmt thẻ ComingSoon và cmt toàn bộ thẻ Class là App bên dưới */
    <div className="App">
      <Menu></Menu>
      <div className='main-App' style={{color: 'white'}}>
        <HomePage image={AnhDang}></HomePage>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
