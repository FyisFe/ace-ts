function fn(obj) {
    console.log(obj.prop);
    //   obj.prop = '12' // error
}
var writablePerson = {
    name: '23',
    age: 23
};
var readonlyPerson = writablePerson;
// readonlyPerson.age += 1 // error
writablePerson.age += 1; // works, alias can change readonly properties.
