const myName = "My name is ugochukukwu Miracle.";
const myHeight = "I'm 6'3 foot tall.";
const myCountry = "I'm from Nigeria.";

console.log(myName, myHeight, myCountry);

alert(myName);
alert(myHeight);
alert(myCountry);

document.querySelector(".info-name").textContent = myName;
document.querySelector(".info-height").textContent = myHeight;
document.querySelector(".info-country").textContent = myCountry;
