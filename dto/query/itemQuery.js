const itemQuery = {
    getItem(pageNum = 0) {
        return `SELECT
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
                    B.file_name AS item_master_file_name,
                    B.file_url AS item_master_file_url,
                    C.pid AS user_pid,
                    C.create_date AS user_create_date,
                    C.modify_date AS user_modify_date,
                    C.email,
                    C.nickname,
                    D.file_name AS user_file_name,
                    D.file_url AS user_file_url
                FROM
                    dollymarket.item A
                LEFT OUTER JOIN dollymarket.image B ON
                    B.item_rid = A.pid
                AND B.master_flag = 1
                INNER JOIN dollymarket.user C ON
                    A.user_rid = C.pid
                LEFT OUTER JOIN dollymarket.image D ON
                    C.img_rid = D.pid
                LIMIT ${pageNum}, 10`
    }
}

export default itemQuery 