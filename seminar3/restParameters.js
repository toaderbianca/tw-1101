function sum(...args){
    return args.reduce((acc,el)=>acc+el,0);
}

console.log(sum(1,2,3));
const yearsold=25;
console.log(`am varsta de ${yearsold} ani`);