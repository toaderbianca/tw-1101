const arr=[12,5,8,130,44];
const filtered=arr.filter(el=>el%2===0);
//console.log(arr);
//console.log(filtered);

const mapped=arr.map(el=> el*10)
//console.log(mapped);

const sum=arr.reduce((acc,el)=>acc+el,0);
//console.log(sum);

const foundNumber=arr.find(el=>el===8);
console.log(foundNumber);

