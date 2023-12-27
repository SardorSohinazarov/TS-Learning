// console.log('Qales');

// function sonlarniChiqar(){
//     for(let i = 0; i< 10; i++){
//         console.log(i)
//     }
// }

// sonlarniChiqar()


// //Interface
// interface ICordinate{
//     x: number;
//     y: number;
// }

// function GetCordinate(cordinate:ICordinate){
//     console.log(cordinate.x + ' ' + cordinate.y);
// }

// GetCordinate({x:1,y:5});



// //Class
// interface ICordinate{
//     x: number;
//     y: number;
//     print():void;
// }

// class Cordinate implements ICordinate{
//     x: number;
//     y: number;
//     print(){
//         console.log(this.x + ' ' + this.y);
//     } 
// }

// let cor = new Cordinate;

// cor.x = 10;
// cor.y = 20;
// cor.print();


// //Constructor
// class Cordinate{
//     private x: number;
//     private y: number;

//     constructor(x:number, y:number){
//         this.x = x;
//         this.y = y;
//     }

//     print(){
//         console.log(this.x + ' ' + this.y);
//     } 
// }

// let cor = new Cordinate(1,2);

// cor.print();



// //Property

// class Cordinate{
//     private _x: number;
//     private _y: number;

//     get x(){
//         return this._x;
//     }

//     set x(value:number){
//         if(value < 0 || value > 90)
//             throw new Error("Qales toy bola");

//         this._x = value;
//     }

//     get y(){
//         return this._y;
//     }

//     set y(value:number){
//         if(value < 0 || value > 90)
//             throw new Error("Geografiya vashshe o'qimaganmisiz");
//         this._y = value;
//     }

//     constructor(x?:number, y?:number){
//         this._x = x;
//         this._y = y;
//     }

//     print(){
//         console.log(this._x + ' ' + this._y);
//     } 
// }

// let cor = new Cordinate(5,55);

// cor.x = -4;
// cor.y = 45;

// cor.print();


//import qilish
// import { Cordinate } from "./Cordinate";


// let cor = new Cordinate(5,55);

// cor.x = 4;
// cor.y = 45;

// cor.print();

///o'zgaruvchilar
// let firstname:string = "Sardor";
// console.log(firstname);

// var someArray: any[] = [ 24, "Tom", false];
// console.log(someArray);

// var intarray: int[] = [1,2,3,4];
// console.log(intarray);


///Methodlar
// function add(a: number, b: number): number {
//     return a + b;
// }
// let result = add(1, 2);
// console.log(result);


// function add(a: number, b: number): void {
//     console.log(a + b);
// }
// add(10, 20);


///If else
// function getName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
  
// let name1 = getName("Иван", "Кузнецов");
// console.log(name1); // Иван Кузнецов
// let name2 = getName("Вася");
// console.log(name2); // Вася



// function sum (x: number, y: number): number {
//     return x + y;
// };
// function subtract (a: number, b: number): number {
//     return a - b;
// };
 
// let op: (x:number, y:number) => number;
 
// op = sum;
// console.log(op(2, 4));  // 6
 
// op = subtract;
// console.log(op(6, 4));  // 2


// import {User} from "./User"

// let user1 = new User(1,20,"Sardor Sohinazarov");

// let user2 = new User(2,20);

// user1.name = "Sarvar";
// console.log(user1);

// console.log(user2);

// console.log(user1.toString());



//Types
// type id = number | string;
 
// let userId : id = 2;
// console.log(`Id: ${userId}`);
// userId = "qwerty";
// console.log(`Id: ${userId}`);


///Tuple
// let myTuple:[number,string,string] = [1,"Sardor","Sohinazarov"];

// console.log(myTuple);