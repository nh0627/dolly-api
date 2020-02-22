import Mysql from './mysql'
import Item from '../model/item'
import User from '../model/user'

class ItemDTO extends Mysql {

    async get() {
        const queryResult = await super.executeQuery(`
            SELECT
                A.pid,
                A.create_date,
                A.modify_date,
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
            const { item_pid, item_create_date, item_modify_date, status, product_condition, quantity, price, paymenth_method, delivery_method, delivery_charge, title, description } = e
            const { user_pid, user_create_date, user_modify_date, email, nickname } = e

            const user = new User(user_pid, user_create_date, user_modify_date, email, nickname)
            const item = new Item(item_pid, item_create_date, item_modify_date, status, product_condition, quantity, price, paymenth_method, delivery_method, delivery_charge, title, description, user)
            
            itemList.push(item)
        })

        return itemList
    }
}

export default new ItemDTO()