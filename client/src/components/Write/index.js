import React, { useState } from 'react';
import './style.css';
import Input from './Input';
import axios from 'axios';

const imageLink =
  'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';

// boardData 상품게시글의 데이터
// setData는 data를 바꾸는 함수
// setVisible은 보여줄지 안보여줄지 정하는 함수




const Write = ({ boardData, setData, setVisible }) => {
    const [title, setTitle] = useState(null);
    const [imageLink, setImageLink] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [text, setText] = useState(null);

    const testData = {
        id: 1,
        title: title,
        category: category,
        time: 13,
        price: price,
        user: 'user1',
        imageLink: imageLink,
        text: text
      };


   
    // 초기 value값은 null이다.
    if (boardData === null) { // boardData가 눌이라면?
        return (
            <div className="write">
                <span className="글제목"></span>
                <Input title={"글 제목"} value={title} setValue={setTitle} />
                <Input title={"사진링크"} value={imageLink} setValue={setImageLink} />
                <Input title={"카테고리"} value={category} setValue={setCategory} />
                <Input title={"가격"} value={price} setValue={setPrice} />
                <Input title={"글내용"} value={text} setValue={setText} />
            </div>
        )
    }
    boardData += testData
    return (
        <div>자자 글을 써보자</div>
        
    )


    // return (
    //     <div className="write">
    //         <span className ="fixed">글제목</span>     
    //         <Input
    //           title={title}
    //           value={value}
    //           setValue={setValue}
    //         //   inputType={"text"}
    //         />
    //     </div>
    // )   
}

export default Write;