// dotenv로 환경 변수 관리하기

const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
};

const getDBUri = () => {
    const localUri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
    // mongodb+srv://m001-student:<password>@sandbox.2wve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    return localUri;
}

module.exports = { getDBUri };