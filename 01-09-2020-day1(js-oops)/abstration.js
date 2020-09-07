function Student(name, id, marks) {
    this.name = name;
    this.id = id;
    this.marks=marks;
    let internalMarks = 50;
    let calculateFinalMarks = function() {
        let finalMarks = marks + internalMarks;
        console.log("final marks is :" + finalMarks);
    };
    this.getStudDetails = function() {
        console.log("Name : " + this.name + "||id: " + this.id);
        calculateFinalMarks();
    };
}
var s1 = new Employee("sita", 2767, 30);
s1.getStudDetails();
//s1.calculateFinalMarks();