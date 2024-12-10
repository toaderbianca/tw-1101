let counter=0;

const privateCounter=setInterval(()=>{
    counter++;
    console.log(`current val: ${counter}`);
    if(counter==5){
        clearInterval(privateCounter);
        console.log('counter stopped');
    }
},1000)
//afiseaza valorile la dif de 1 sec
//se apeleaza automat