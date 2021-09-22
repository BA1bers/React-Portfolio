import React from 'react'

const Contact = () => {
    const [header] = React.useState({ subHeader: "Contact", text: "Want to get in contact with me? Fill out this form and I will get back to you as soon as possible" });
    return (
        <div className="contactForm">
            <div className="container">
                <div className="contactTop">
                    <h1 className="contactTopHeader">{header.subHeader}</h1>
                    <p className="contactTopText">{header.text}</p>
                </div>
                <form className="contactSection">
                    <label>Name: </label>
                    <input type='text' name='name' />
                    <label>Email: </label>
                    <input type='email' name='userEmail' />
                    <label>Message: </label>
                    <textarea name='message' rows='5' />
                    <button data-testid="button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
