import React, { useState } from 'react';
import UserName from './UserName';
import World from './World';

// 인터페이스
interface HelloProps {
    age: number;
}

// TypeScript 에서는 Props를 받기 위해서는 interface를 사용해서 명확하게 선언하는게 좋다
const Hello = (props: HelloProps) => {
    // state
    const [age, setAge] = useState(props.age); 
    const msg: string = age > 19 ? "성인 입니다." : "미성년자 불가입니다."; 

    return (
        <div>
            Hello world! ({ age })
            { msg }
            <World/>

            <UserName age={age} />
            <button onClick={() => {
                setAge(age + 1)
            } }>change age</button>
        </div>
    );
};

export default Hello;