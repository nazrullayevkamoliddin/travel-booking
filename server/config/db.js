const mongoose = require('mongoose');

const connect_db = async() => {
    mongoose.set('strictQuery', true)
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser:true})
        .then(() => {console.log(`mongo connected`)});
    } catch (error) {
        console.log(error);
    }   
}

module.exports = connect_db;