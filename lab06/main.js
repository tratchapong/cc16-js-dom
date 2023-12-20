const products = [
    {
      id: 1,
      name: "MacBook",
      price: 1400,
      image: "https://picsum.photos/id/180/800"
    },
    {
      id: 2,
      name: "Old Car",
      price: 2400,
      image: "https://picsum.photos/id/111/800"
    },
    {
      id: 3,
      name: "Shoes",
      price: 1000,
      image: "https://picsum.photos/id/21/800"
    },
    {
      id: 4,
      name: "Castle",
      price: 10000,
      image: "https://picsum.photos/id/1040/800"
    },
    {
      id: 5,
      name: "Lychee",
      price: 500,
      image: "https://picsum.photos/id/1080/800"
    },
    {
      id: 6,
      name: "Skate Board",
      price: 3500,
      image: "https://picsum.photos/id/157/800"
    },
    {
      id: 7,
      name: "Alarm Clock",
      price: 1500,
      image: "https://picsum.photos/id/175/800"
    },
    {
      id: 8,
      name: "Book",
      price: 800,
      image: "https://picsum.photos/id/24/800"
    }
  ];

const nav = document.querySelector('nav')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const main = document.querySelector('main')


const hdlOpen = () => {
    console.log('Open')
    nav.style.width = '250px'
    main.style.marginLeft = '250px'
}

const hdlClose = () => {
    console.log('Close')
    nav.style.width = '0px'
    main.style.marginLeft = '0px'
}

openBtn.addEventListener('click', hdlOpen)
closeBtn.addEventListener('click', hdlClose)

// list products name
const ul = document.querySelector('ul')

products.forEach( el => {
    let li = document.createElement('li')
    li.textContent = `${el.name} = ${el.price}`
    ul.append(li)
})



