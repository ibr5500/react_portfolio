import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillEmojiSmileFill, BsFillEmojiNeutralFill } from 'react-icons/bs';

const Contact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fname: '',
    email: '',
    message: '',
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if (data.fname && data.email && data.message) {
      fetch('https://formspree.io/f/mqknlobw', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json()).catch((error) => console.log(error)); // eslint-disable-line
    }

    const capitalize = ([first = '', ...rest]) => [first.toUpperCase(), ...rest].join('');

    alert(`Your message sent succsufully, Thank you ${capitalize(data.fname)} !!`); // eslint-disable-line

    setTimeout(() => {
      navigate('/');
    }, 2000);

    setData({
      fname: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-container text-center">
      <form onSubmit={handelSubmit} className=" form gap-3 d-flex flex-column" action="https://formspree.io/f/mqknlobw " method="post">
        <h2>Get in Touch</h2>
        <div className="col-auto">
          <label htmlFor="fname" className="visually-idden d-flex flex-row">
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="Jhon Doe"
              maxLength="30"
              value={data.fname}
              onChange={(e) => setData({ ...data, fname: e.target.value })}
              required
            />
          </label>
        </div>
        <div className="col-auto">
          <label htmlFor="email" className="visually-idden d-flex flex-row">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="jhon@example.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </label>
        </div>
        <div className="col-auto">
          <label htmlFor="message" className="visually-idden d-flex flex-row">
            <textarea
              type="text"
              rows={8}
              className="form-control"
              id="message"
              name="message"
              placeholder="Write your message here"
              maxLength="500"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              required
            />
          </label>
        </div>
        <div className="col-auto">
          <button type="submit" className={(data.fname && data.email && data.message) ? 'btn form-btn mb-3' : 'btn form-btn-err mb-3'}>
            Send
            {' '}
            {(data.fname && data.email && data.message)
              ? <BsFillEmojiSmileFill className="form-icon" /> : <BsFillEmojiNeutralFill className="form-icon" />}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
