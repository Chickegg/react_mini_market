import "./detail.css";
import Board from "../Board";
import Content from "./Content";

const Detail  = ({ boardData, setTestData, setBoardData, setVisible }) => {
    // const updataBoardData = () => {
    //     setVisible(true);
    // };

    // const deleteBoardData = () => {
    //     const id = boardData.id;
    //     console.log(test)
    //     setTestData((state) => {
    //         const newState = state.filter((board) => {
    //             return id !== board.id;
    //         });
    //         setBoardData(null);
    //         return newState;
    //     })
    // }
    // console.log(boardData);

    return (
        <div className="board-component-wrapper">
            <Board 
                key={boardData.id}
                title={boardData.title} 
                time={boardData.time} 
                user={boardData.user} 
                category={boardData.category}
                price={boardData.price} 
                imgLink={boardData.imageLink}
            />
            <Content setVisible={setVisible} contents={boardData.contents} />
        </div>
    )
}

export default Detail ;
