function logger(message){
    console.log(message);
}

async function logger2(message) {
    console.log(message);
}

const arrLogger=(message)=>{
    console.log(message);
}

const arrLogger2=async (message)=>{
    console.log(message);
}

//logger('astazi');
//logger2('maine')
//logger('azi')

//arrLogger('luni');
//arrLogger2('marti');

async function f() {
    try{
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>reject(new Error('error msj')),1000)
        });

        let result=await promise;
        console.log(result);
    }catch(error){
        console.log(error)
    }
}

f()
console.log(2)