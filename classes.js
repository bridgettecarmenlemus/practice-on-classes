class Human {
    name = ""
    constructor(name) {
        this.name = name
    }
 sayHi() {
    return `My name is ${this.name}!`
}
}

class Teacher extends Human {
    currentlyTeaching = 'yes'
    sayHi(){ // overiding old sayHi
        return `hi, I'm professor ${this.name}`

    }
}

class Student {
  grade = 100;
}


let student1 = new Student('Bobby')
let student2 = new Student('Jenifer')
let teacher = new Teacher('Bridgette')

console.log(teacher.name)
console.log(teacher.sayHi())