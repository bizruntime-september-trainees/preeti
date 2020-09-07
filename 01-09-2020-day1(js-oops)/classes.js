class Student{
    setDetails(name,id)//function
        {
            this.name=name;
            this.id=id;

        }


}
//created object
let s1= new Student();
s1.setDetails("sita",101);
console.log(s1.name);
console.log(s1.id);