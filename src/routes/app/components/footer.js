import React from 'react';
import { Icon } from 'react-fa';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer-text">
        <Icon className="copyright-icon" name="copyright" />
        Copyright 2018 my14ers. All rights reserved
        <a
          href="https://www.iubenda.com/privacy-policy/47759666/legal"
          className="facebook-privacy-link"
        >Privacy Policy
        </a>
      </p>
    </footer>
  );
}
