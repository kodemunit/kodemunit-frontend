import React from "react"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
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
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Name:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
          />
          {/* <small className="form-text">
                        We'll never share your email anywhere
                    </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="company">Company/Organisation (*Optional):</label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Company/Organisation"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Name">Message:</label>
          <textarea
            className="form-control"
            id="Name"
            placeholder="Your Message..."
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
