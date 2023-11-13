// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100094708848543&mibextid=2JQ9oc" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="mayamiratir@gmail.com" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/meee.aaa00/?fbclid=IwAR1Iqn8p98J_W4SFgENlnK018JIEdavMbt3y-cUL9ctZdvIakdi-CmV4waM" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="lien_vers_whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
           {/* Section: Contact Us */}
        <section className="mb-4">

          <p>Contactez-nous</p>
          <p>Téléphone: +216 24749480</p>
        </section>
        {/* Section: Contact Us */}
        </section>
        {/* Section: Social media */}

        {/* Section: Form */}
       
        {/* Section: Form */}
      </div>
    </footer>
  );
};

export default Footer;

