import { useState,useEffect} from 'react';
import './styles/Home_Farm.css';
import Header from './Header';
import {BiEdit} from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

//1. 프로필 
function HomeProfile(){
    const navigate = useNavigate();
    const [homeProfile, setHomeProfile]= useState({
        name : '',
        nickname : '',
        image : '',
        item : '',
    });
    useEffect(() => {
    const getHomeProfile = async ()=>{
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA"; 
            const response = await axios.get('/user/home', {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if(response.data.status === 200) {
                setHomeProfile({
                    name: response.data.user.name,
                    nickname: response.data.user.nickname,
                    img: response.data.user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    item: response.data.user.item,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
         getHomeProfile();
    }, []);

    return(
        <div className='profile'>
           <img className='profile-img 'src={homeProfile.img} /> 
           <h4>{homeProfile.name} 농부님 어서오세요!</h4>
           <hr></hr>
           <p>{homeProfile.nickname}</p>
           <p>⛤{homeProfile.item} 풀스택⛤</p>
           <button className='profile-btn-card'onClick={()=> navigate('/Card')}>내 명함</button>
           <button onClick={()=>{navigate('/edit-profile')}} className='profile-btn-edit'><BiEdit style={{ width: "20px", height: "20px",color: "gray" }}/>수정하기</button>
        </div>
    )
}

//2. 글과 댓글
function Board(){ 
    const navigate = useNavigate();
    ///////////  글  //////////
    //(1)전체 글 보이기 
    const [postList,setPostList] = useState([]);
    useEffect(() => {
    const getAllPost = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA";
            const response = await axios.get('/post', {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if(response.data.status === 200) {
                setPostList(response.data.postList);
            }
        } catch (error) {
            console.log(error);
        }
    }
        getAllPost();
    }, []);
    //(2) 글 수정하기
    const patchPost = ({postId}) => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA";
            const response =  axios.patch(`/post/${postId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            
            alert('성공');
        } catch (error) {
            console.log(error);
        }
    }

    //(3) 글 삭제하기
    const deletePost = ({postId}) => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA";
            const response = axios.delete(`/post/${postId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response.data.message);
            alert('성공');
        } catch (error) {
            console.log(error);
        }
    }


    /////////// 댓글 ////////////////
    //(1)댓글 달기 
    const [postCommentData,setPostCommentData] = useState({
        nickname : '',
        password : '',
        content : '',
        postId : '',
    });
    const postComment = ({postId}) => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA';
            const response = axios.post(`/comment/${postId}`, 
            postCommentData,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response);
            alert('댓글달기에 성공하셨습니다');
        } catch (error) {
            console.log(error);
        }
    }

    //(2) 댓글 가져오기   
    const [getCommentData,setGetCommentData]= useState([]);
    const getComment = ({postId}) => {
        try {
                const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA';
                const response =  axios.get(`/comment/${postId}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                setGetCommentData(response.data);
            } catch (error) {
                console.log(error);
            }
    }


    //(3) 댓글 수정하기
    const patchComment = ({postId}, {commentId}) => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA'; 
            const response = axios.patch(`/comment/${postId}/${commentId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response.data.message);
            alert('성공');
        } catch (error) {
            console.log(error);
        }
    }

    //(4) 댓글 삭제하기
    const deleteComment = ({postId}, {commentId}) => {
        try {
            const postId = 4;
            const commentId = 1;
            const token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA';
            const response = axios.delete(`/comment/${postId}/${commentId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log(response.data.message);
            alert('성공');
        } catch (error) {
            console.log(error);
        }
    }
    let [TF,setTF] = useState(false);
    //////////////////////////////////////
    return(
        <div className='board'>
            <p className='board-title'>나의 영농 일지</p>
            <div className='board-post'>
                 <button onClick={()=>{navigate('/write')}}>오늘은 무슨일이 있었나요?</button>
            </div>
             {/*//////////  글 & 댓글 보여주기 /////////*/}
             {postList.map((a,i)=>{
                return(
                    <>
                <div className='board-text'key={i}>
                    <div className='board-text-profile'>
                         <p>{a.location}</p>
                         <button onClick={()=>{patchPost(a.postId);}}>수정하기</button>
                         <button onClick={()=>{deletePost(a.postId);}}>삭제하기</button>
                         <button onClick={()=>{setTF(!TF)}}>댓글보기</button>
                         {
                             TF===true? getComment(a.postId) : null
                         }
                    </div>
                    <div className='board-text-main' key={i}>
                        <img src={a.image} style={{ width: "650px", height: "230px"}}/>
                        <p>{a.description}</p> 
                    </div>
                </div>
                <div className='board-comment'>
                        <input type='text'
                        placeholder='닉네임'
                        onChange={e=>{setPostCommentData({...postCommentData, nickname: e.target.value});}}
                        />
                        <input type='password'
                        placeholder='비밀번호'
                        onChange={e=>{setPostCommentData({...postCommentData, password: e.target.value});}}
                        />
                         
                        <input type='text'
                        placeholder='댓글을 입력해주세요'
                        onChange={e=>{setPostCommentData({...postCommentData, content: e.target.value});}}
                       />
    
                        <button 
                        onClick={(e)=>{ 
                            e.preventDefault(e);
                            postComment(a.postId);}}
                        >등록하기</button>
                        {getCommentData&& getCommentData.map((b, j) => {
                            return(
                                <div key={j}>
                                <button onClick={()=>{patchComment(a.postID, b.commentId);}}>수정하기</button>
                                <button onClick={()=>{deleteComment(a.postID, b.commentId);}}>삭제하기</button>
                                <p>{b.nickname}</p>
                                <p>{b.content}</p>
                            </div>
                            );
                        })}
                    </div>

                  </>
                );
             })}                   
       </div>
    )
}

//3. 티어 정보
function Tier(){
    const [tier, setTier]= useState('');
    const [myTier,setMyTier] = useState('');
    useEffect(() => {
    const getTier = async ()=>{
        try {
            const userId = 2;
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA"; // Replace with your actual token
            const response = await axios.get(`/user/profile/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if(response.data.status === 200) {
                setTier(response.data.tier);
                tier===1? setMyTier("아기농부"): tier===2? setMyTier("열정농부"): tier===3?setMyTier("마스터농부"): setMyTier('');
            }
        } catch (error) {
            console.log(error);
        }
    }
    getTier();
   });
   
    return(
        <div className='level'>
            <h4>티어 정보</h4>
            <p>당신은 <span style={{fontWeight :"bold",color: "rgb(54, 131, 24)"}}>{myTier}</span>입니다!</p>
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
            <HomeProfile/>
            <Board/>
            <Tier/>
         </div>
         <div className="lower">
              <p>고객센터 : 1234-5678 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00) | 단국대학교 멋쟁이 농부처럼(주)</p>
              <h2>LIKE FARMER</h2>
        </div>
        </>
    );
}
export default HomeFarm;