import "./board.css";

const Board = ({key,
    title,
    time,
    category,
    user,
    price,
    imgLink,
    setBoardData}) => {
    return (
        <div className="template" onClick={setBoardData}>
            <div className="picture">
                <img alt={title} src={imgLink} />
            </div>
            <div className="contents">
                <div className="title">{title}</div>
                <div className="category-time">
                    <div className="category">{category}</div>
                    <div className="time">{time}초 전</div>
                </div>
                <div className="price-user">
                    <div className="price">{price}원</div>
                    <div className="user">{user}</div>
                </div>
            </div>
        </div>
    )
}

export default Board;