function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },ms)
    })
}

// delay(2000).then(()=>{
//     console.log('aici')
// })

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('here');
    },2000)
})

console.log(promise)

promise.then(result=>console.log(result))