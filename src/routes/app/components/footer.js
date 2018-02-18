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
          href="https://termsfeed.com/terms-conditions/288ac8914b35f77a9bda64ba085e31c8"
          className="terms-link"
        >Terms & Conditions
        </a>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.flaticon.com"
          className="icon-cred"
        >Icon Credit
        </a>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.14ers.com"
          className="photo-cred"
        >Photo Credit
        </a>
      </p>
    </footer>
  );
}
