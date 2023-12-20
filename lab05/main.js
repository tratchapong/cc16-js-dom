const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const modal = document.querySelector('#modal')

const hdlShow = () => {
    modal.showModal()
}

const hdlClose = () => {
    modal.close()
}

btnOpen.addEventListener('click',hdlShow )
btnClose.addEventListener('click', hdlClose)