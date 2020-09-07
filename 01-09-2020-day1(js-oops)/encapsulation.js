class Student{
    
    setStudDetails(name,id, contact_no){
        this.name= name;
        this.id= id;
        this.contact_no = contact_no;

    }
    getStudName(){
        return this.name;

    }

    getStudId(){
        return this.id;
        
    }
    getStudContctNo(){
        return this.contact_no;
        
    }
}

let s1= new Student();
s1.setStudDetails("sita", 101, 789486782);
console.log(s1.getStudName);
console.log(s1.getStudId);
console.log(s1.getStudContctNo);
