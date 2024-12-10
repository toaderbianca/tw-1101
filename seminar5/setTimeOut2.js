function fetchDataFromServer(url,callback){
    setTimeout(function (){
        const data={name:"John",age:30};
        callback(data);
    },1000);
}

function displayData(data){
    console.log("data received from the server: ",data);
}

fetchDataFromServer("https://example.com/api/data",displayData);