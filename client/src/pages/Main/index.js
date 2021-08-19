import Board from '../../components/Board';


const imageLink =
    "http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg";
function Main() {

    // porps 
    const testData = [
        {
            id: 1,
            title: '1',
            category: 'A',
            time: 13,
            money: 10000,
            user: "user1",
            imageLink: imageLink
        },
        {
            id: 2,
            title: '2',
            category: 'B',
            time: 13,
            money: 10000,
            user: "user2",
            imageLink: imageLink
        },
        {
            id: 3,
            title: '3',
            category: 'B',
            time: 13,
            money: 10000,
            user: "user3",
            imageLink: imageLink
        },
    ]

    /// 배열 상태
    const BoardComponents = testData.map((boardData) => {
        return (
            <Board
                key={boardData.id}
                title={boardData.title}
                category={boardData.category}
                time={boardData.time}
                money={boardData.money}
                user={boardData.user}
                imageLink={boardData.imageLink}
             />
        );
    });


    return (
        <div>
            <div>스튜디오배틀</div>
            { BoardComponents }
        </div>
    );
}

export default Main;