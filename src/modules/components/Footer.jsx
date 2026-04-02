import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-container footer-grid">
        <div className="footer-info">
          <div><strong>Ubícanos:</strong> JR. MIGUEL GRAU #501 - TARAPOTO</div>
          <div>
            <strong>Correo:</strong>{" "}
            <a href="mailto:mdelgadoorbe@gmail.com" className="footer-link">
              mdelgadoorbe@gmail.com
            </a>
          </div>
        </div>
        <div className="whats">
          <a className="btn" href="https://wa.me/51947617365" target="_blank" rel="noopener noreferrer">
            WhatsApp 947 617 365
          </a>
          <a className="btn" href="https://wa.me/51942492716" target="_blank" rel="noopener noreferrer">
            WhatsApp 942 492 716
          </a>
        </div>
      </div>
    </footer>
  );
}
