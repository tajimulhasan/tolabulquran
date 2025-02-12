import { WhatsappLogo } from '@phosphor-icons/react';
import React from 'react';

import './whatsapp.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+8801328871080"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button bounce"
    >
      <WhatsappLogo size={36} />
    </a>
  )
}

export default WhatsAppButton;