import React from 'react'
import { faAndroid, faAppStoreIos, faJava, faGithub, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/SpinningCube.scss'

const SpinningCube = () => {
    
  return (
    <div className="container about-page">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGithub} color="#171515" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAppStoreIos} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#5283a2" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default SpinningCube