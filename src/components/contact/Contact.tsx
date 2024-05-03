import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <a href="https://www.linkedin.com/in/benjamin-vandamme/">
        <img src="/assets/icons/linkedin.png" alt="message-icon" />
      </a>
      <a href="https://github.com/benjaminvandammeholberton">
        <img src="/assets/icons/github.png" alt="message-icon" />
      </a>
      <a href="tel:+33769037208">
        <img src="/assets/icons/phone.png" alt="message-icon" />
      </a>
      <a href="mailto:benjamin.vandamme@me.com">
        <img src="/assets/icons/email.png" alt="message-icon" />
      </a>
    </div>
  );
};

export default Contact;
