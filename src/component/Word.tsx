import React, { useState } from 'react'

// 인터페이스
interface IProps {
    word: IWord;
}

export interface IWord {
    day: number;
    id: number;
    eng: string;
    kor: string;
    isDone: boolean;
}

export default function Word({ word: w}: IProps) {
    // 뜻보기 상태값
    const [isShow, setIsShow] = useState(false);

    // 체크박스 상태값
    const [isDone, setIsDone] = useState(w.isDone);

    // 단어
    const [word, setWord] = useState(w)

    //동작 함수
    function toggleShow() {
        setIsShow(!isShow);
    }

    // 체크박스
    function toggleDone(){
        setIsDone(!isDone);
        // api 통신
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }

    function del(){
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then(res => {
                if(res.ok){
                    setWord({
                        ...word, 
                        id: 0
                    })
                }
            })
        }
    }

    if (word.id === 0) {
        return null;
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
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className='btn_del' onClick={del}>삭제</button>
            </td>
        </tr>
    )
}

// json-server 에서는 단순히 데이터를 넣고 조회하는 것 외에도 페이징, 필터링, 정렬, 수정, 삭제 등의 기능을 지원합니다.
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE
