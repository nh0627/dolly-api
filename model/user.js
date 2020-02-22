export default class User {
    constructor(user) {
        this.pid = user.pid, 
        this.create_date = user.create_date, 
        this.modify_date = user.modify_date, 
        this.email = user.email, 
        this.nickname = user.nickname, 
        this.pass_word = user.pass_word || null,
        this.img_rid = user.img_rid        
    }

}
