import React from 'react'
import './styles/Screen1.scss';
import Typical from 'react-typical'
import { TypeAnimation } from 'react-type-animation';

const Screen1 = () => {
    
  return (

    <div className='screen1'>

    <h1 style = {{paddingTop: 350, fontSize: '4em', paddingLeft: 25}}> Hi, I'm Maksym Prysyazhny</h1>
        
        <h2 style = {{paddingTop: 15, fontSize: '3em', paddingLeft: 25}}>

            <p>I'm a {' '}

                <Typical
                            
                    loop = {Infinity}
                    wrapper = 'b'
                    steps = {[

                    1000,
                    'developer',
                    6000,
                    'innovator',
                    3000,
                    'builder',
                    3000
                    
                    ]}
                
                    />

            </p>
            
        </h2>

        <h3 style = {{paddingTop: 15, fontSize: '1.5em', paddingLeft: 25}}>

        <TypeAnimation

            sequence={[

            3000, 
            'Welcome To My Portfolio.', 
            
            ]}

            wrapper="div"
            cursor={false}
            repeat={Infinity}

            />

        </h3>

    </div>

  )
}

export default Screen1