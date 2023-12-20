// ********* Event Bubbling

// const item03 = document.querySelector('.item03')

// const hdlClick = (evt) => {
//     console.log('Item Click...')
//     console.log(evt.target)
// }
// const bodyClick = () => {
//     console.log('Body Click...')
// }

// item03.addEventListener('click', hdlClick)

// document.body.addEventListener('click', bodyClick)

// ****** Event Delegation

const ctn = document.querySelector('.container')

const hdlItem1Click = () => console.log('Item01 Click')
const hdlItem2Click = () => console.log('Item02 Click')

const hdlClick = (e)=>{
    // console.log(e.target.className)
    // if (e.target.className === 'item01') {
    //     hdlItem1Click()
    // }
    // if (e.target.className === 'item02') {
    //     hdlItem2Click()
    // }
    switch(e.target.className) {
        case 'item01' : 
            hdlItem1Click()
            break
        case 'item02' : 
            hdlItem2Click()
            break
        default :
            console.log('No handler')
    }
}

ctn.addEventListener('click', hdlClick)
const item1 = document.querySelector('.item01')

setTimeout( ()=>{ item1.click() }, 2000)

// item01.addEventListener('click', hdlItem1Clcik)
// item02.addEventListener('click', hdlItem2Clcik)
// item03.addEventListener('click', hdlItem3Clcik)
// item04.addEventListener('click', hdlItem4Clcik)