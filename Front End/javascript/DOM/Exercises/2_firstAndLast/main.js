function getFormvalue() {
    const first = document.querySelector('[name=fname]').getAttribute("value");
    const last = document.querySelector('[name=lname]').getAttribute("value");
    console.log(first, last)
}