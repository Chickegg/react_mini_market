import "./style.css";

function Content({ contents, setVisible }) {
    const updataBoardData = () => {
        setVisible(true);
    };

    return (
        <div className="detail-content">
            <div className="content-title">글 내용</div>
            <div className="content-text">{contents}</div>
            <div className='buttons'>
                <button onClick={updataBoardData}>수정하기</button>
            </div>
        </div>
    );
}

export default Content;