import { useState } from 'react';
import './styles/Home_Farm.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './styles/Search.css';

function Search(){
    return (
        <>
          <Header/>
          <div className='search-main'>
            <p><span style={{fontWeight :"bold",color: "rgb(54, 131, 24)"}}>감자</span>(을)를 키우시는 농부님들을 확인하세요!</p>
            <button>김농부 - 감자 10년</button>
            <button>김농부 - 감자 10년</button>
            <button>김농부 - 감자 10년</button>
          </div>
          
        </>
    );
}
export default Search;