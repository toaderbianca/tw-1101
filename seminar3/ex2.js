const arr=[1,2,5,6,12,14];
const fun=(arr,divizor)=>{
    return arr.filter(el=>el%divizor===0).reduce((acc,el)=>acc+el,0);
}

console.log(fun(arr,2));