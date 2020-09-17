"use strict";
// ***arrays***
var names = ['luigi', 'mario', 'yoshi'];
//names.push('toad');-we can add new element using "push" and "pop" to remove
//Passing Arrays to Functions
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i]);
    }
}
disp(names);
// names.push(3);
// names[1] = 3;
// Function Returning an Array
function disp1() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums = disp1();
for (var i in nums) {
    console.log(nums[i]);
}
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// ***objects***
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';//cant change that type
// ninja.skills = ['fighting', 'sneaking']
//cant define extra properties
ninja = //override****
    {
        name: 'yoshi',
        belt: 'orange',
        age: 40,
    };
