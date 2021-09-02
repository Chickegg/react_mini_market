
const mongoose = require('mongoose');
const { getDBUri } = require('../config');

let db; // database라는 변수
// connect라는 변수 
const connect = async () => { 
    const DB_URI = getDBUri(); // DB_URI는 localUri를 받는다.

    if(db) {
        return; // 참이면 connect함수를 끝낸다?
    }
    mongoose.connect(DB_URI);

    db = mongoose.connection; // 몬구스에 연결된 저장소?
};

const disconnect = () => {
    if (!db) {
        return  // 애초에 연결안되있으면 실행할 필요가 없다.
    }
    mongoose.disconnect();
};

module.exports = { connect, disconnect };

