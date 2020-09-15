import { Observable } from 'rxjs';
var observable = Observable.create((observer:any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();//terminate 
    observer.next('Bye');//this will not execute because it is finalized as completed
})
observable.subscribe( //executing 
    (x:any) => logItem(x),
    (error: any) => logItem ('Error: ' + error),
    () => logItem('Completed')
    );

function logItem(val:any) { //printing it in  webppage
    var node = document.createElement("li");//new list item
    var textnode = document.createTextNode(val); //contains the  text
    node.appendChild(textnode);//attaching to dom
    document.getElementById("list").appendChild(node);
}