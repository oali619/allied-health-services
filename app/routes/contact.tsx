export default function Contact() {
    return (
        <section id="contact">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Contact</h2>
                <p>Get in Touch</p>
                <p>We’re here to help. Contact us today!</p>
                <div className="contact-form">
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="email" id="email" placeholder="Email"/>
                    <input type="tel" id="phone" placeholder="Phone"/>
                    <textarea id="message" placeholder="Message"></textarea>
                    {/* <button onClick="submitContactForm()">Submit</button> */}
                </div>
        </section>
    );
}