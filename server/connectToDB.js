const massive = require('massive');


const massiveInstance = async() => {
    try{
    return await massive({
    user: 'postgres',
    host: 'localhost',
    database: 'translation',
    password: '0531',
    port: 5432,
})} catch {
   console.log('error occurred when connecting to db');
}
}


module.exports = massiveInstance;