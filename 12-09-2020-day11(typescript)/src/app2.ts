type stringnum = string | number;
type objname= {name: string, id: number, address: string, age: number};

const logDetails = (user: objname) =>
{
    console.log('${user.name} says hello');
}
 const greetAgain =(user:objname) =>
 {
     console.log('${user.name} says hello');
 }