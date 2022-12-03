import React from 'react'
import './styles/Screen2.scss';
import 'react-circular-progressbar/dist/styles.css';
import SpinningCube from './SpinningCube';

const Screen2 = () => {
    
  return (

    <div>

      <div className='screen2'>

      <h1 style = {{paddingTop: 25, fontSize: '1em', paddingLeft: 45, color: '#7ce284'}}>{'<div>'}</h1>

      <h1 style = {{paddingTop: 275, fontSize: '1em', paddingLeft: 70, color: '#7ce284'}}>{'<h1>'}</h1>

      <h1 style = {{paddingTop: 15, fontSize: '5em', paddingLeft: 70, color: '#ff7c74'}}>About Me</h1>

      <h1 style = {{paddingTop: 15, fontSize: '1em', paddingLeft: 70, color: '#7ce284' }}>{'</h1>'}</h1>


      <p style = {{paddingTop: 50, fontSize: '1.5em', paddingLeft: 70, textAlign: 'left', width: '1000px', color: '#80c4fc'}}>
        
        I am a developer located in Schaumburg, Illinois who creates mobile apps and interfaces using multiple frameworks and languages including but not limited to:
        Java, Android Studio, Javascript, and React. I am looking for a role in an IT industry. Im creative and curious, and I enjoy 
        what I do. I am also fluent in Ukrainian and I can be a great help for connecting even more people to a platform.
         I sometimes struggle working in large teams because I cant deploy my ideas exactly how I envisioned them. However, 
        this is a skill I can improve with time and as Helmut Schmidt said "The biggest room in the world is the room for improvement".
        
        </p>

      <h1 style = {{paddingTop: 225, fontSize: '1em', paddingLeft: 45, color: '#7ce284'}}>{'</div>'}</h1>

      <SpinningCube></SpinningCube>

      </div>

    </div>

  )
}

export default Screen2