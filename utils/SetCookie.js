export default (name, value, years) => {
    let expires = ""
    if (value) {
      let date = new Date()
      date.setTime(date.getTime() + years * 365 * 24 * 60 * 60 * 1000)
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
  }