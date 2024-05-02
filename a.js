
function areobjectsequal(obj1, obj2) {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);
    return stringifiedObj1 === stringifiedObj2;
}
 
let obj1 = {
    name: "person 1",
    age: 5,
};
 
let obj2 = {
    name: "person 1",
    age: 5,
};
 
console.log(areobjectsequal (obj1, obj2));