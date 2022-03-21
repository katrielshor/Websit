import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kk!@3456',
    database: 'cms'
});

export default  connection
