function f(factor,numere){
    const  sum=numere.reduce((acc,el)=>acc+el,0);
    return sum*factor;
}

const numere=[2,3,5];
console.log(f(6,numere));