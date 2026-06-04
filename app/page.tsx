'use client';
import Image from 'next/image';
import { useRef } from 'react';

const products = [
  {
    title: 'Bamboo Toothbrushes',
    price: '$12',
    image: 'https://source.unsplash.com/600x500/?bamboo-toothbrush',
    badge: 'Best Seller',
    alt: 'Bamboo Toothbrushes',
  },
  {
    title: 'Organic Cotton Reusable Face Pads',
    price: '$15',
    image: 'https://source.unsplash.com/600x500/?reusable-face-pads,cotton',
    badge: '',
    alt: 'Organic Cotton Reusable Face Pads',
  },
  {
    title: 'Natural Deodorant Sticks',
    price: '$18',
    image: 'https://source.unsplash.com/600x500/?natural-deodorant',
    badge: '',
    alt: 'Natural Deodorant Sticks',
  },
];

export default function HomePage() {
  const productsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Add-to-cart micro-interaction
  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    btn.style.transform = 'scale(0.96)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 130);
  }

  // Keyboard focus micro-interaction
  function handleCardKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.currentTarget;
      card.classList.add('focus');
      setTimeout(() => card.classList.remove('focus'), 200);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="hero" id="home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__bg"
          src="https://source.unsplash.com/1600x900/?eco-friendly,personal-care-products"
          alt="Eco-friendly personal care products"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__headline">Eco-Friendly Care for a Greener You</h1>
          <p className="hero__subtext">Discover sustainable personal care products that nurture you and the planet.</p>
          <div className="hero__actions">
            <button
              className="hero__btn"
              type="button"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop Collection
            </button>
            <button
              className="hero__btn secondary"
              type="button"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Why GreenGroom?
            </button>
          </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="trust-bar">
        <span><span className="trust-icon">🚚</span>Free Shipping $30+</span>
        <span><span className="trust-icon">🔄</span>Easy Returns</span>
        <span><span className="trust-icon">🔒</span>Secure Checkout</span>
        <span><span className="trust-icon">🌱</span>Sustain Your Beauty, Sustain the Earth</span>
      </div>
      {/* Features */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="feature-card" tabIndex={0} onKeyDown={handleCardKeyDown}>
          <div className="feature-icon">♻️</div>
          <div className="feature-title">100% Sustainable Materials</div>
          <div className="feature-desc">All our products are crafted from renewable, biodegradable, or recycled materials—good for you, and the planet.</div>
        </div>
        <div className="feature-card" tabIndex={0} onKeyDown={handleCardKeyDown}>
          <div className="feature-icon">🌿</div>
          <div className="feature-title">Pure, Natural Ingredients</div>
          <div className="feature-desc">No harsh chemicals. Only organic, plant-based ingredients for gentle, effective personal care you can trust.</div>
        </div>
        <div className="feature-card" tabIndex={0} onKeyDown={handleCardKeyDown}>
          <div className="feature-icon">🐰</div>
          <div className="feature-title">Cruelty-Free & Vegan</div>
          <div className="feature-desc">We never test on animals. Our entire range is vegan and certified cruelty-free for guilt-free grooming.</div>
        </div>
      </section>
      {/* Product Grid */}
      <section className="products-section" id="products" ref={productsRef}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.6rem', textAlign: 'center', letterSpacing: '-0.01em' }}>
          Shop Our Eco Essentials
        </h2>
        <div className="products-grid">
          {products.map((product, i) => (
            <div
              className="product-card"
              tabIndex={0}
              key={product.title}
              onKeyDown={handleCardKeyDown}
            >
              {product.badge && <span className="product-badge">{product.badge}</span>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="product-image"
                src={product.image}
                alt={product.alt}
              />
              <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price}</div>
                <button
                  className="add-to-cart-btn"
                  aria-label={`Add ${product.title} to cart`}
                  type="button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to make your routine greener?</h2>
        <button
          className="cta-btn"
          type="button"
          onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Shop GreenGroom Now
        </button>
      </section>
    </>
  );
}
