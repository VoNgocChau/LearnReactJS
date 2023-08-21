// const first = [1, 2, 3];
// const second = [4, 5, 6];
// // const combined = first.concat(second);

// const combined = [...first, ...second]; // ... -> clone

const first = { name: "chau" };
const second = { age: 20 };

const combined = { ...first, ...second, location: "HCM" };
