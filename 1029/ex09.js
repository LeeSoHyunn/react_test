let f1 = undefined;
let f2 = null;
let f3 = NaN;
if (!f1)
    console.log("falsy");
else
    console.log("Turty");

let t1 = [];
let t2 = () => {};
if (t1)
    console.log("Truthy");
else
    console.log("Falsy");

function printName(person) {
    // if (person === null || person === undefined){
    //     console.log("person이 비었음");
    //     return;
    // }
    // console.log(pesrson.name);
    console.log(person && pesrson.name);
}

let person = {
    name : "Hong",
    addr : "종로구"
}
let person2;
printName(person2);

function func1() {
    console.log("func1 실행")
    return false;
}

function func2() {
    console.log("func2 실행")
    return true;
}

//만약 시험에 낸다면 출력결과 정도?
console.log(func1() && func2()); //단력평가?
console.log(func1() || func2());//단력평가?

