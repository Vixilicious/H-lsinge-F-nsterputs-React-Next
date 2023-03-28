import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <div className='contact-form'>
        <a href='mailto:victoriaaskander@gmail.com'>Maila här</a>
      </div>
    </div>
  );
}
