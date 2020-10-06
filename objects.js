const person = {
  firstName: "Rommy",
  lastName: "Gustiawan",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`; // `this` mengacu pada properti dalam object person
  },
};

console.log(`First Name : ${person.firstName}`);
console.log(`Last Name  : ${person["lastName"]}`);
console.log(`Full Name  : ${person.fullName()}`);
