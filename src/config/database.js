import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:process.env.DB_HOST || 'localhost',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : '1234',
    database:process.env.DB_NOME || 'oficina_db',
    port:process.env.DB_PORT || '3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function testConn() {
    try {
        const conn = await pool.getConnection();
        console.log('Conexão com o mySql estabelecida com sucesso ');
        conn.release();
    } catch (error) {
        console.error('Falha ao conectar-se com o MySql', error.message);
    }
}

testConn();

export default pool;