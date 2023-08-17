//brand에 속한 농부 list 가져오기 
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { MdAddToDrive } from 'react-icons/md';

function Farmer_List() {
    const location = useLocation();
    const brandId = location.state.brandId;
    const [farmerList, setFarmerList] = useState([]);

    const postFarmer= async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTY5MTkzNjM0OSwiZXhwIjo1NDI0NDE2MzQ5fQ.hk_VveWhENStASA9hIrDhoGUpAENRkOf0Ib6qKslPQs"; 
            const response = await axios.post(`/auth/brand/farmer/${brandId}`,
                farmerList,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                });
                if (response.data.status === 200) {
                    setFarmerList(response.data.users);
                  }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        postFarmer();
   }, []);

    return(
        <>
        {farmerList.length > 0 ? (
        <div>
          {farmerList.map((a,i) => (
            <div key={i} >
               <img src={a.file || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>
               <p>{a.userName}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>해당 브랜드에는 농부가 없습니다</p>
      )}
        </>
    )
}

//해당 brand에 농부 등록하기 
function Add_Farmer(props){
    const location = useLocation();
    const brandId = location.state.brandId;
    const [addFarmer,setAddFarmer] = useState('');
    setAddFarmer(props.userId);
    const add_Farmer= async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTY5MTkzNjM0OSwiZXhwIjo1NDI0NDE2MzQ5fQ.hk_VveWhENStASA9hIrDhoGUpAENRkOf0Ib6qKslPQs"; 
            const response = axios.post(`/brand/farmer/${brandId}`,
                addFarmer,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
            console.log(response);
            alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <button onClick={async (e) => {
                    e.preventDefault();
                    add_Farmer();
                }}>이 brand에 들어가기</button>
        </>
    )
}
function Brand_Farmer_List(){
    return(
       <>
        <Header/>
        <Farmer_List/>
        <Add_Farmer/>
    </>
    )
}
export default Brand_Farmer_List;
