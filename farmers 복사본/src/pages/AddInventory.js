import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './styles/Home_Farm.css';


function AddInventory() {
    const [title, setTitle] = useState('');
    const [gram, setGram] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjkxNTczMTUwLCJleHAiOjU0MjQwNTMxNTB9.FZimhlaTengZe-GN3433woPLkiyvGuyPoC6-d2BLROA";
        const data = {
            title: title,
            gram: gram
        };

        axios.post('/item', data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('농작물 저장 성공:', response);
            navigate('/info'); // 저장 성공 후 프로필 페이지로 이동
        })
        .catch(error => {
            console.error('농작물 저장 중 오류 발생:', error);
        });
    }

    return (
        <>
        <Header />
        <div className='profileInfoContainer'>
        <div className='inventoryBox'>
        <h3>현재 농작물 상태</h3>
        <hr />
        <form onSubmit={handleSubmit}>
            <label>
                농작물 이름:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                무게(g):
                <input type="number" value={gram} onChange={(e) => setGram(e.target.value)} />
            </label>
            <br />
            <br />
            <button type="submit">농작물 저장</button>
        </form>
        </div>
        </div>
        </>
    );
}

export default AddInventory;