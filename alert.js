// alert('exam is near')
const examComing = () => {
    alert('exam is near.open the book')
}
const askPicnic = () => {
    const response = confirm('will you go with us');
    console.log(response);
    if (response === true) {
        alert('send me the fee');
    }
    else {
        console.log('go to hell')
    }
}
const askAnything = () => {
    const name = prompt('enter your name');
    if (name) {
        console.log(name);
    }
    else {
        alert('please fill the field')
    }
}