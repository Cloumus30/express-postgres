const Model = require('./Model');

module.exports = class Account extends Model{
    constructor(){
        super();
        this.table = 'accounts';
    }
}
