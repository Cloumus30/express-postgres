const db = require('../dbConnect');
const StrProcess = require('../Helper/StrProcess');

module.exports = class Model {
    
    constructor(){
        this.table = '';
        this.objQuery = '';
        this.whereQuery = '';
        this.whereVal = [];
        this.objResData = {};
    }
    // query select execute
    async select (column=[]){
        this.objQuery = `SELECT * FROM ${this.table} ${this.whereQuery}`;
        if(column.length>0){
            this.objQuery = `SELECT ${StrProcess.joinArrToStr(column)} FROM ${this.table} ${this.whereQuery}`;
        }
        console.log(this.objQuery);
        try {
            let res = await db.query(this.objQuery,this.whereVal);
            this.objResData = res.rows;
            return this.objResData;    
        } catch (err) {
            return err;
        }
        
    }

    //where Clause
    where(column='', operator='=', data=null){
        try {
            if(data == null){
                throw Error('value of data can not null');
            }
            this.whereVal.push(data);
            // console.log(this.whereVal);
            let indexVal = this.whereVal.length;
            if(this.whereQuery){
                this.whereQuery += ` AND ${column}${operator} $${indexVal}`; 
            }else{
                this.whereQuery += `WHERE ${column}${operator} $${indexVal}`;
            }
             return this;
        } catch (err) {
            return err;
        }
    }

    whereOr(column='', operator='=', data=null){
        try {
            if(data == null){
                throw Error('value of data can not null');
            }
            this.whereVal.push(data);
            // console.log(this.whereVal);
            let indexVal = this.whereVal.length;
            if(this.whereQuery){
                this.whereQuery += ` OR ${column}${operator} $${indexVal}`; 
            }else{
                this.whereQuery += `WHERE ${column}${operator} $${indexVal}`;
            }
             return this;
        } catch (err) {
            return err;
        }
    }

    // insert data
    async insert(data={}){
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

    //Update Data
    async updateWhere(data={},condition=[]){
        try {
            if ((Object.keys(data).length == 0) || (condition.length ==0)){
                console.log('error');
                throw Error('Properties Can not Empty');
            }
            let queryStr = StrProcess.objToUpdateQuery(data);
            let conditionStr = StrProcess.whereUpdateFormat(condition,queryStr.lastIndex);
            let query = `UPDATE ${this.table} SET ${queryStr.str} ${conditionStr.str}`;
           
            let valueBind = Object.values(data).concat(conditionStr.value);
            let res = await db.query(query,valueBind);
            return res.rows;    
        } catch (err) {
            return err;
        }
    }

    
}
