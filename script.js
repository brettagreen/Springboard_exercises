//1.
const container_id = document.getElementById('container');
console.log(container_id);
//2.
const container_qs = document.querySelector('#container');
console.log(container_qs);
//3.
const seconds = document.querySelectorAll('.second');
console.log(seconds);
//4.
const third = document.querySelector('ol .third');
console.log(third);
//5.
container_id.innerHTML = "Hello! \n" + container_id.innerHTML;
console.log(container_id.innerText);
//6.
const footer = document.querySelector('.footer');
footer.classList.add('main');
//7.
footer.classList.remove('main');
//8.
const newElement = document.createElement('li');
//9.
newElement.innerText = 'four';
//10.
document.getElementsByTagName('ul')[0].append(newElement)
//11.
const lis = document.querySelectorAll('ol li');
for (let li of lis) {
    li.style.color = 'green';
}
//12.
footer.remove();