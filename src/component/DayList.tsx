import useFetch from 'hook/useFetch';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export interface IDay {
    id: number;
    day: number;
}

export default function DayList() {
    //const [days, setDays] = useState<IDay[]>([]);
    //const [count, setCount] = useState(0);
    const days: IDay[] = useFetch("http://localhost:3001/days");

    // hook 의존성 배열
    // 2번째 매개변수에 배열로 해당 변수를 넣으면 해당된 count일때만 실행
    // [] 빈 배열로 넣으면 딱 한번만 실행
    // useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다
    // (vue에 mounted & computed 랑 비슷
    // useEffect(() => {
    //     // 비동기
    //     fetch("http://localhost:3001/days")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data)
    //         });
    // }, []);

  return (
    //return () => ()
    // key 없으면 에러 발생
    <ul className='list_day'>
        {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
    </ul>
  );
}
