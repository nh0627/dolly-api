export default class User {
    constructor(pid, create_date, modify_date, email, nickname, pass_word = null, img_rid) {
        this.pid, 
        this.create_date = create_date, 
        this.modify_date = modify_date, 
        this.email = email, 
        this.nickname = nickname, 
        this.pass_word = pass_word, 
        this.img_rid = img_rid        
    }

}
