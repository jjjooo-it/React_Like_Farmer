import { useState } from 'react';
import './styles/Home_Farm.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './styles/Search.css';

function TodayInfo(){
  const navigate = useNavigate();
  return (
    <div className='todayinfo'>
    <div className='info'>
      <h4>오늘의 영농 꿀팁</h4>
      <hr/>
      <br/>
      <p>고추 아주심기는
         <br/>늦서리가 끝난 후 
         <br/>맑은 날에 심는 것이 좋아요.</p>
    </div>

    <div className='find'>
      <h4>일손이 부족하다면?</h4>
      <button onClick={()=>navigate('/findworker')}>여기를 클릭!</button>
    </div>
    </div>
  )
}
function Search_Main(){
  const location = useLocation();
  const search = location.state.search;
  const[myImg, setMyImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const[result, setResult]= useState([1,2,3,4,5]);
  return(
    <div className='search-main'>
    <p><span style={{fontWeight :"bold",color: "rgb(54, 131, 24)"}}>{search}</span>(을)를 키우시는 농부님들을 확인하세요!</p>
  
    <div className='sort'>
       <button>티어 높은 순</button>
       <button>최신 활동 순</button>
    </div>
    {result.map((a,i)=>(
          <div className='search-text' key={i}>
          <img src={myImg}/>
          <div className='search-col'>
          <h4>홍길동_마스터 농부</h4>
          <p>강릉감자재배왕</p>
          <p>감자,고구마 풀스택</p>
          </div>
          <p>클릭하여 명함 확인&nbsp;&nbsp;》</p>
        </div>
    ))}
  </div>
  
  )
}
function Search(){
  
    return (
        <>
          <Header />
          <div className='search-whole'>
             <Search_Main/>
             <TodayInfo/>
          </div>
        </>
    );
}
export default Search;