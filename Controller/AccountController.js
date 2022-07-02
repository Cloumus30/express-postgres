const Account = require('../Model/Account');

const getAll = async ()=>{
    const data = await Account.select();
    console.log(data);
}

const store = async()=>{
    let request = {
        name : 'imani12',
        username : 'imaniaja12',
        email : 'iman12i@mail.com',
        password : 'password'
    };
    const data  = await Account.insert({});
    console.log(data);
}

// store();
// getAll();