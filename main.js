window.onload = () => {
    location.hash = ''
}

window.onbeforeunload = () => {
    window.scrollTo(0, 0)
}
