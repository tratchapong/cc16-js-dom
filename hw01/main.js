
const root = document.querySelector("#root");
function makeElement(tag, attr_n, attr_v, content) {
    const output = document.createElement(tag);
    output.setAttribute(attr_n, attr_v);
    output.textContent = content;
    return output;
  }

let counterAmount = 0
const btnAdd = makeElement('button', 'class', 'btn-add', 'Add Counter')
root.before(btnAdd)

const addCounter = () => {
    counterAmount += 1
    if( counterAmount > 3) {
        btnAdd.removeEventListener('click', addCounter)
        return
    }
    root.append(Counter())
}

btnAdd.addEventListener('click', addCounter)

const showNumber = document.querySelector('.show-number')
let sum = 0

const updateSum = (n) => {
    sum += n
    showNumber.textContent = `Sum = ${sum}`
}

function Counter() {
  const counter = makeElement("div", "class", "counter", "");
  const btnInc = makeElement("button", "class", "btn-inc", "+");
  const number = makeElement("h3", "class", "number", "0");
  const btnDec = makeElement("button", "class", "btn-dec", "-");
  const btnClr = makeElement("button", "class", "btn-clr", "C");
  const btnDel = makeElement("button", "class", "btn-del", "X")

  counter.append(btnInc);
  counter.append(number);
  counter.append(btnDec);
  counter.append(btnClr);
  counter.append(btnDel);

  let countNum = 0;

  const updateCounter = (n) => {
    if (countNum + n < 0) {
      return;
    }
    countNum += n;
    number.textContent = countNum;
    updateSum(n)
  }

  const deleteCounter = () => {
    updateSum(-countNum)
    // updateCounter(-countNum)
    // btnDel.parentElement.remove()
    counter.remove()

  }

//   btnInc.onclick = () => updateCounter(1);
//   btnDec.onclick = () => updateCounter(-1);
//   btnClr.onclick = () => updateCounter(-countNum);
//   btnDel.onclick = () => deleteCounter()

btnInc.addEventListener('click', () => { updateCounter(1)} )
btnDec.addEventListener('click', () => { updateCounter(-1)} )
btnClr.addEventListener('click', () => { updateCounter(-countNum)} )
btnDel.addEventListener('click',  deleteCounter )

  return counter;
}


