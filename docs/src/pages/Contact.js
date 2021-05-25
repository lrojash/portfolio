import React, { useState } from 'react'
import '../styles/contact.css'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import axios from 'axios'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name,
            email,
            subject,
            message,
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5000/send',
            data: formData
        }).then((response) => {
            if (response.data === 'Success') {
                alert('Message Sent');
                resetForm();
            } else {
                alert('Message failed to send');
            }
        })

    }

    return (
        <div id="contact" className="section" style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center' }}>
            <div className="container" style={{marginTop: '15vh'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h1 className="title">Contact</h1>
                            <form id="contact-form" onSubmit={onSubmit} method="POST">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input placeholder="Name" id="name" type="text" className="form-control" required value={name} onChange={e => setName(e.target.value)} />
                                        </div>
                                        <div className="col-md-6">
                                            <input placeholder="Email" id="email" type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Subject" id="subject" type="text" className="form-control" required value={subject} onChange={e => setSubject(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" id="message" className="form-control" rows="5" required value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                            <div className="contact-links">
                                <button onClick={() => window.open('https://github.com/lrojash')} style={{ background: 'rgba(0,0,0,0)', border: 'none' }}>
                                    <GithubOutlined style={{ color: 'rgb(27, 210, 33)', fontSize: '5em' }} />

                                </button>
                                <button onClick={() => window.open('https://www.linkedin.com/in/luisrojashuerta/')} style={{ background: 'rgba(0,0,0,0)', border: 'none' }}>
                                    <LinkedinOutlined style={{ color: 'rgba(27, 210, 33)', fontSize: '5em' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact