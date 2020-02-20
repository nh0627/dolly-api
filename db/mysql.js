import mysql from 'mysql2/promise'
import connectionInfo from'../../credentials/mysql-config.json'

const pool = mysql.createPool(connectionInfo);

export default pool