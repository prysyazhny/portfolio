import React from 'react'
import './styles/Screen3.scss';
import { Stack } from 'react-bootstrap';
import CircleFlag from './assets/circleFlag.png';
import androidStudioLogo from './assets/androidStudio.png';
import javaLogo from './assets/java.jpg';
import reactLogo from './assets/react.png';
import javaScriptLogo from './assets/javascript.png';
import resumeDownloadLogo from './assets/resumeDownload.png';
import resume from './files/resume.pdf';

const Screen3 = () => {

  const downloadResume = () => {
    var link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));

  }

  return (
    <div className='screen3'>

        <img className='zoom' src={resumeDownloadLogo} onClick = {downloadResume} style = {{height: 60, width: 60, position: 'absolute', paddingTop: 40, paddingLeft: 40}}></img>

        <h1 style = {{color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 150, fontSize: 50}}><b>My Skills</b></h1>
    
        <Stack style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 200}}> 
          <img style = {{height: 200, width: 200}} src={androidStudioLogo}></img>
          <img style = {{height: 200, width: 200, paddingLeft: 150}} src={javaLogo}></img>
          <img style = {{height: 200, width: 200, paddingLeft: 150}} src={javaScriptLogo}></img>
          <img style = {{height: 200, width: 230, paddingLeft: 150}} src={reactLogo}></img>
          <img style = {{height: 200, width: 200, paddingLeft: 150}} src={CircleFlag}></img>
        </Stack>

        <Stack style = {{display: 'flex', paddingTop: 35}}> 
        <h1 style = {{color: 'white', paddingLeft: 150}}>Android Studio</h1>
          <h1 style = {{color: 'white',paddingLeft: 235}} >Java</h1>
          <h1 style = {{color: 'white',paddingLeft: 270}} >JavaScript</h1>
          <h1 style = {{color: 'white',paddingLeft: 260}} >ReactJS</h1>
          <h1 style = {{color: 'white',paddingLeft: 175}} >Speak English & Ukrainian</h1>
        </Stack>

        <Stack style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
          
          <hr width = "1580" ></hr>

        </Stack>
        
        <Stack style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 75}}> 
          <h1 style = {{color: 'white'}}>Education: Conant High School</h1>
          <h1 style = {{color: 'white', paddingLeft: 200}} >Current Employment: Unemployed</h1>
          <h1 style = {{color: 'white', paddingLeft: 200}} >Location: Schaumburg, Illinois</h1>

        </Stack>
              
    </div>
  )
}

export default Screen3