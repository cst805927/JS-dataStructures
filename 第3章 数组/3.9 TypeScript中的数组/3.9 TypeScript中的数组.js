var friends = [
    { name: 'John', age: 30 },
    { name: 'John', age: 30 },
    { name: 'John', age: 30 },
];
function comparePerson(a, b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}
console.log(friends.sort(comparePerson)); // Ana(20), Chris(25), John(30)
