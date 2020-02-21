
import pool from '../db/mysql'

class ItemDTO {

    async get() {
        const connection = await pool.getConnection(async conn => conn);
        await connection.beginTransaction();

        const [rows] = await connection.query('SELECT * FROM item')

        await connection.commit();
        connection.release();

        return rows
    }
}

export default new ItemDTO()