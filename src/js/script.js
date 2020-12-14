/* "use strict";
const Name = "Ислам";
let Greeting = 'Всем привет! Меня зовут';
let Prof = 'я JavaScript разработчик';
console.log(Greeting + ' ' + Name + ', ' + Prof); 
 */
const userName = prompt("Как Вас зовут?","");
alert(`Здравствуйте, ${userName}`);
const childNum = prompt('Какой посчёту ребенок Шамсият Вас интересует',''); 
let children = [0, 'Арсен', 'Тамара', 'Амина', 'Ислам'];
if(childNum == 1){
    document.write(`Сына зовут ${children[1]}`);
}
else if(childNum==2){
    document.write(`Дочку зовут ${children[2]}`);
}
else if(childNum==3){
    document.write(`Дочку зовут ${children[3]}`);
}
else if(childNum==4){
    document.write(`Сына зовут ${children[4]}`);
}

/* alert('Сейчас будут перечислены все дети Шамсият');
for(let i = 0; i<4; i++){
    alert(children[i]);
} */

/* const obj = {
    name: 'Monya',
    age: 8,
    color: 'black'
};

console.log(obj.name + ' ' + obj.age + ' ' + obj.color); 

const result = confirm("Тебя зовут Амина?");
if(result==true){
    alert("Молодец, ты можешь находиться на сайте");
}
else if(result==false){
    alert('Что ты тогда тут забыла? Пошла вон отсюда');
}
 */

const Snum = '22',
    num = 54;
let count = +Snum + num;
console.log(count);

let isChecked = true,
    isClose = false;
    if(isChecked || isClose){
        console.log(isChecked);
    }
    else{
        console.log(isClose);
    }


