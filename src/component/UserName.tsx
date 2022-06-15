import React from 'react';

// 인터페이스
interface UserNameProps {
    age: number;
}

export default function UserName(UserNameProps: UserNameProps) {
    return (
        <div>
           <p>{UserNameProps.age}</p> 
        </div>
    );
};
