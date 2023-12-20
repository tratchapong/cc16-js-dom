let link = document.querySelectorAll('a')

console.log(link)

const hdlClick = (e) => {
    e.preventDefault()
    console.log(e.target.href)
    if(e.target.href.includes('example')) {
        alert('stop..')
        return
    }
    location.assign(e.target.href)

}

link.forEach( (el)=>{
    el.addEventListener('click', hdlClick)
} )