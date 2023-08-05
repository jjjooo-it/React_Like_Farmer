import './styles/First.css';
import {useNavigate} from 'react-router-dom';
import bg from './styles/bg.jpg';

function First(){
    const navigate = useNavigate();
    return (
        <>
            <div className='first-bg'>
                <img src={bg}  style={{ width: "100vw", height: "100vh" }}></img>
            </div>
            <div className='first-txt'>
               <h1>멋쟁이 농부처럼</h1>
               <h4>LIKE FARMER</h4>
               <button onClick={()=>{navigate('/farm')}}>농부로 시작하기</button>
               <button onClick={()=>{navigate('/consume')}}>소비자로 시작하기</button>
            </div>
        </>
    );
}
export default First;