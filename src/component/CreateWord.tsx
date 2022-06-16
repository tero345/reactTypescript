import useFetch from 'hook/useFetch'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IDay } from './DayList';

export default function CreateWord() {
    const days: IDay[] = useFetch("http://localhost:3001/days");

    //react-router v6에서 useHistory 네이밍 변화
    // useHistory -> useNavigate
    // history.push(`/day/${dayRef.current.value}`) -> navigate(`/day/${dayRef.current.value}`)
    const navigate = useNavigate();

    // 로딩 상태
    const [isLoading, setIsLoading] = useState(false);

    // useRef dom에 접근하거나 스크롤 위치를 확인, 포커스를 줄때 등등
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    
    function onSubmit(e: any){
        // submit 방지
        e.preventDefault();

        try {
            if(!isLoading && dayRef.current && engRef.current && korRef.current){
                setIsLoading(true);

                const eng = engRef.current?.value;
                const kor = korRef.current?.value;
                const day = Number(dayRef.current?.value);

                fetch(`http://localhost:3001/words/`, {
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        day,
                        eng,
                        kor,
                        isDone: false,
                    }),
                }).then(res => {
                    if(res.ok){
                        alert("생성이 완료되었습니다.")
                        navigate(`/day/${dayRef.current?.value}`)
                        setIsLoading(false);
                    }
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <div className='input_area'>
            <label>Eng</label>
            <input type="text" placeholder='영어' ref={engRef}/>
        </div>
        <div className='input_area'>
            <label>Kor</label>
            <input type="text" placeholder='한글' ref={korRef}/>
        </div>
        <div className='input_area'>
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(day => (
                <option 
                    key={day.id} 
                    value={day.day}
                >
                    {day.day}
                </option>
            ))}
            </select>
        </div>

        <button 
            style={{
                opacity: isLoading ? 0.3 : 1
            }}    
        >
            {isLoading ? "Saving...." : "저장"}
        </button>

    </form>
  )
}
