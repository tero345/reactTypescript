import React from 'react'
import { Link } from 'react-router-dom'

export default function Empty() {
  return (
    <>
        <div>잘못된 페이지입니다.</div>
        <button>
            <Link to={'/'}>돌아가기</Link>
        </button>
    </>
  )
}
