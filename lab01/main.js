// let head = document.getElementById('header')
// console.log(head)
// let inp_color = prompt('Color ?')

// head.style.color = inp_color
// head.onmouseover = function () {
//     head.style.background = 'blue'
// }
// head.onclick = () => {
//     head.style.visibility = 'hidden'
// }
// document.body.onclick = () => {
//     head.style.visibility = 'visible'
// }

// let p = document.getElementsByTagName('p')
// console.log(p)

// for(let el of p) {
//     console.log(el.textContent)
// }

// let ctn = document.getElementsByClassName('container')
// console.log(ctn)

// ctn[0].style.color = 'lime'

// let items = document.getElementsByClassName('item')
// console.log(items)

// let header = document.querySelector('#header')
// console.dir(header)

// let item = document.querySelector('.item:last-child')
// console.log(item)
// item.innerHTML = `<h1>CodeCamp 16}</h1> `
// item.innerText = '<h1>CodeCamp16</h1>'
// item.textContent = '<h1>CodeCamp16</h1>'

// let items = document.querySelectorAll('p')
// console.log(items)
// console.log(Array.isArray(items))

// items.forEach( (el,i) => {
//     console.log(i, el.textContent)
// } )
let ctn = document.querySelector('.container')
let btnAZ = document.querySelector('.btn-sort-az')
let btnZA = document.querySelector('.btn-sort-za')

btnAZ.onclick = () => {
    console.log('AZ Click')
    ctn.style.display = 'flex'
    ctn.style.flexDirection = 'column'
}
btnZA.onclick = () => {
    console.log('ZA Click')
    ctn.style.display = 'flex'
    ctn.style.flexDirection = 'column-reverse'
}


