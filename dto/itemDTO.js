import Mysql from './mysql'

class ItemDTO extends Mysql {

    async get() {
        return super.executeQuery('SELECT * FROM item')
    }
}

export default new ItemDTO()