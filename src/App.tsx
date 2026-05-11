/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X, 
  Star, 
  Wifi, 
  Users, 
  Laptop, 
  Heart,
  ArrowRight
} from 'lucide-react';

// Images from assets
const IMAGES = {
  menu: "/input_file_0.png",
  foodMain: "/input_file_1.png",
  latteArt: "/input_file_2.png",
  matcha: "/input_file_3.png",
  exterior: "/input_file_4.png",
  grilledSandwich: "/input_file_5.png",
  salad: "/input_file_6.png",
  logo: "/input_file_7.png"
};

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Work Space', href: '#workspace' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Visit Us', href: '#visit' },
];

const MENU_ITEMS = [
  {
    name: "Latte / Cappuccino",
    price: "$4.55 - $5.60",
    description: "Expertly pulled espresso with silky steamed milk and delicate foam.",
    image: IMAGES.latteArt
  },
  {
    name: "Iced Coffee",
    price: "$4.50 - $5.20",
    description: "Premium brew served over ice for a crisp, refreshing caffeine kick.",
    image: IMAGES.exterior
  },
  {
    name: "Matcha Drinks",
    price: "$5.50 - $6.30",
    description: "Ceremonial grade matcha blended for a smooth, earthy energy boost.",
    image: IMAGES.matcha
  },
  {
    name: "Croissant Sandwich",
    price: "$9.50",
    description: "Flaky, buttery croissant filled with fresh eggs, greens, and savory ingredients.",
    image: IMAGES.foodMain
  },
  {
    name: "Grilled Sandwiches",
    price: "$10.50",
    description: "Artisan bread toasted to perfection with gourmet fillings and melted cheese.",
    image: IMAGES.grilledSandwich
  },
  {
    name: "Fresh Salad",
    price: "$11.50",
    description: "Vibrant greens, seasonal vegetables, and house-made dressings.",
    image: IMAGES.salad
  },
  {
    name: "Cakes & Pastries",
    price: "$4.00 - $7.00",
    description: "Daily selection of fresh-baked cakes, cookies, and flaky pastries.",
    image: IMAGES.matcha // The cookie image
  }
];

const GALLERY_IMAGES = [
  { src: IMAGES.latteArt, caption: "Latte Art" },
  { src: IMAGES.foodMain, caption: "Cafe Brunch" },
  { src: IMAGES.matcha, caption: "Matcha Moment" },
  { src: IMAGES.exterior, caption: "Outdoor Vibes" },
  { src: IMAGES.grilledSandwich, caption: "Gourmet Bites" },
  { src: IMAGES.salad, caption: "Healthy Living" },
  { src: IMAGES.menu, caption: "Our Selection" },
];

