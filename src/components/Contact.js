import React, { useRef, useState }from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './styles/Contact.scss'
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export const Contact = () => {

  const form = useRef();
 
    const [show, setShow] = useState(false);
    const [sendDisable, setSendDisable] = useState(false);

    const toggleSetShow = () => {

      setShow(current => !current);
    };

    const toggleSetSendDisable= () => {

      setSendDisable(current => !current);
    };

    const reEnable= () => {

      toggleSetShow();
      toggleSetSendDisable();
    };

    const sendEmail = (e) => {

      toggleSetShow();
      toggleSetSendDisable();

      setTimeout( function() { reEnable(); }, 5000);

    e.preventDefault();

    emailjs.sendForm('service_lxbg4vr', 'template_hyevtdm', form.current, 'jjoLZ9lrnhVxMsRZB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>

    <Navbar />

      {
         show?<Alert>Your Message Was Sent!</Alert>:null
      }

      <Stack paddingRight = {1} direction="row" justifyContent="center" alignItems="center" paddingTop = {14}>

      <Box sx={{

        width: 550,
        height: 650,
        backgroundColor: '#FAF9F6',
        border: "2px solid black",
        
      }}>

        <Stack  direction="row" justifyContent="center" alignItems="center" paddingTop = {8} paddingLeft = {2.5}>
            
        <h1><b>Contact Me!</b></h1>
            
        </Stack>

      <form ref={form} onSubmit={sendEmail} direction="row" >

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} paddingTop = {8} paddingRight = {3}>

        <label> <b>Name:</b> </label>
        <TextField  paddingLeft={10} id="outlined-basic"  variant="outlined" type="text" name="user_name" required size="lg"/>

        </Stack >

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} paddingTop = {5} paddingRight = {3}>

        <label > <b>Email:</b> </label>
        <TextField id="outlined-basic" variant="outlined" type="email" name="user_email" required size="lg"/>
        
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} paddingTop = {5} paddingRight = {6} >

        <label> <b>Message:</b></label>

        <Textarea
          
          minRows={5}
          style={{ width: 300}}
          required
          variant="outlined"
          name="message" 
          
        />

        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center" paddingTop = {10} paddingLeft = {4}>

        <Button type="submit"  color =  'primary' disabled = {sendDisable} value="Send" variant="contained" endIcon={<SendIcon />} style={{width: '125px', height: '50px'}} >
          Send 
        </Button>

        </Stack>

      </form>

      </Box>

      </Stack>

    </div>
  );
};

export default Contact;