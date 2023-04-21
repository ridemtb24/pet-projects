let massiveText =[
    'Здраствуйте, пользователь',
    'Привет, пользователь',
    'Здарова, братан'
];
let randomNum=Math.floor(Math.random()*3);
alert(massiveText[randomNum]);

let h1Id = document.getElementById("h1");
let buttonId = document.getElementById("button");
let upgrade1Button=document.getElementById("upgrade1")
let counter=0;
let upgrade0=1
upgrade1Button.addEventListener('click', function() {
    upgrade0= upgrade0 + 1
});
buttonId.addEventListener('click', function (){
    counter=counter+upgrade0;
    h1Id.textContent='Кликов сделано'+counter
})