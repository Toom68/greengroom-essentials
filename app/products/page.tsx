'use client';
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
  {
    title: 'Bamboo Hair Brush',
    price: '$22',
    image: 'https://source.unsplash.com/600x500/?bamboo-hair-brush',
    badge: '',
    alt: 'Bamboo Hair Brush',
  },
  {
    title: 'Compostable Dental Floss',
    price: '$9',
    image: 'https://source.unsplash.com/600x500/?eco-dental-floss',
    badge: '',
    alt: 'Compostable Dental Floss',
  },
  {
    title: 'Natural Shampoo Bar',
    price: '$14',
    image: 'https://source.unsplash.com/600x500/?shampoo-bar,natural',
    badge: '',
    alt: 'Natural Shampoo Bar',
  },
];

export default function ProductsPage() {
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
    <main style={{ paddingTop: '2.5rem', minHeight: '70vh' }}>
      <section className="products-section">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.6rem', textAlign: 'center', letterSpacing: '-0.01em' }}>
          All Eco Essentials
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
    </main>
  );
}
