// document.getElementById("root").innerHTML="hello world";
const root=document.getElementById("root");
console.log(document.getElementById("root"));

const newdiv=document.createElement('h1');

newdiv.innerHTML="Hello React";
root.appendChild(newdiv);
