import React, { useState } from "react"

const emailReg = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    companyName: "",
    msg: "",
  })

  const [errors, setErrors] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email.match(emailReg) || formData.msg.length <= 10) {
      let { value } = e.target
      switch (value) {
        case "email":
          break

        default:
          break
      }
      if (!formData.email.match(emailReg)) {
        setErrors({
          ...errors,
          email: "Please Enter A Valid email",
        })
      } else if (formData.msg.length <= 40)
        setErrors({
          ...errors,
          msg: "Please enter Atleast 40 chars",
        })
    } else {
      alert("Submitted")
    }
    console.log(errors)
  }
  return (
    <section className="contact-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Brief Us.</h1>
        <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="Name"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className={
              errors && errors.email ? "error form-control" : "form-control"
            }
            id="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email@example.com"
          />
          {errors && errors.email && (
            <small className="error">{errors.email}</small>
          )}
          <small className="form-text">
            We'll never share your email anywhere
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company/Organisation (*Optional):</label>
          <input
            name="companyName"
            type="text"
            className="form-control"
            id="company"
            onChange={(e) => handleChange(e)}
            placeholder="Company/Organisation"
          />
        </div>
        <div className="form-group">
          <label htmlFor="msg">Message:</label>
          <textarea
            name="msg"
            className="form-control"
            id="msg"
            onChange={(e) => handleChange(e)}
            placeholder="Your Message..."
          />
        </div>
        {errors && <p>There are errors in your Form</p>}
        <div className="btns">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
