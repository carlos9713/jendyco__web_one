# 🧠 Jendyco Project Documentation

This doc breaks down the setup and structure of both the **Frontend (React)** and **Backend (Django)** for Jendyco International.

## 📁 FRONTEND (React)

**Folder:** `frontend/`

### 📦 Key Tools Used

* React (via `npx create-react-app`)
* Environment Variables (`.env`)
* CSS Modules or global `App.css`

### 🔧 Setup Steps

1. `npx create-react-app frontend`
2. Created `.env` file:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000
   ```
3. Removed default boilerplate (logo, Learn React link)
4. Built form with `useState` and `fetch()` to hit Django API
5. Styled with `App.css`

### 📂 Folder Structure (Frontend)

```bash
frontend/
├── public/
│   └── jendyco-logo.png
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── ProductCard.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Quote.js
│   │   └── About.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── .env
```

### ✅ Done So Far

* Contact form working (sends name + message)
* Form uses `fetch()` with dynamic base URL
* CORS + CSRF issues handled on backend

---

## 🐍 BACKEND (Django)

**Folder:** `backend/`

### 📦 Key Tools Used

* Django
* `django-cors-headers`
* CSRF exemptions for dev
* REST-style POST endpoint

### 🔧 Setup Steps

1. `django-admin startproject backend`
2. Created app: `core`
3. Installed CORS:

   ```bash
   pip install django-cors-headers
   ```
4. Updated `settings.py`:

   ```python
   INSTALLED_APPS = [..., 'corsheaders']
   MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]
   CORS_ALLOW_ALL_ORIGINS = True
   CSRF_TRUSTED_ORIGINS = ['http://localhost:3000']
   ALLOWED_HOSTS = ['localhost', '127.0.0.1']
   ```
5. Created API route `/api/contact/` in `core/urls.py`
6. Added CSRF-exempt view to accept JSON payload

### 📂 Folder Structure (Backend)

```bash
backend/
├── backend/         # Main Django project folder
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── core/            # Django app for business logic
│   ├── admin.py
│   ├── apps.py
│   ├── migrations/
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3
├── manage.py
```

### ✅ Done So Far

* `@csrf_exempt` POST view working for React contact form
* API endpoint logs name + message
* CORS + CSRF errors resolved

---

## 📌 Next Steps

* Set up `react-router-dom` in frontend
* Build nav + page layout
* Add quote form with product options
* Start modeling quotes in Django (`models.py` + `admin.py`)

Let’s gooo 🚀













import React from 'react';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: "url('/background_main1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          minHeight: '160vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          paddingTop: '8rem',
        }}
      >
        {/* Floating navigation bar */}
        <nav
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem',
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 20,
          }}
        >
          <a href="#who" style={{ margin: '0 1rem', color: 'white' }}>Who We Are</a>
          <a href="#products" style={{ margin: '0 1rem', color: 'white' }}>Our Products</a>
          <a href="#contact" style={{ margin: '0 1rem', color: 'white' }}>Contact Us</a>
          <a href="#quote" style={{ margin: '0 1rem', color: 'white' }}>Request a Quote</a>
        </nav>

        {/* Transparent logo top right */}
        <img
          src="/jendyco-logo2.png"
          alt="Jendyco"
          style={{
            position: 'absolute',
            top: 24,
            right: 32,
            width: 180,
            height: 'auto',
            zIndex: 15,
            filter: 'drop-shadow(3px 3px 8px rgba(255,255,255,0.6))',
          }}
        />

        <div style={{ marginTop: '8rem', zIndex: 10 }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
            Coffee & Cacao Straight to the Cargo Ships
          </h1>
          <p style={{ maxWidth: 600, fontSize: '1.3rem', margin: '1rem auto 0' }}>
            Jendyco International connects the lush tropics to the world — sourcing and shipping premium coffee, cacao, and more.
          </p>
        </div>

        {/* WHO WE ARE SECTION */}
        <section id="who" style={{ marginTop: '4rem', padding: '2rem', maxWidth: '900px', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '12px', zIndex: 10 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Who We Are</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Jendyco International is a family-operated import-export business focused on building transparent, ethical, and efficient trade between Latin America and global markets. We specialize in sourcing premium agricultural products and streamlining logistics so that quality always arrives on time.
          </p>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="products" style={{ marginTop: '3rem', padding: '2rem', maxWidth: '1000px', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '12px', color: '#222', zIndex: 10 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Our Products</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { name: 'Coffee', img: '/coffee.jpg' },
              { name: 'Cacao', img: '/cacao.jpg' },
              { name: 'Chia Seeds', img: '/chia.jpg' },
            ].map((item) => (
              <div key={item.name} style={{ width: 250, backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <h3 style={{ padding: '1rem 0', fontWeight: 'bold' }}>{item.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTE CTA SECTION */}
        <section id="quote" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#002b5c', color: 'white', borderRadius: '12px', maxWidth: '900px', zIndex: 10 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Request a Quote</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Contact us today to get a customized quote for your shipment.
          </p>
          <a href="/quote" style={{ backgroundColor: '#ff6f00', padding: '0.75rem 1.5rem', borderRadius: '5px', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Get Started
          </a>
        </section>
      </div>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ padding: '6rem 2rem 4rem', backgroundColor: '#fff', textAlign: 'center', color: '#333' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact Us</h2>
        <p>Have a question? Reach out and our team will get back to you as soon as possible.</p>
        <p>Email: <a href="mailto:info@jendyco.com">info@jendyco.com</a></p>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section style={{ padding: '6rem 2rem 4rem', backgroundColor: 'white', textAlign: 'center', color: '#333' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Why Choose Jendyco?</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            We don’t just ship goods — we build global partnerships. Whether you're importing cacao to the U.S. or exporting premium coffee to Europe, we manage the details that make international trade smooth and reliable.
          </p>
          <p>
            From supplier vetting and farm-to-port logistics, to customs guidance and final-mile shipping, we do it all so you can focus on your business.
          </p>
        </div>
      </section>

      {/* VISUAL TRADE MAP SECTION */}
      <section style={{ padding: '4rem 2rem 6rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Where We Operate</h2>
        <img
          src="/trade-map.jpg"
          alt="Jendyco Global Trade Routes"
          style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '8px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
        />
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#555' }}>
          We ship globally from Latin America to North America, Europe, and Asia.
        </p>
      </section>
    </div>
  );
}
