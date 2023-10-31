// 1

document.getElementById("title").innerHTML = "DOM Manipulation";

// 2

document.getElementById("container").style.backgroundColor = "lightblue";

// 3

var ul = document.querySelector('ul');

var newItem = document.createElement('li');
newItem.textContent = 'Item 7';

ul.appendChild(newItem);

// 4

document.querySelector('li').style.color = "crimson";

// 5

document.querySelectorAll('li')[2].style.backgroundColor = "pink";

// 6

document.querySelectorAll('li')[4].style.backgroundColor = "yellow";

// 7

document.querySelectorAll('li')[6].style.backgroundColor = "lightgrey";

document.querySelectorAll('li')[6].style.color = "royalblue";

// 8

var ul = document.querySelector('ul');

var newItem = document.createElement('li');
newItem.textContent = 'CJ Eilenstine';

ul.appendChild(newItem);

// 9

document.querySelectorAll('li')[3].remove();

// 10

document.getElementById("btn").style.fontStyle = "italic";

document.getElementById("btn").style.backgroundColor = "rebeccapurple";

document.getElementById("btn").style.color = "white";

document.getElementById("btn").style.border = "white solid 1px";