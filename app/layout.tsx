'use client';
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>GreenGroom Essentials | Eco-Friendly Personal Care</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="navbar">
          <Link href="/" className="logo">
            GreenGroom <span style={{ color: 'var(--accent)' }}>Essentials</span>
          </Link>
          <nav>
            <Link href="/#features">Features</Link>
            <Link href="/products">Shop</Link>
            <Link href="/about">About</Link>
            <button
              className="shop-btn"
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </button>
          </nav>
        </header>
        {children}
        <footer id="about">
          <div className="footer-grid">
            <div className="footer-col">
              <Link href="/" className="footer-brand">GreenGroom Essentials</Link>
              <div className="footer-desc">
                Eco-friendly personal care for a brighter tomorrow.<br />
                Sustainably sourced, cruelty-free, and designed for conscious living.
              </div>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <Link className="footer-link" href="/products">All Products</Link>
              <Link className="footer-link" href="/products">Bamboo Toothbrushes</Link>
              <Link className="footer-link" href="/products">Reusable Face Pads</Link>
              <Link className="footer-link" href="/products">Deodorant Sticks</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link className="footer-link" href="/#features">Our Values</Link>
              <Link className="footer-link" href="/about">About Us</Link>
              <Link className="footer-link" href="/">Home</Link>
              <Link className="footer-link" href="/#features">Sustainability</Link>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; 2024 GreenGroom Essentials. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
