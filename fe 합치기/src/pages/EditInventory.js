import React, { useState } from 'react';
import  Header  from './Header'; 

function EditInventory() {
    const [inventory, setInventory] = useState({
        potatoes: 0,
        sweetPotatoes: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInventory(prevInventory => ({...prevInventory, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 인벤토리를 서버에 업데이트하는 코드를 넣을 수 있습니다.
    }

    return (
        <div>
            <Header />
            <h1>인벤토리 수정</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    감자:
                    <input type="number" name="potatoes" value={inventory.potatoes} onChange={handleChange} />
                </label>
                <label>
                    고구마:
                    <input type="number" name="sweetPotatoes" value={inventory.sweetPotatoes} onChange={handleChange} />
                </label>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default EditInventory;