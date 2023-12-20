// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const btnInc = document.querySelector(".btn-inc")
const btnDec = document.querySelector(".btn-dec")
const btnClr = document.querySelector(".btn-clr")
const number = document.querySelector(".number")

let countNum=0

function updateCounter(n) {
    if(countNum+n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}

btnInc.onclick = () =>  updateCounter(1)
btnDec.onclick = () =>  updateCounter(-1)
btnClr.onclick = () =>  updateCounter(-countNum)





