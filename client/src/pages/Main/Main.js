// 메인페이지에서 사용될 컴포넌트들 불러오기
import Board from "../components/Board/index";
import Detail from "../components/Detail";
import { Route } from "react-router";
import { useState } from "react";
import Write from "../components/Write";
import "./main.css"


const imageLink =
    "http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg";

const initTestData = [
{
    id: 1,
    title: '맥북프로 16인치',
    category: '노트북',
    time: 13,
    price: 10000,
    user: "user1",
    contents: "맥북 프로 16인치 미개봉팝니다",
    imageLink: imageLink
},
{
    id: 2,
    title: '2',
    category: 'B',
    time: 13,
    price: 10000,
    user: "user2",
    imageLink: imageLink
},
{
    id: 3,
    title: '3',
    category: 'B',
    time: 13,
    price: 10000,
    user: "user3",
    imageLink: imageLink
},
]

function Main() {
    const [testData, setTestData] = useState(initTestData);
    // console.log(testData);
    const [boardData, setBoardData] = useState(null);
    const [visible, setVisible] = useState(false);


    const BoardComponents = testData.map((boardData) => {
        return (
            <Board 
                key={boardData.id}
                title={boardData.title} 
                time={boardData.time} 
                user={boardData.user} 
                category={boardData.category}
                price={boardData.price} 
                imgLink={boardData.imageLink}
                setBoardData={() => {
                    setBoardData({...boardData});
                }}
            />
            //setBoardData는 boardData의 상태를 바꿔주는 data인데
            //즉 Board component에서 setBoardData는 전개연산자를 활용한 boardData의 상태를 바꿔주는 함수가 된다.
            // 즉 함수다.
        );
    });
    console.log(boardData);
    return (
        <div>
            {boardData === null ? (
                BoardComponents
            ) : (
                <Detail 
                boardData={boardData}
                setTestData={setTestData}
                setBoardData={setBoardData}
                setVisible={setVisible}
                />
            )}
            <button
              className='write-button'
            onClick={() => setVisible((state) => !state) /* 현재 boolean의 반대로 바꿔준다. */}> 
            </button>
            {visible ? (
            <Write
                boardData={boardData}
                setData={() => {}}
                setVisible={setVisible}
                // fetchData={fetchData}
                />
            ) : null}
        </div>
    );
}

export default Main;