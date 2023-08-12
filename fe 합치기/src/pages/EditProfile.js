import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Button from 'react-bootstrap/Button';

function EditProfile() {
    const [profile, setProfile] = useState({
        // img: "",
        nickname: "",
        location: "",
        phone: "",
        field: "",
        spec: "",
        license: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        setProfile({
            // img: "https://images.livemint.com/img/2021/03/07/600x338/LSpic_1615133040221_1615133049722.jpg",
            nickname: "👩‍🌾 강릉감자재배왕",
            location: "서울",
            phone: "010-1234-5678",
            field: 1000,
            spec: "감자, 고구마 풀스택",
            license: "유기농업기사 취득"
        });
        console.log(profile);
    }, []);

    const handleInputChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdateProfile = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA";
            const response = await axios.patch('/user', 
            profile,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            console.log(response);
            alert("성공!");
            navigate(-1);
        } catch (error) {
            console.error(error);
            alert(`실패: ${error.response ? error.response.data.message : "Unknown error"}`);
        }
    }
    
    

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setProfile({
    //             ...profile,
    //             img: reader.result
    //         });
    //     };
    //     reader.readAsDataURL(file);
    // }

    return (
        <div>
            <Header />
            <div className='profileInfoContainer'>
                <div className='create-post-form'>
                    {/* <label>
                        프로필 사진:&nbsp;
                        <input type="file" name="img" onChange={handleFileChange} />
                    </label><br /><br /> */}
                    <label>
                        이름:&nbsp;
                        <input type="text" name="nickname" value={profile.nickname} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        지역:&nbsp;
                        <input type="text" name="location" value={profile.location} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        전화번호:&nbsp;
                        <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        땅 평수:&nbsp;
                        <input type="number" name="field" value={profile.field} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        작물:&nbsp;
                        <input type="text" name="spec" value={profile.spec} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        자격증:&nbsp;
                        <input type="text" name="license" value={profile.license} onChange={handleInputChange} />
                    </label><br /><br />
                    <Button variant="primary" onClick={handleUpdateProfile}>제출</Button>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
