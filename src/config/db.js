require("dotenv").config();


const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.3l7jw1q.mongodb.net/blogging-platform-api`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5001;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const dbConfig = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    access:{
        token: ACCESS_TOKEN_SECRET
    }
}

module.exports = dbConfig;