function Contact() {
  return (
    <div className="divForm">
      <form className="form">
        <p>
          If you would like to get into contact with me, you can submit the
          below form or email me at: katieninksmith@gmail.com
        </p>
        <label>Name:</label>
        <input type="text" id="name" name="name" required />
        <label>Email:</label>
        <input type="email" id="email" name="email" required />
        <label>Message:</label>
        <textarea id="message" name="message" required />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
