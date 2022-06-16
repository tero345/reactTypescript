import React from 'react'
import { useParams } from 'react-router-dom';
import dummy from '../db/data.json'
import Word from './Word';

export default function Day() {
  // 파라미터 값 받기
  const { day } = useParams();
  // filter 특정값만 조회
  const wordList = dummy.words.filter(word => word.day === Number(day))
  
  return (
    // Fragments를 사용하면 DOM에 별도 노드를 추가하지 않고 자식 목록을 그룹화할 수 있습니다
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}
