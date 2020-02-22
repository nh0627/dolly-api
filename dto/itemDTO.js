import Mysql from './mysql'
import Item from '../model/item'
import itemQuery from './query/itemQuery'

class ItemDTO extends Mysql {

    async get() {
        const queryResult = await super.executeQuery(itemQuery.getItems())
        let itemList = [];

        queryResult.map(e => {
            itemList.push(new Item(e))
        })

        return itemList
    }
}

export default new ItemDTO()