import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import emailValidation from '../../../utils/helpers';

const ContactMe = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fullName) {
      setErrorMessage('Please include your first and name in this message.');
      return;
    }
    if (!emailValidation(email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message) {
      setErrorMessage('Please include a message in your submission.');
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setErrorMessage('Your information has been submitted, thank you for contacting me!');
    setFullName('');
    setMessage('');
    setEmail('');
  };

  const styles = {
    contactBox: {
      maxWidth: '100%'
    },
    formFieldDiv: {
      padding: '3px 0px'
    },
    formFieldText: {
      fontWeight: 'bold'
    },
    formFieldInput: {
      maxWidth: '500px',
      minWidth: '50%'
    },
    formFieldInputMessage: {
      maxWidth: '500px',
      minWidth: '50%',
      height: '150px',
    }
  }

  return (
    <Container maxWidth="full" disableGutters={true}>
      <Box sx={{
        textAlign: 'left',
        padding: '10px 10%',
      }}>
        <h2>Contact Me</h2>
        <div style={styles.contactBox}>
          <form className="form">
            <div style={styles.formFieldDiv}>
              <div style={styles.formFieldText}>Name:</div>
              <input
                style={styles.formFieldInput}
                value={fullName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="First and Last Name"
              />
            </div>
            <div style={styles.formFieldDiv}>
              <div style={styles.formFieldText}>Email Address:</div>
              <input
                style={styles.formFieldInput}
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div style={styles.formFieldDiv}>
              <div style={styles.formFieldText}>Message:</div>
              <textarea
                style={styles.formFieldInputMessage}
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="Message for Garrett"
              />
            </div>
            <Button variant="contained" endIcon={<SendIcon />} color="success" type="button" onClick={handleFormSubmit}>Submit</Button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default ContactMe;
