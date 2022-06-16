import React, { useState } from 'react'

// 인터페이스
interface WordProps {
    word: {
        eng: string,
        kor: string,
        isDone: boolean
    };
}

export default function Word(props: WordProps) {
    // 뜻보기 상태값
    const [isShow, setIsShow] = useState(false);

    // 체크박스 상태값
    const [isDone, setIsDone] = useState(props.word.isDone)

    //동작 함수
    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
    }

  return (
    <tr className={isDone ? "off" : ""}>
        <td>
            <input 
                type="checkbox" 
                checked={isDone} 
                onChange={toggleDone}
            />
        </td>
        <td>{props.word.eng}</td>
        <td>{isShow && props.word.kor}</td>
        <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button className='btn_del'>삭제</button>
        </td>
    </tr>
  )
}
