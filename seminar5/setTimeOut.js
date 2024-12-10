console.log(1)

setTimeout(()=>{
    console.log('5 seconds')// acest msj apare dupa 5 sec de la rulare
},5000) 

setTimeout(()=>{
    console.log('1 second')
},1000)

//chiar daca in cod e scris dupa, apare mai intai 1 si apoi 5 pt ca are timpul mai scurt
console.log(2)// apare instant la rulare, apoi celelalte