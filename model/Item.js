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
        this.images = item.images,
        this.user = item.user
    }
}