import React, { useEffect } from 'react'
import './style/Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const contactList = [
        { type: "Email", value: "yourname@example.com" },
        { type: "Phone", value: "010-1234-5678" },
        { type: "GitHub", value: "github.com/yourname" }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            once: false,
        })
    })

    return (
        <section className='Contact'>
            <div className="t-wrap">
                <h2 data-aos='fade-up'>Contact</h2>
                <p data-aos = 'fade-up' data-aos-delay = "100">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, earum.
                </p>
                <ul className="contact-list">
                    {contactList.map((Contact, i) => (
                        <li key={i} data-aos='fade-up' data-aos-delay={i * 100}>
                            <sapn>{Contact.type}</sapn>
                            <sapn>{Contact.value}</sapn>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Contact