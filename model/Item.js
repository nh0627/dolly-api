import User from './user'

export default class Item {
    constructor(item){
        this.pid = item.item_pid,
        this.create_date = item.item_create_date,
        this.modify_date = item.item_modify_date,
        this.status = item.status,
        this.product_condition = item.product_condition,
        this.quantity = item.quantity,
        this.price = item.price,
        this.paymenth_method = item.paymenth_method,
        this.delivery_method = item.delivery_method,
        this.delivery_charge = item.delivery_charge,
        this.title = item.title,
        this.description = item.description,
        this.master_image = {
            file_name: item.item_master_file_name,
            file_url: item.item_master_file_url
        },
        this.user = {
            pid: item.user_pid,
            create_date: item.user_create_date,
            modify_date: item.user_modify_date,
            email: item.email,
            nickname :item.nickname,
            image: {
                file_name: item.user_file_name,
                file_url: item.user_file_url
            }
        }
    }
}