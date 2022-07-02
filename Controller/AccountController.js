const Account = require('../Model/Account');

const getAll = async ()=>{
    const account = new Account();
    const data = await account.select();
    console.log(data);
}

const store = async()=>{
    let request = {
        name : 'imani12',
        username : 'imaniaja12',
        email : 'iman12i@mail.com',
        password : 'password'
    };
    const account = new Account();
    const data  = await account.insert({});
    console.log(data);
}

const getWhere = async()=>{
    const account = new Account();
    const data = await account.where('id','=',1)
    .whereOr('username','=','dana')
    // .where('name','=','dana')
    .select();
    // data.select();
    console.log(data);
}

const update = async()=>{
    const account = new Account();
    let request = {
        name : 'imani1asd2',
        username : 'imaniaja12asd',
        email : 'iman12asdi@mail.com',
        password : 'password'
    };
    const data = await account.updateWhere(request,[{
        column:'id',
        operator: '=',
        value: 1,
    }]);
    console.log(data);
}

// getWhere();
// store();
// getAll();
update();