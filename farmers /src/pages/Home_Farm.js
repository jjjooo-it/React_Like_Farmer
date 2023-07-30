import { useState } from 'react';
import './styles/Home_Farm.css';
import { useNavigate } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineWorkOutline} from 'react-icons/md';

function Header(){
    
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    return(
        
        <div className='header'>
        <a href="http://localhost:3000/farm">LIKE <span className='a-plus'>FARMER</span></a>
        <div className="search">
          <input
            type="text"
            placeholder="작물을 검색하세요!(ex. 감자)"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button> ⌕ </button>
        </div>
        <div className='header-btn'>
          <button onClick={()=>navigate('/')}><AiOutlineHome style={{ width: "35px", height: "35px",color: "gray" }}/>홈</button>
          <button><CgProfile style={{ width: "35px", height: "35px" ,color: "gray"}}/>내 정보</button> {/*성민님 코드 연결*/}
          <button><MdOutlineWorkOutline style={{ width: "35px", height: "35px",color: "gray" }}/>채용공고</button>
          </div>
        </div>
    )
}
function Profile(){
    const[myImg, setMyImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    return(
        <div className='profile'>
           <img className='profile-img 'src={myImg} />
           <p className='profile-title'>ooo농부님 어서오세요!</p>
           <hr></hr>
           <p>강릉감자재배왕</p>
           <p>감자,고구마 풀스택</p>
           <button>수정하기</button>
        </div>
    )
}
function Board(){
    const[postImg, setPostImg] = useState("https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=800");
    return(
        <div className='board'>
            <button className='board-post'>글 올리기</button>
            <button className='board-text'>(제목)감자 1키로 2만원~<br/><img src={postImg} style={{ width: "500px", height: "200px"}}/></button>
        </div>
    )
}
function FindWorker(){
    return(
        <div className='ranking'>
            <p>일꾼 구해요</p>
        </div>
    )
}

function HomeFarm(){
    return (
        <>
         <Header/>
         <div className='main'>
            <Profile />
            <Board/>
            <FindWorker/>
         </div>
        </>
    );
}
export default HomeFarm;