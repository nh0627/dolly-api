import Mysql from './mysql'
import Item from '../model/item'

class ItemDTO extends Mysql {

    async get() {
        const queryResult = await super.executeQuery(`
            SELECT
                A.pid AS item_pid,
                A.create_date AS item_create_date,
                A.modify_date AS item_modify_date,
                A.status,
                A.product_condition,
                A.quantity,
                A.price,
                A.paymenth_method,
                A.delivery_method,
                A.delivery_charge,
                A.title,
                A.description,
                B.pid AS user_pid,
                B.create_date AS user_create_date,
                B.modify_date AS user_modify_date,
                B.email,
                B.nickname
            FROM
                item A
            INNER JOIN user B ON
                A.user_rid = B.pid`)

        let itemList = [];

        queryResult.map(e => {
            itemList.push(new Item(e))
        })

        return itemList
    }
}

export default new ItemDTO()