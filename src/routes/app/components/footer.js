import React from 'react';
import { Icon } from 'react-fa';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer-text">
        <Icon className="copyright-icon" name="copyright" />
        Copyright 2018 my14ers. All rights reserved.
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.iubenda.com/privacy-policy/47759666/legal"
          className="facebook-privacy-link"
        >Privacy Policy
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.flaticon.com"
          className="icon-cred"
        >Icon Credit
        </a>
      </p>
    </footer>
  );
}
