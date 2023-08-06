import { useState,useRef} from 'react';
import './styles/Home_Farm.css';
import Header from './Header';
import Graph from './Graph';
import {BiEdit} from 'react-icons/bi';

function Profile(){
    //이미지 업로드하는 부분(1) 시작 이에요~~~~~~~~
    const[myImg, setMyImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const fileInput = useRef(null);
    const onChange = (e) => {
        if(e.target.files[0]){
            const file = e.target.files[0];
        }else{ //업로드 취소할 시
            setMyImg("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
            return
        }
        //화면에 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setMyImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    //이미지 업로드하는 부분(1) 끝 이에요~~~~~~~~
    return(
        <div className='profile'>
            {/*이미지 업로드하는 부분(2) 시작 이에요~~~~~~~~*/}
            <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,image/jpeg,image/png"
            ref={fileInput}
            onChange={onChange}
             />
             {/*이미지 업로드하는 부분(2) 끝 이에요~~~~~~~~*/}

           <img className='profile-img 'src={myImg} 
           onClick={()=>{fileInput.current.click()}}/> 
           <h4>ooo농부님 어서오세요!</h4>
           <hr></hr>
           <p>강릉감자재배왕</p>
           <p>⛤ 감자,고구마 풀스택 ⛤</p>
           <button className='profile-btn-card'>내 명함</button>
           <button className='profile-btn-edit'><BiEdit style={{ width: "20px", height: "20px",color: "gray" }}/>수정하기</button>
        </div>
    )
}
function Board(){
    const[postImg, setPostImg] = useState("https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=800");
    const[myImg, setMyImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    return(
        <div className='board'>
            <Graph/>
            <p className='board-title'>나의 영농 일지</p>
            <div className='board-post'>
                <img className='board-img'src={myImg}/>
                 <button>오늘은 무슨일이 있었나요?</button>
            </div>

            <div className='board-text'>
                <div className='board-text-profile'>
                    <img className='board-img'src={myImg}/>
                    <p>강릉감자재배왕_마스터농부</p>
                </div>

                <div className='board-text-main'>
                    <p>오늘의 감자 수확! 10kg 뿌듯합니다!</p>
                    <img src={postImg} style={{ width: "650px", height: "230px"}}/>
                </div>
            </div>

            <div className='board-comment'>
                <input type='text'placeholder='댓글을 입력해주세요'></input>
                <button>등록하기</button>
            </div>
        </div>

    )
}
function Level(){
    return(
        <div className='level'>
            <h4>티어 정보</h4>
            <p>당신은 <span style={{fontWeight :"bold",color: "rgb(54, 131, 24)"}}>마스터농부</span>입니다!</p>
            <hr/>
            <p>레벨 업을 하기 위해서는</p>
            <p>* 아기농부 ➡️ 열정농부<br/>: 프로필 사진을 올려주세요!</p>
            <p>* 열정농부 ➡️ 마스터농부<br/>: 글을 작성해주세요!</p>
        </div>
    )
}

function HomeFarm(){
    return (
        <>
         <Header/>
         <div className='home_farm-main'>
            <Profile />
            <Board/>
            <Level/>
         </div>
         <div className="lower">
              <p>고객센터 : 1234-5678 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00) | 단국대학교 멋쟁이 농부처럼(주)</p>
              <h2>LIKE FARMER</h2>
        </div>
        </>
    );
}
export default HomeFarm;