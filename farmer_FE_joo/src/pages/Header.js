import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {BsBoxArrowRight} from 'react-icons/bs';

function Header(){
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    return(
        
        <div className='header'>
        <a href="http://localhost:3000/farm">LIKE <span className='a-plus'>FARMER</span></a>
        <div className="search">
          <input
            type="text"
            placeholder="작물을 검색하세요. (ex. 감자)"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={()=>navigate('/search')}> ⌕ </button>
        </div>
        <div className='header-btn'>
          <button onClick={()=>navigate('/farm')}><AiOutlineHome style={{ width: "30px", height: "30px",color: "gray" }}/>홈</button>
          <button><CgProfile style={{ width: "30px", height: "30px" ,color: "gray"}}/>내 정보</button> {/*성민님 코드 연결*/}
          <button><MdOutlineWorkOutline style={{ width: "30px", height: "30px",color: "gray" }}/>일꾼 구하기</button>
          <button onClick={()=>navigate('/')}><BsBoxArrowRight style={{ fontWeight:"bolder", width: "30px", height: "30px" ,color: "gray"}}/>처음으로</button>
        </div>
    </div>
    )
}
export default Header;