const REVIEWS = [
  {
    name: "Sarah Chen",
    text: "Beautiful cafe with amazing coffee and food. The atmosphere is so peaceful, perfect for catching up on some reading.",
    rating: 5
  },
  {
    name: "James Wilson",
    text: "Perfect place to work or meet a friend. The wifi is reliable and the seating is very comfortable. Highly recommend the matcha!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    text: "The sandwiches and drinks are always fresh and aesthetic. Truly a hidden gem in Burnaby. The outdoor seating is lovely.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2ED] font-sans text-[#1A1A1A]">
      {/* 1. Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-coffee-brown/20 py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={IMAGES.logo} 
              alt="Logo" 
              className="h-10 w-auto group-hover:scale-105 transition-transform" 
            />
            <span className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${
              scrolled ? 'text-coffee-red' : 'text-white'
            }`}>
              Coffee Loft
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-coffee-red ${
                  scrolled ? 'text-stone-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-stone-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-stone-800' : 'text-white'} />
            ) : (
              <MenuIcon className={scrolled ? 'text-stone-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-stone-700 hover:text-coffee-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax bg-center"
          style={{ backgroundImage: `url(${IMAGES.exterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            Coffee Loft
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl font-light mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            A cozy Burnaby cafe for coffee, comfort food, and aesthetic work sessions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#menu" 
              className="px-8 py-4 bg-coffee-red text-white rounded-full font-bold hover:brightness-110 transition-all transform hover:scale-105 shadow-xl"
            >
              View Menu
            </a>
            <a 
              href="#visit" 
              className="px-8 py-4 bg-white/10 glass text-white border border-white/40 rounded-full font-bold hover:bg-white/20 transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Visit Us
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 3. Value Proposition Section */}
      <section className="py-24 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "☕",
                title: "Fresh Specialty Coffee",
                desc: "Expertly roasted beans and delicate latte art, crafted daily."
              },
              {
                icon: "🥪",
                title: "Artisan Sandwiches",
                desc: "Fresh, high-quality ingredients wrapped in artisan sourdough."
              },
              {
                icon: "💻",
                title: "Productive Workspace",
                desc: "Defined quiet zones and high-speed Wi-Fi for your flow state."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl border border-coffee-brown/10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-coffee-beige rounded-full flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-coffee-red">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Menu Section */}
      <section id="menu" className="py-24 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-coffee-brown font-bold tracking-widest uppercase text-xs mb-4 block">Signature Selection</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-red">Our Favorites</h2>
            <div className="w-16 h-1 bg-coffee-red mx-auto mt-6 rounded-full opacity-20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#F5F2ED]/30 rounded-3xl overflow-hidden border border-coffee-brown/5 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shadow-inner" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-coffee-brown shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-coffee-red transition-colors">{item.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-coffee-red text-coffee-red rounded-full font-bold hover:bg-coffee-red hover:text-white transition-all group">
                Download Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* 5. Parallax Break Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax bg-center"
          style={{ backgroundImage: `url(${IMAGES.latteArt})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-medium leading-tight"
          >
            “Made for slow mornings, productive afternoons, and cozy conversations.”
          </motion.h2>
        </div>
      </section>

      {/* 6. Customer Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Loft Life</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Shared moments from our community at Coffee Loft.</p>
          </div>

          <div className="masonry">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="masonry-item relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg tracking-wider border-b-2 border-white/30 pb-1 translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Work Space Section */}
      <section id="workspace" className="py-24 bg-coffee-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-coffee-beige font-semibold tracking-widest uppercase text-sm mb-4 block">Productivity</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">Your Third Place</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Coffee Loft is intentionally designed to be more than just a cafe. It's a space that adapts to your needs—whether you're crushing deadlines or connecting with loved ones.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Laptop className="w-5 h-5" />, label: "Remote Work" },
                  { icon: <Users className="w-5 h-5" />, label: "Group Studies" },
                  { icon: <Wifi className="w-5 h-5" />, label: "Hyper Fast WiFi" },
                  { icon: <Heart className="w-5 h-5" />, label: "Cafe Dates" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="p-2 bg-white/10 rounded-lg text-coffee-beige">
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img src={IMAGES.exterior} alt="Workspace" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-coffee-beige/20 rounded-[2rem] z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Google Reviews / Testimonials Section */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-coffee-brown">Guest Stories</h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
            </div>
            <p className="text-stone-500 italic">"4.9 stars on Google Reviews"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-coffee-red text-white p-10 rounded-[2.5rem] relative shadow-xl"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                </div>
                <p className="text-white/90 mb-8 italic leading-relaxed font-light">"{review.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                   <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center font-bold">
                     {review.name[0]}
                   </div>
                   <span className="font-bold text-white uppercase tracking-widest text-xs">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Visit Us Section */}
      <section id="visit" className="py-24 bg-coffee-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-coffee-brown rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="font-serif text-4xl font-bold mb-10">Find Your Loft</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/10 rounded-xl text-coffee-beige">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Location</h4>
                    <p className="text-white/60">Burnaby, BC V5H 4M5</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/10 rounded-xl text-coffee-beige">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Hours</h4>
                    <p className="text-white/60">Mon – Fri: 8:00 AM – 6:00 PM</p>
                    <p className="text-white/60">Sat – Sun: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/10 rounded-xl text-coffee-beige">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Contact</h4>
                    <p className="text-white/60">778-COF-LOFT</p>
                    <p className="text-white/60">hello@coffeeloft.ca</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <button className="w-full sm:w-auto px-10 py-5 bg-coffee-red text-white rounded-full font-bold hover:bg-red-900 transition-all shadow-lg transform hover:-translate-y-1">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 h-96 lg:h-auto relative bg-stone-200">
               {/* Mock Google Maps visual */}
               <div className="absolute inset-0 bg-stone-300 flex items-center justify-center overflow-hidden">
                  <div className="text-stone-500 text-center p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p className="font-medium">Map View Unavailable in Preview</p>
                    <p className="text-sm opacity-60">Coffee Loft, Burnaby, BC</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-white text-[#8D5B4C]/60 py-16 border-t border-coffee-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={IMAGES.logo} alt="Logo" className="h-8 w-auto" />
                <span className="font-serif text-2xl font-bold text-coffee-red tracking-tighter">Coffee Loft</span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed text-sm">
                Elevating the coffee experience in Burnaby through artisanal brewing, fresh ingredients, and a thoughtfully curated workspace for the modern community.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full border border-coffee-brown/20 text-[#1A1A1A] hover:bg-coffee-red hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 rounded-full border border-coffee-brown/20 text-[#1A1A1A] hover:bg-coffee-red hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#menu" className="hover:text-white transition-colors">Digital Menu</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Loft Gallery</a></li>
                <li><a href="#workspace" className="hover:text-white transition-colors">Workspace Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#visit" className="hover:text-white transition-colors">Visit Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Updates</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Coffee Loft. Crafted with heart in Burnaby.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
