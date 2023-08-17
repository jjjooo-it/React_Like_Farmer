import { useState, useAuth } from 'react';
import axios from 'axios';
import './styles/ApplyWorker.css';

function Apply() {
    const [workerInfo, setWorkerInfo] = useState({
        name: '',
        age: '',
        foreigner: false,
        koreanLanguage: false,
        file: null,
        contact: ''
    });

    const { auth } = useAuth();
    const { token } = auth;

    const postComment = async () => {
        try {
            const formData = new FormData();
            formData.append('name', workerInfo.name);
            formData.append('age', workerInfo.age);
            formData.append('foreigner', workerInfo.foreigner);
            formData.append('koreanLanguage', workerInfo.koreanLanguage);
            formData.append('file', workerInfo.file);
            formData.append('contact', workerInfo.contact);

            const response = await axios.post('/auth/job', formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },
            });
            console.log(response);
            alert('공고 올리기에 성공하셨습니다');
        } catch (error) {
            console.log(error);
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setWorkerInfo({ ...workerInfo, file: file });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment();
    }

    return (
        <div className='Apply-form'>
            <h2>일꾼 지원서</h2>
            <h4>멋쟁이 농부처럼을 이용하여 손쉽게 일을 구해보세요!</h4>
            <p>외국인일 경우 재외국민등록증 첨부가 필수적입니다.</p>
            <p>건강한 농촌문화 형성을 위해 협조 부탁드립니다</p>
            <form onSubmit={handleSubmit}>
                <div className='form-main'>
                    <p>* 이름: <input type='text'
                        value={workerInfo.name}
                        onChange={(e) => {
                            setWorkerInfo({ ...workerInfo, name: e.target.value });
                        }} /></p>
                    <p>* 나이: <input type='text'
                        value={workerInfo.age}
                        onChange={(e) => {
                            setWorkerInfo({ ...workerInfo, age: e.target.value });
                        }} /></p>
                    <p>* 내국인/외국인:
                        <label>
                            <input type='radio' name='foreigner' value='false'
                                checked={!workerInfo.foreigner}
                                onChange={() => {
                                    setWorkerInfo({ ...workerInfo, foreigner: false });
                                }} /> 내국인
                        </label>
                        <label>
                            <input type='radio' name='foreigner' value='true'
                                checked={workerInfo.foreigner}
                                onChange={() => {
                                    setWorkerInfo({ ...workerInfo, foreigner: true });
                                }} /> 외국인
                        </label>
                    </p>
                    <p>* 한국어 가능 여부:
                        <label>
                            <input type='radio' name='koreanLanguage' value='false'
                                checked={!workerInfo.koreanLanguage}
                                onChange={() => {
                                    setWorkerInfo({ ...workerInfo, koreanLanguage: false });
                                }} /> 불가능
                        </label>
                        <label>
                            <input type='radio' name='koreanLanguage' value='true'
                                checked={workerInfo.koreanLanguage}
                                onChange={() => {
                                    setWorkerInfo({ ...workerInfo, koreanLanguage: true });
                                }} /> 가능
                        </label>
                    </p>
                    <p>* (외국인일 경우) 이민자등록증 첨부하기: <input type='file' onChange={handleFileChange} /></p>
                    <p>* 연락처: <input type='text'
                        value={workerInfo.contact}
                        onChange={(e) => {
                            setWorkerInfo({ ...workerInfo, contact: e.target.value });
                        }} /></p>
                </div>
                <button type='submit'>제출하기</button>
            </form>
        </div>
    );
}

export default Apply;
