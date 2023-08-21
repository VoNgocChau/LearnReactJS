const square = (number) => number * number;

console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const activeJobs = jobs.filter(function(jobs) {return jobs.isActive});
const activeJobs = jobs.filter((jobs) => jobs.isActive);

// Arrow function and this

const person = {
  talk() {
    const self = this;
    setTimeout(() => {
      console.log("this" + this);
    }, 1000);
  },
};

person.talk();
