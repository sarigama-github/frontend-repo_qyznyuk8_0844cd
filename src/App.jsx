import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 to-rose-500 shadow-lg" />
            <span className="text-xl font-bold tracking-tight text-gray-900">Copper & Comb</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-gray-900">Gallery</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900">Reviews</a>
            <a href="#booking" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Book Now</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="space-y-1 px-4 py-4">
            <a href="#services" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Services</a>
            <a href="#gallery" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Gallery</a>
            <a href="#pricing" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Pricing</a>
            <a href="#testimonials" className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-50">Reviews</a>
            <a href="#booking" className="block rounded px-3 py-2 bg-gray-900 text-white">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 pt-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10 py-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow ring-1 ring-black/5">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Grand Opening – Now Accepting Bookings
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              A modern saloon for timeless style
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              Step into an elevated grooming experience. Precision cuts, hot towel shaves, and premium care in a space designed for comfort.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#booking" className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-800">
                Book Your Chair
              </a>
              <a href="#services" className="inline-flex items-center rounded-md px-6 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Explore Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Master Barbers</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500"/> Premium Products</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500"/> Cozy Lounge</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1593702288056-7927b4425429?q=80&w=1200&auto=format&fit=crop"
                alt="Barber trimming beard"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5">
              <p className="text-sm font-semibold text-gray-900">Open 7 Days</p>
              <p className="text-xs text-gray-600">Walk-ins welcome • Appointments preferred</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      title: 'Gentleman Cut',
      desc: 'Tailored haircut with consultation, wash, and style.',
      price: '$35',
      img: 'https://images.unsplash.com/photo-1616394584738-fc6e6129b178?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Hot Towel Shave',
      desc: 'Classic straight razor shave with hot towel ritual.',
      price: '$30',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Beard Sculpt',
      desc: 'Detailed beard shaping and nourishing treatment.',
      price: '$20',
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Signature Services</h2>
          <p className="mt-4 text-gray-600">Crafted with care, delivered with precision.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-sm text-white">{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605497788044-5f3886f7fcd6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Inside the Saloon</h2>
          <p className="mt-4 text-gray-600">A peek at our craft and space.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {photos.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <img src={src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Classic Cut', price: '$35', features: ['Consultation', 'Wash & Style', 'Finish Spray'] },
    { name: 'Cut + Beard', price: '$50', features: ['Classic Cut', 'Beard Sculpt', 'Hot Towel'] },
    { name: 'Deluxe Shave', price: '$40', features: ['Pre-shave Oil', 'Hot Towel', 'Aftercare Balm'] },
  ]
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Transparent Pricing</h2>
          <p className="mt-4 text-gray-600">No surprises. Just great service.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-xl font-bold text-gray-900">{t.price}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {f}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Book</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Maya R.',
      text: 'Best cut I have had in years. The team listened and nailed the look.',
    },
    {
      name: 'Jordan P.',
      text: 'Calm vibe, premium products, and the shave was immaculate.',
    },
    {
      name: 'Alex C.',
      text: 'Love the attention to detail. Booking again next month.',
    },
  ]
  return (
    <section id="testimonials" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What Guests Say</h2>
          <p className="mt-4 text-gray-600">Real words from our community.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-900">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section id="booking" className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop)', backgroundSize:'cover', backgroundPosition:'center'}} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Reserve your spot</h2>
            <p className="mt-4 text-gray-300">Pick a time that suits you. We’ll have the chair ready and the towel warm.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:bookings@copperandcomb.example" className="inline-flex items-center rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow hover:bg-gray-100">Email Us</a>
            <a href="tel:+1234567890" className="inline-flex items-center rounded-md bg-gray-700 px-6 py-3 font-medium text-white shadow hover:bg-gray-600">Call Now</a>
            <a href="#" className="inline-flex items-center rounded-md bg-amber-500 px-6 py-3 font-medium text-white shadow hover:bg-amber-600">Book Online</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-amber-500 to-rose-500" />
            <p className="text-sm font-semibold text-gray-900">Copper & Comb</p>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Copper & Comb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
