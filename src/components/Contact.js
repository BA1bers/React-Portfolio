import React from 'react'
import Emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        Emailjs.sendForm(
            'service_x6pwhdj',
            'template_5lmde6d',
            e.target,
            'user_0fMXfpXKsophHanLdDpRJ'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    const Send = () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Emailjs.value)) {
            alert("Your form has been sent")
            return (true)
        } else {
            alert("You have entered an invalid email address")
            return (false)
        }
    }
    const [header] = React.useState({ subHeader: "Contact", text: "Want to get in contact with me? You can reach me at brent.albers@yahoo.com or by filling out this form below" });
    return (
        <div className="contactForm" id="contactForm">
            <div className="container">
                <div className="contactTop">
                    <h1 className="contactTopHeader">{header.subHeader}</h1>
                    <p className="contactTopText">{header.text}</p>
                </div>
                <form className="contactSection" onSubmit={sendEmail}>
                    <label>Name: </label>
                    <input type='text' name='name' />
                    <label>Email: </label>
                    <input type='email' name='userEmail' />
                    <label>Message: </label>
                    <textarea name='message' rows='5' />
                    <button data-testid="button" type="submit" onClick={Send}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
