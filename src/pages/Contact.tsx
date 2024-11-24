import form_bg from "../data/pictures/contact/form_bg.png"

export default function Contact() {

    // function handleSubmit() {

    // }

    return (
        <section className="contact-form-section relative text-mochi-white center">
            <img src={form_bg} className="block rounded-none"/>
            <form className="absolute z-10 top-1/4 w-1/2" 
            // onSubmit={handleSubmit} method="POST"
            >
                <h1 className="mb-10">napisz do nas!</h1>
                <div className="flex place-content-between">
                    <input name="clients-name" type="text" placeholder="Imię i nazwisko..." className="form-input mr-2 h-10"></input>
                    <input name="email" type="email" placeholder="E-mail..." className="form-input ml-2 h-10"></input>
                </div>
                <div className="mt-5">
                    <textarea name="message-content" placeholder="Wiadomość..."  className="form-input h-32"></textarea>
                </div>
                <div>
                    <button type="submit" className="mochi-button">Wyślij</button>
                </div>
            </form>
        </section>
    )
}