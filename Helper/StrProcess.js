 // join array of string to str
 const joinArrToStr = (arr = []) => {
    let res = '';
    if(arr.length>0){
        arr.forEach((element,index, array)=>{
            let temp = element+', ';
            if(index == array.length-1){
                temp = element;
            }
            res += temp;
        });
    }
    return res;
}

const arrToQueryValues = (arr=[]) =>{
    let res = '';
    if(arr.length>0){
        for (let i = 1; i <= arr.length; i++) {
            let temp = `$${i}, `;
            if(i == arr.length){
                temp = `$${i}`;
            }
            res += temp;
        }
    }
    return res;
}

// Format update query key values
const objToUpdateQuery = (obj = {}) =>{
    let res = {
        str: '',
        lastIndex: 1,
    };
    if(Object.keys(obj).length > 0){
        let objArr = Object.entries(obj);
        temp = '';
        objArr.forEach((element, index, arr)=>{
            temp = `${element[0]}= $${index+1}, `;
            if(index == arr.length-1){
                temp = `${element[0]}= $${index+1}`;
            }
            res.str+= temp;
        });
        res.lastIndex = Object.keys(obj).length; 
    }
    
    return res;
}

//format update condition into where
const whereUpdateFormat = (arr = [], lastIndex = 0) => {
    try {
        let res = {
            str: 'WHERE ',
            value: [],
        };
        if(arr.length!=0){
            // res = 'WHERE';
            arrTemp = [];
            arr.forEach((obj,index,arrayVal)=>{
                temp = `(${obj.column}${obj.operator} $${index+lastIndex+1}) `;
                if(index>0){
                    temp = `AND (${obj.column}${obj.operator} $${index+lastIndex+1}) `;
                }
                res.str+= temp;
                arrTemp.push(obj.value);
            });
            res.value = arrTemp;
        }
        return res;
    } catch (err) {
        return err;
    }
}


module.exports = {joinArrToStr,arrToQueryValues,objToUpdateQuery,whereUpdateFormat};