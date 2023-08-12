import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './styles/write.css';

function CreatePost() {
    const [post, setPost] = useState({
        userLocation: "",
        image: "",
        description: "",
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA"; // Replace with your actual token
            const response = await axios.post('/post/create', 
            post,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPost(prevPost => ({
                    ...prevPost,
                    image: reader.result  // changed from 'img' to 'image' for consistency
                }));
            };
            reader.readAsDataURL(file);
        }
    }
    

    const handleButtonClick = (e) => {
        e.preventDefault();
        handleFormSubmit();
    }
    

    return (
        <form>
            <Header />
            <div className='profileInfoContainer'>
                <div className='create-post-form'>
                <label>
                        설명:&nbsp;
                        <textarea name="userLocation" value={post.userLocation} onChange={handleInputChange} />
                    </label><br /><br />
              
            
                    <label>
                        설명:&nbsp;
                        <textarea name="description" value={post.description} onChange={handleInputChange} />
                    </label><br /><br />
                    <label>
                        사진 첨부:&nbsp;
                        <input type="file" name="image" onChange={handleFileChange} />
                    </label><br /><br />
                    <button onClick={handleButtonClick}>제출</button>
                </div>
            </div>
        </form>
    );
}

export default CreatePost;