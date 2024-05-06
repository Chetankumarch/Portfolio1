'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';

interface EmailJSResponse {
    status: number;
    text: string;
}

function CombinedComponent() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const serviceID = 'service_vvzbaka';
        const templateID = 'template_t12jr9h';
        const publicKey = 'df5vKoNLOFh1E9TEH';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response: EmailJSResponse) => {
                console.log('Email successfully sent!', response);
                alert('Message successfully sent!');
                setFormData({
                    fullName: '',
                    email: '',
                    message: ''
                });
            })
            .catch((err: Error) => {
                console.error('Failed to send email. Error: ', err);
                alert('Failed to send message.');
            });
    };

    const words = [
        { text: "Built", },
        { text: "with", },
        { text: "love", },
        { text: "by", },
        { text: "Chetan Kumar.", className: "text-blue-500 dark:text-blue-500", },
    ];

    return (
        <div id="contact" className="top-16 relative flex flex-col items-center justify-center h-[40rem]">
          <h1 className="text-4xl pb-6 pt-28 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Get In Touch</h1>
            <div className="flex justify-center items-center w-full h-screen bg-black px-4">
            
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black shadow-md rounded px-8 pt-5 pb-5 mb-2">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-white text-lg font-bold mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-lg font-bold mb-2">
                        E-Mail Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-white text-lg font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
                
                <TypewriterEffectSmooth words={words} />
                <p>© 2024 Chetan Kumar. All rights reserved.</p>
          
      </div>
    );
}

export default CombinedComponent;
