

// console.log(item.matches('.item01'))
// console.log(item.matches('div'))
// console.log(item.matches('p'))

// console.log(item.closest('div').outerHTML)
// console.log(item.closest('body'))
// console.log(item.closest('head'))
// console.log(item.closest('html'))

// console.log(item.contains(ctn))
// console.log(ctn.contains(item))
// console.log(document.body.contains(item))

// console.log(ctn.childNodes)
// // console.log(ctn.children)
// for(let el of ctn.childNodes) {
//     if(el.nodeType === 8) {
//         console.log(el.textContent)
//     }
// }


// console.log(ctn.innerHTML)
// console.log(ctn.outerHTML)
// console.log(ctn.innerText)
// console.log(ctn.textContent)

// console.log(ctn.attributes)
// console.log(ctn.getAttribute('class'))
// ctn.setAttribute('id', 'wrapper')

// let item01 = document.querySelector('.item01')
// item01.setAttribute('id', 'para1')

// // let para1 = document.querySelector('#para1')
// // console.log(para1)

// item01.removeAttribute('class')

// item01.setAttribute('id', 'item1')


// เพิ่ม id = box_ ที่ทุก .item

// const items = document.querySelectorAll('.item')
// items.forEach( (el,i)=>{
//     el.setAttribute('id', `box${i+1}`)
// } )

// ctn.className = 'container wrapper'

// let p = document.createElement('p')
// p.setAttribute('class', 'para1')
// p.textContent = 'Codecamp 16'

// console.log(p)
// ctn.before(p)
// ctn.prepend(p)
// ctn.append(p)
// ctn.after(p)
// ctn.children[3].replaceWith(p)

// setTimeout( ()=>{ ctn.before(p.cloneNode(true))}, 2000 )

const item = document.querySelector('.item')
const ctn = document.querySelector('.container')


// setTimeout( ()=>{ ctn.children[2].remove() }, 1000 )

const ctn2 = ctn.cloneNode(true)
console.log(ctn2.outerHTML)

ctn.after(ctn2)

// ctn.style.color = 'red'
// ctn.style.background = 'blue'

// setTimeout( ()=>{ ctn.style.removeProperty('background') }, 2000 )

ctn.style.cssText=`
    color : red;
    border : 1px dashed lime;
`

