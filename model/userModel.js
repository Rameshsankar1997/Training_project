const database = require("../utils/database")

const UserModel = {

    async CreateUser(userData){
       
        let query=`INSERT INTO tbl_signup(username,phonenumber,email,address,gender,bloodgroup,
            alternative_phone_no,DOB,qualification,password,confirm_password) 
            values ('${userData.username}','${userData.phonenumber}','${userData.email}','${userData.address}','${userData.gender}',
            '${userData.bloodgroup}','${userData.alternative_phone_no}','${userData.dob}','${userData.qualification}',
            '${userData.password}','${userData.confirm_password}')`;
        return database.promise().query(query)
    },
    async loginUser(){
        return query = await database.promise().query(`select email,password from signin`);
    },

async GetAllUser(){
    return query = await database.promise().query(`select * from users`);
},
async getUser(data){

    return query = await database.promise().query(`select * from users u where u.user_id = ${data.user_id}`);

},
async updateUser(data){

    return query = await database.promise().query(`update users set user_name = '${data.user_name}' where user_id = ${data.user_id}`);

}
}

module.exports=UserModel;