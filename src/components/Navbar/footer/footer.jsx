import "./footer.css";
import logo from "/whitelogo.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-cta">
        <div className="footer-cta-left">
          <div className="footer-cta-icon"><img src="white_quick.png" /></div>
          <div>
            <h2>LET’S WORK TOGETHER</h2>
            <p>Need IT support for your business? Get in touch with our experts today.</p>
          </div>
        </div>
        <div className="footer-cta-buttons">
          <a href="tel:+918802814999" className="cta-btn primary">
            <img src="call_icon.png" alt="" />
            <span>Call Now</span>
          </a>

          <a href="mailto:syntechsystems.info@gmail.com?subject=Request for IT Support Quotation" className="cta-btn">
            <span>➤</span>
            <span>Request a Quote</span>
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Syntech Systems" />
          <p>
            Syntech Systems is your trusted partner for IT hardware, repair,
            AMC and maintenance solutions for businesses.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/YOUR_LINKEDIN_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedIn">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.linkedin.com/company/YOUR_LINKEDIN_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram">
              <img src="instagram.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <p>Laptop Repair</p>
          <p>Desktop Repair</p>
          <p>Printer Repair</p>
          <p>Hardware Supply</p>
          <p>Annual Maintenance Contract</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p id="home">Home</p>
          <p id="services">Services</p>
          <p id="hardware">Hardware Products</p>
          <p id="plan">AMC Plans</p>
          <p id="whyUsb">Why US ?</p>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p className="footer_icon"> <img src="call_icon.png"/> +91 8802814999</p>
          <p className="footer_icon"> <img src="mail_icon.png" /> syntechsystems.info@gmail.com</p>
          <p className="footer_icon"> <img src="location_icon.png" /> Delhi NCR, India</p>
          <p className="footer_icon"> <img src="time.png" /> Mon - Sat: 09:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="footer-map">
        <iframe
          title="Syntech Systems Location"
          src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d218.89221587900707!2d77.1350798!3d28.6215054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030367d22381%3A0x3b9b528ec60d6221!2sSyntech%20systems!5e0!3m2!1sen!2sin!4v1780806817612!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Syntech Systems. All Rights Reserved.</p>
        {/* <p>Privacy Policy | Terms & Conditions</p> */}
      </div>
    </footer>
  );
}