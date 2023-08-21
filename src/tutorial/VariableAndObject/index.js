// variable and object and this keyword

/**
 * var -> function
 * let -> block
 * const -> block
 */

const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {},
};

// person.talk();
// person.name = "";
// const targetMember = "name";
// person[targetMember.value] = "Chau";

// this keyword binding this

const walk = person.walk.bind(person);
walk();
