'use client';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '2.5rem', minHeight: '70vh' }}>
      <section style={{ maxWidth: 800, margin: '0 auto', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '2.5rem 1.5rem 2rem 1.5rem', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '1.2rem', letterSpacing: '-0.01em', textAlign: 'center' }}>
          About GreenGroom Essentials
        </h1>
        <p style={{ fontSize: '1.13rem', color: '#385c38', marginBottom: '1.5rem', textAlign: 'center', lineHeight: 1.6 }}>
          GreenGroom Essentials was founded with a simple mission: to make sustainable personal care accessible, effective, and beautiful. We believe that taking care of yourself shouldn't come at the expense of the planet.
        </p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.8rem', marginTop: '2rem' }}>Our Story</h2>
        <p style={{ fontSize: '1.05rem', color: '#385c38', marginBottom: '1.2rem', lineHeight: 1.6 }}>
          Inspired by nature and driven by a passion for conscious living, we set out to create a line of personal care products that are as gentle on the earth as they are on your body. Every GreenGroom product is thoughtfully designed, using only renewable, biodegradable, or recycled materials and pure, plant-based ingredients.
        </p>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.8rem', marginTop: '2rem' }}>Our Values</h2>
        <ul style={{ fontSize: '1.05rem', color: '#385c38', marginBottom: '1.2rem', lineHeight: 1.6, paddingLeft: '1.2em' }}>
          <li style={{ marginBottom: '0.7em' }}>♻️ <b>Sustainability:</b> Every product is crafted for minimal environmental impact.</li>
          <li style={{ marginBottom: '0.7em' }}>🌿 <b>Purity:</b> We use only organic, natural, and safe ingredients.</li>
          <li style={{ marginBottom: '0.7em' }}>🐰 <b>Cruelty-Free:</b> No animal testing, ever. 100% vegan.</li>
          <li style={{ marginBottom: '0.7em' }}>🌱 <b>Transparency:</b> We share our sourcing and production practices openly.</li>
        </ul>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.8rem', marginTop: '2rem' }}>Join Us</h2>
        <p style={{ fontSize: '1.05rem', color: '#385c38', marginBottom: '0.5rem', lineHeight: 1.6 }}>
          Thank you for supporting a greener, more mindful world. Together, we can make every routine a little more sustainable.
        </p>
      </section>
    </main>
  );
}
