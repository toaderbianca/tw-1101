const isEven=(num)=>num%2===0;
const isOld=(num)=>num%2!==0;

const filter=(arr,callback)=>{
    const filteredArr=[];
    for(const el of arr){
        if(callback(el)){
            filteredArr.push(el);
        }
    }
    return filteredArr;
}

const numbers=[1,5,3,7,2,2,4,8,2];
console.log(filter(numbers,isEven));
console.log(filter(numbers,isOld));