import {employee} from "./employee.js"

export class manager extends employee{
    
    constructor(name,tasklist,des){
        super(name,tasklist,des)
    }
    addEmployee(e){
        this.des.push(e);
    }
}