import useFetch from 'hook/useFetch';
import { useParams } from 'react-router-dom';
import Word, { IWord } from './Word';

export default function Day() {
  // 파라미터 값 받기
  // useParams type 지정해줘야지 조회값 제대로 표시
  const { day } = useParams<{day: string}>();
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  // filter 특정값만 조회
  //const wordList = dummy.words.filter(word => word.day === Number(day))
  
  return (
    // Fragments를 사용하면 DOM에 별도 노드를 추가하지 않고 자식 목록을 그룹화할 수 있습니다
    <>
      <h2>Day {day}</h2>
      {words.length === 0 &&<span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}
