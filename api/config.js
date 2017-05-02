var config = {
    secret: 'keycam',
    port : 974,
    //url : ".com:" + 3000,
    db : {url:'mongodb://keycam:keycam974@127.0.0.1:27017/keycam', port:27017, name:'keycam'},
    //db : {url:'mongodb://keycam:keycam974@163.5.84.197:27017/keycam', port:27017, name:'keycam'},
    model:{
        user:{
            login: {type: String, required: true},
            password: {type: String, required: true}
        },
        group:{
            team:{type:String},
            name:{type:String},
            members:{type:Array},
            rating:{type:String}
        }
    }
};

module.exports = config;