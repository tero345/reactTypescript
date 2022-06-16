import React, { useState } from 'react';

const Welcome = () => {
    // state 저장 [변수명, 변경할변수값] useState(초기값)
    // state 는 컴포넌트 독립적 사용
    const [name, setName] = useState("Mike");

    function changeName() {
        const newName = name === "Mike"? "Jane" : "Mike";
        setName(newName);
    }


    return (
        <div>
            Welcome React!
            <h1>state study</h1>
            <h2>{name}</h2>

            <button onClick={changeName}>Change</button>
        </div>
    );
};

export default Welcome;