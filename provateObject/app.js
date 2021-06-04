
const username = Symbol("username");
const password = Symbol("password");
const age = Symbol("age");

const user={
    [username]:"chil",
    [password]:"1234",
    [age]:50,
}

console.log(user.username);
console.log(user.age);