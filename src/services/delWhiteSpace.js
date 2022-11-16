const delWhiteSpace = (event) => {
  const text = event.target.value
  if (!text.length) return
  if (text.indexOf(" ") !== -1) event.target.value = text.replaceAll(" ", "")
}

export default delWhiteSpace
