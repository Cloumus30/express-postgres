const db = require('../dbConnect');
const StrProcess = require('../Helper/StrProcess');

module.exports = class Model {
    // query select execute
    static async select (column=[]){
        let query = `SELECT * FROM ${this.table}`;
        if(column.length>0){
            query = `SELECT ${StrProcess.joinArrToStr(column)} FROM ${this.table}`;
        }
        try {
            let res = await db.query(query);
            res = res.rows;
            return res;    
        } catch (err) {
            return err;
        }
        
    }

    //where select
    static async where(column='', operator='=', data=null){
        try {
            if(data == null){
                throw Error('value of data can not null');
            }
        } catch (err) {
            return err;
        }
    }

    // insert data
    static async insert(data={}){
        try {
            if (Object.keys(data).length == 0){
                console.log('error');
                throw Error('Properties Can not Empty');
            }
            let column = StrProcess.joinArrToStr(Object.keys(data));
            let values = StrProcess.arrToQueryValues(Object.values(data));
            
            let query = `INSERT INTO ${this.table} (${column})
            VALUES (${values}) RETURNING *`;
            
            let res = await db.query(query,Object.values(data));
            return res.rows;    
        } catch (err) {
            return err;
        }
    }

}
