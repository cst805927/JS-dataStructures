//3.9TypeScript中的数组
interface Person {
    name: String;
    age: Number;
}
const friends = [
    {name:'John', age: 30},
    {name:'John', age: 30},
    {name:'John', age: 30},
]

function comparePerson(a: Person, b: Person) {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
}
console.log(friends.sort(comparePerson)) // Ana(20), Chris(25), John(30)
