console.log("Ajax");
let fetch = document.getElementById('fetchbtn');
fetch.addEventListener('click', buttonClickHandler)

function buttonClickHandler()
{
    console.log('you have clicked');
    //creating xhr object

    const xhr =  new XMLHttpRequest();
    //open the obj
   // xhr.open("GET","hello.txt", true);//open(request, url, asyn)
    
    //xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1", true);
    //post request
    xhr.open("GET","http://dummy.restapiexample.com/api/v1/create", true)
    
    
    
    //on progress (optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    xhr.onreadystatechange = function(){
        console.log("ready state: ",xhr.readyState);
    }

    //when when page is load-> RESPPONSE is ready
    xhr.onload = function (){
        //checking the status
        if(status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("error");
        }
        
    }
    //send request
    xhr.send();




}