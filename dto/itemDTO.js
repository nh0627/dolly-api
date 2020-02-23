import Mysql from './mysql'
import Item from '../model/item'
import User from '../model/user'
import Image from '../model/image'
import itemQuery from './query/itemQuery'


class ItemDTO extends Mysql {

    async get() {
        const queryResult = await super.executeQuery(itemQuery.getItems())
        const itemList = [];

        queryResult.map(e => {

            // 마스터 이미지 리스트 추가
            const masterImage = {
                pid: e.master_file_pid, 
                create_date: e.master_file_create_date,
                file_name: e.master_file_name,
                file_url: e.master_file_url,
                file_size : e.master_file_size,
                master_flag: e.master_file_master_flag
            }

            const imageArr = []

            imageArr.push(new Image(masterImage))

            e['images'] = imageArr

            // 유저 정보 추가
            const profileImages = []
            const profileImage = {
                pid: e.user_file_pid,
                create_date: e.user_file_create_date,
                file_name: e.user_file_name,
                file_url: e.user_file_url
            }

            profileImages.push(profileImage)

            const user = {
                pid: e.user_pid,
                create_date: e.user_create_date,
                modify_date: e.user_modify_date,
                email: e.user_email,
                nickname: e.user_nickname,
                image: profileImages
            }

            e['user'] = new User(user)

            itemList.push(new Item(e))
        })

        return itemList
    }

    async getById(itemId) {
        const queryResult = await super.executeQuery(itemQuery.getItemById(itemId))
        return queryResult
    }
}

export default new ItemDTO()