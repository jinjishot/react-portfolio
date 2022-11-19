import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    // const sendEmail = (e) => {
    //     e.preventDefault()

    //     emailjs
    //     .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
    //     .then(
    //         () => {
    //           alert('Message successfully sent!')
    //           window.location.reload(false)
    //         },
    //         () => {
    //           alert('Failed to send the message, please try again')
    //         }
    //       )
    // }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in full-time job opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    {/* ref={form} onSubmit={sendEmail} */}
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jinjishot Arwootsopapuri (Jay)
                    <br />
                    Email : jinjishot@gmail.com
                    <br />
                    Unicorn Park, 90, Pholyothin 35
                    <br />
                    Chatujak,  Bangkok, 10900 <br />
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[13.8316231, 100.5651916]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[13.8316231, 100.5651916]}>
                            <Popup>Jinjishot lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact