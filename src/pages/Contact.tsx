import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import form_bg from "../data/pictures/contact/form_bg.png";

export default function Contact() {
    const [clientsName, setClientsName] = useState("");
    const [clientsEmail, setClientsEmail] = useState("");
    const [clientsMessage, setClientsMessage] = useState("");

    const [isChecked, setIsChecked] = useState(null)

    function handleSubmit(e: any) {
        e.preventDefault();

        const serviceId = "service_q2xrub8";
        const templateId = "template_k1uhzsr";
        const publicKey = "1leC_MEIw82M7QWaH";

        const emailData = {
            from_name: clientsName,
            from_email: clientsEmail,
            to_name: "mochi",
            message: clientsMessage
        }

        emailjs.send(serviceId, templateId, emailData, publicKey)
            .then((res) => {
                console.log('Email sent!', res)
                alert("Dziękujemy za wiadomość, postaramy się odpowiedzieć jak najszybciej!");
                setClientsName("")
                setClientsEmail("")
                setClientsMessage("")
                setIsChecked(null)
            })
            .catch((err) => {
                console.error('Error occured:', {err})
            })
    }

    return (
        <section className="contact-form-section relative text-mochi-white center">
            <img src={form_bg}
            alt="Visualization of a modern interior design project created by mochi, background for the contact form." 
            className="block rounded-none"/>
            <form className="absolute z-10 top-1/4 w-1/2" onSubmit={handleSubmit}>
                <h1 className="mb-10">napisz do nas!</h1>
                <div className="flex-between">
                    <label className="mr-5 text-left w-1/2">
                        <input
                            className="form-input h-10"
                            name="clientsName" 
                            type="text" 
                            placeholder="Imię i nazwisko..." 
                            value={clientsName}
                            onChange={(e) => setClientsName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="text-left w-1/2">
                        <input
                            className="form-input h-10"
                            name="clientsEmail"
                            type="email" 
                            placeholder="E-mail..."
                            value={clientsEmail}
                            onChange={(e) => setClientsEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="mt-5 text-left">
                    <textarea 
                        name="clientsMessage" 
                        placeholder="Wiadomość... (conajmniej 50 znaków)" 
                        className="form-input h-32" 
                        value={clientsMessage} 
                        onChange={(e) => setClientsMessage(e.target.value)}
                        required
                        minLength={50}
                    />
                </div>
                <ReCAPTCHA 
                    sitekey="6Ld6rasqAAAAALGaQ_T5Ro2TosAwQ3ClwuFlPbN3"
                    onChange={(val: any) => setIsChecked(val)}
                />
                <div>
                    <button disabled={!isChecked} type="submit" className="mochi-button">Wyślij</button>
                </div>
            </form>
        </section>
    )
}