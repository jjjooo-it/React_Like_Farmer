import { useState,useEffect } from 'react';
import './styles/Home_Farm.css';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './styles/Search.css';
import axios from 'axios';

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
  const search = location.state.search; //검색한 내용
  const [searchList, setSearchList]= useState([]);
//(1) 검색하기
  useEffect(() => {
    const getSearch = async ()=>{
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNzQwMTEwLCJleHAiOjU0MjQyMjAxMTB9.2Uryb4nWxbwfagcEr-UgapHhGkbW40pSCGGMCdqBYZY"; 
            const response = await axios.get('/user/home', {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if (response.data.user.item===search) {
              setSearchList(response.data.user);
            }
            if(searchList==='') console.log('농부가 없어요');
            else console.log(searchList);
        } catch (error) {
            console.log(error);
        }
    }
         getSearch();
    }, [searchList]);

    //(2) 최근 수정 정렬


    //(3) tier 순 정렬
  return(
    <div className='search-main'>
    <p><span style={{fontWeight :"bold",color: "rgb(54, 131, 24)"}}>{search}</span>(을)를 키우시는 농부님들을 확인하세요!</p>
  
    <div className='sort'>
       <button>티어 높은 순</button>
       <button>최신 활동 순</button>
    </div>
    {searchList.map((a,i)=>{
        return(
          <div className='search-text'key={i} >
          <img src={a.image}/>
          <div className='search-col'>
          <h4>{a.name}</h4>
          <p>{a.nickname}</p>
          <p>{a.item}</p>
          </div>
          <p>클릭하여 명함 확인&nbsp;&nbsp;》</p>
        </div>

      )})}
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