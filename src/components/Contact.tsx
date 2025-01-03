function Contact() {
  return (
    <div className="divForm">
      <form className="form">
        <div>
          <p>
            If you would like to get into contact with me, you can submit the
            below form or email me at: katieninksmith@gmail.com
          </p>
        </div>
        <div className="contactfrom">
          <label>Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label>Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label>Message:</label>
          <textarea id="message" name="message" required />
          <br />
          <input id="submit" type="submit" value="Submit" />
          {/* <br />
          <p className="tear">Email: katieninksmith@gmail.com</p>
          <p className="tear">Email: katieninksmith@gmail.com</p>
          <p className="tear">Email: katieninksmith@gmail.com</p> */}
        </div>
      </form>
    </div>
  );
}

export default Contact;
