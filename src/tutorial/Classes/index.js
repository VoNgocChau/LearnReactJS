class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this);
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const person = new Person("Chau vo");
