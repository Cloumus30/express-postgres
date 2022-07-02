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

module.exports = {joinArrToStr,arrToQueryValues};