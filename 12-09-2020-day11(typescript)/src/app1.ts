
//FUNCTION

function test() {   // function definition    
    console.log("function called") 
 } 
 test()              // function invocation


 //*Returning a Function*
function greet():string { //the function returns a string 
    return "Hello World" 
 } 
 
 function caller() { 
    var msg = greet() //function greet() invoked 
    console.log(msg) 
 } 
 //invoke function 
 caller()

 //*Parameterized a Function**
 function test_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
 } 
 test_param(123,"this is a string")

 //** optional Parameterized a Function*/
 function disp_details(id:number,name:string,mail_id?:string) { //? says its optional
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"John");
 disp_details(111,"mary","mary@xyz.com");

 /***REST PARAMETER->Rest parameters don’t restrict the number of values that you can pass to a function */
 function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 /**Anonymous Function */
 var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())
 //with parameter
 var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2)) 

 /**Function Cnstructor->new Function() is a call to the constructor */
 var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

// /**lmabda expression */
// var x = (x:number)=> {
//     10+x
// console.log(x)
// }
// x(20)

/**Syntactic Variations->not mandatory to specify the data type of a parameter */
var  func =(x1) =>{
    if(typeof x1 =="number"){
        console.log(x1+ " is numeric")
            }
        else if(typeof  x1=="string")
            console.log(x1+ " is string")
    }
func(12)
func("ama")

/**function overloading */
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");