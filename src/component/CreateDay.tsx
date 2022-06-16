import useFetch from 'hook/useFetch';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days/");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function addDay() {
        try {
            if(!isLoading){
                setIsLoading(true);
                const day = days.length + 1;

                fetch(`http://localhost:3001/days`, {
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        day: day,
                    }),
                }).then(res => {
                    console.log(res);
                    if(res.ok){
                        alert("생성이 완료되었습니다.");
                        navigate(`/`);
                        setIsLoading(false);
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h3>현재 일수 : { days.length } 일</h3>
            <button 
                style={{
                    opacity: isLoading ? 0.3 : 1
                }}
                onClick={addDay}    
            >
                {isLoading ? "Saving...." : "Day 추가"}
            </button>
        </div>
    )
}
