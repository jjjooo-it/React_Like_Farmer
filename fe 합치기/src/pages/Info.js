import { useState } from 'react';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';
import './styles/Home_Farm.css';

function ProfileInfo() {
    const [profile, setProfile] = useState({
        img: "https://images.livemint.com/img/2021/03/07/600x338/LSpic_1615133040221_1615133049722.jpg",
        nickname: "👩‍🌾 강릉감자재배왕",
        location: "서울",
        phone: "010-1234-5678",
        spec: "감자, 고구마 풀스택",
        license: "유기농업기사 취득"
    });

    const [inventory, setInventory] = useState({
        potatoes: 5,
        sweetPotatoes: 2
    });

    const navigate = useNavigate();  // react-router-dom의 useNavigate 훅 사용

    return (
        <>
        <Header/>
        <div className='profileInfoContainer'>
            <div className='profileBox'>
                <img src={profile.img} alt="profile" className='profileImage' />
                <hr />
                <p className='name'>{profile.nickname}</p>
                <p className='location'>{profile.location}</p>
                <p className='phone'>{profile.phone}</p>
                <p className='crops'>{profile.spec}</p>
                <p className='status'>{profile.license}</p>
                <button onClick={() => navigate('/edit-profile')}>수정하기</button> {/* 버튼을 클릭하면 '/edit-profile' 경로로 이동 */}
            </div>

            <div className='inventoryBox'>
                <h3>현재 농작물 상태</h3>
                <hr />
                <p>감자🥔: {inventory.potatoes}kg</p>
                <p>고구마🍠: {inventory.sweetPotatoes}kg</p>
                <button onClick={() => navigate('/edit-inventory')}>수정하기</button> {/* 버튼을 클릭하면 '/edit-inventory' 경로로 이동 */}
            </div>
        </div>
        </>
    );
}

export default ProfileInfo;