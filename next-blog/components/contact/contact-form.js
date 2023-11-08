import React, {useRef, useState} from 'react';
import classes from './contact-form.module.css';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  function sendMessageHandler(event) {
    event.preventDefault();

    try {
      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {}
  }
  return (
    <section className={classes.contact}>
      <h1>how can I help you?</h1>
      <form action='' className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>your email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='email'>your name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'> your message </label>
          <textarea
            name='message'
            id='message'
            rows='5'
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
