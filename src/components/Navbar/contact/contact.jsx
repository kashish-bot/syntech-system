import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import "./contact.css";

export default function Contact() {
    const form = useRef();
const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Request sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send request.");
    })
    .finally(() => {
      setLoading(false);
    });
};
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-left">
          <span className="section-label">CONTACT US</span>
          <h2>Get IT Support for Your Business</h2>
          <p>
            Have a requirement for laptop repair, desktop maintenance, AMC plans,
            or hardware supply? Share your details and our team will contact you shortly.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <img src="/call_icon.png" alt="Phone" />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 8802814999</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src="/mail_icon.png" alt="Email" />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>syntechsystems.info@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <img src="/location_icon.png" alt="Location" />
              </div>
              <div>
                <h4>Service Area</h4>
                <p>Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="text" name="company_name" placeholder="Company Name" />
          </div>

          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
          </div>

          <select name="service_required" required>
            <option value="">Select Service</option>
            <option value= "Laptop Repair">Laptop Repair</option>
            <option value= "Desktop Repair">Desktop Repair</option>
            <option value= "Printer Repair">Printer Repair</option>
            <option value= "Hardware Supply">Hardware Supply</option>
            <option value= "AMC Plan">AMC Plan</option>
            <option value= "Emergency IT Support">Emergency IT Support</option>
          </select>

          <textarea name="message" placeholder="Tell us your requirement" required></textarea>

          <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit Request"}</button>
        </form>

      </div>
    </section>
  );
}