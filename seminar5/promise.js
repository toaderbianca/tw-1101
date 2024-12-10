let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=false;

        if(success){
            resolve("operation successed");
        }else{
            reject(new Error("operation failed"));
        }
    },2000);
});

promise.then((message)=>{
    console.log(message);
}).catch((error=>{
    console.log(error);
}));

console.log('here')