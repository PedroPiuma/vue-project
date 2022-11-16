const getFormData = (event, deadline) => {
  const formData = new FormData(event.target)
  const response = {
    email: formData.get(`email-${deadline}`).trim(),
    password: formData.get(`password-${deadline}`).trim(),
  }
  if (deadline === "signup") {
    response.name = formData.get("name-signup").trim()
    response.lastname = formData.get("lastname-signup").trim()
    response.cpf = formData.get("cpf").trim()

    if (response.cpf.length === 14) console.log(response.cpf.length)
  }
  return response
}

export default getFormData
