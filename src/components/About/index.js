import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import javaLogo from '../../assets/images/logo1.png'
import pythonLogo from '../../assets/images/logo2.png'
import flutterLogo from '../../assets/images/logo4.png'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Now i'm studying in the 4th year at KMUTNB. This is my last term before i'm going to internship at SCB.
                </p>
                <p align="LEFT">
                    The challenges of this term is have to study and find a company to internship and responsible for the thesis. My thesis is Mobile Application Dance Practice using Deep Learning call it "Let's Dance". It's social media like TikTok and have function to predicted dance style and give a similarity score of dance style to dancer.
                </p>
                <p>
                    I prefer to make everyday life be happy and enjoy facing new challenges. And i want to continuos self improvement mindset in everyday. And always keep telling myself that "This time is a opportunities to self improvement". And my job in the future i want to be Software Engineer. And then i want to start my own business.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        {/* <FontAwesomeIcon icon={fa} color="#DD0031" /> */}
                        <img src={javaLogo} alt='javaLogo' width='100' heigh='100'/>
                    </div>
                    <div className="face2">
                        {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
                        <img src={pythonLogo} alt='pythonLogo' width='200' heigh='200'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
                        <img src={flutterLogo} alt='flutterLogo' width='150' heigh='150'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>

        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About