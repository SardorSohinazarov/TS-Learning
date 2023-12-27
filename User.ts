export class User{
    private _id:number;
    private _age:number;
    private _fullname:string;

    get name(){
        return this._fullname;
    }

    set name(value:string){
        this._fullname = value;
    }

    constructor(id:number = 1, age:number,fullname:string = "Sardor"){
        this._id = id;
        this._age = age;
        this._fullname = fullname;
    }

    toString() {
        return this._id + this._age + this._fullname;
    }
}