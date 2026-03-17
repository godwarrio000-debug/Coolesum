/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  History, 
  Swords, 
  Users, 
  Hammer, 
  MapPin, 
  ChevronRight, 
  Info, 
  Calendar, 
  Clock, 
  Ticket,
  ArrowRight,
  Shield,
  Skull,
  Star,
  ExternalLink,
  Waves,
  Leaf,
  Zap,
  Gem,
  Building2
} from 'lucide-react';

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`absolute top-4 left-4 bg-colosseum-amber text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-10 ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-12">
    <span className={`text-xs font-bold uppercase tracking-[0.3em] ${light ? 'text-white/60' : 'text-colosseum-amber'}`}>
      {subtitle}
    </span>
    <h2 className={`text-4xl md:text-5xl font-display mt-2 ${light ? 'text-white' : 'text-colosseum-ink'}`}>
      {title}
    </h2>
  </div>
);

const ProgressBar = ({ label, progress }: { label: string, progress: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(progress), 500);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-colosseum-ink/80">{label}</span>
        <span className="text-sm font-bold text-colosseum-amber">{progress}%</span>
      </div>
      <div className="h-2 bg-black/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-colosseum-amber"
        />
      </div>
    </div>
  );
};

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-colosseum-stone/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-colosseum-ink rounded-sm flex items-center justify-center">
          <span className="text-colosseum-stone font-display font-bold">C</span>
        </div>
        <span className="font-display text-xl font-bold tracking-tight">COLOSSEUM</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
        <a href="#overview" className="hover:text-colosseum-amber transition-colors">Overview</a>
        <a href="#history" className="hover:text-colosseum-amber transition-colors">History</a>
        <a href="#architecture" className="hover:text-colosseum-amber transition-colors">Architecture</a>
        <a href="#games" className="hover:text-colosseum-amber transition-colors">The Games</a>
        <a href="#facts" className="hover:text-colosseum-amber transition-colors">Facts</a>
        <a href="#restoration" className="hover:text-colosseum-amber transition-colors">Restoration</a>
      </div>

      <button className="bg-colosseum-amber text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-colosseum-ink transition-all shadow-md flex items-center gap-2 group">
        Plan Visit
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=2000" 
        alt="The Colosseum at Sunset" 
        className="w-full h-full object-cover animate-ken-burns"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-colosseum-stone" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-4 block"
      >
        The Flavian Amphitheatre
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white text-6xl md:text-9xl font-display font-bold leading-tight mb-8"
      >
        ETERNAL <br /> <span className="italic font-serif font-light">ARENA</span>
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <a href="#overview" className="bg-white text-colosseum-ink px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-colosseum-amber hover:text-white transition-all shadow-2xl">
          Explore History
        </a>
        <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/user${i}/100/100`} 
                className="w-8 h-8 rounded-full border-2 border-white/20"
                alt="User"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <span>Join 2M+ annual visitors</span>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
      <span className="text-[10px] uppercase tracking-widest">Scroll to begin</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" 
      />
    </div>
  </section>
);

const Overview = () => (
  <section id="overview" className="py-24 px-6 bg-colosseum-stone">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <SectionHeading title="The Heart of Rome" subtitle="Overview" />
          <p className="text-2xl font-serif leading-relaxed text-colosseum-ink/80 mb-8">
            Rising from the center of the Eternal City, the Colosseum remains the most iconic symbol of the Roman Empire's power, architectural genius, and complex social fabric.
          </p>
          <p className="text-lg text-colosseum-ink/60 leading-relaxed mb-10">
            Built in just eight years, this massive stone structure was designed to host spectacles that would define Roman culture for centuries. Today, it stands as a UNESCO World Heritage site and one of the New Seven Wonders of the World.
          </p>
          <div className="flex gap-4">
            <div className="bg-colosseum-amber/10 border border-colosseum-amber/20 rounded-2xl p-6 flex-1">
              <span className="block text-3xl font-display text-colosseum-amber mb-1">80 AD</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-colosseum-ink/40">Inauguration</span>
            </div>
            <div className="bg-colosseum-amber/10 border border-colosseum-amber/20 rounded-2xl p-6 flex-1">
              <span className="block text-3xl font-display text-colosseum-amber mb-1">50k+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-colosseum-ink/40">Capacity</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-colosseum-amber/20 rounded-full blur-3xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
            <Badge>Daytime Overview</Badge>
            <img 
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200" 
              alt="Colosseum Overview" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-black/5 max-w-xs hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-colosseum-amber flex items-center justify-center text-white">
                <Star className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm tracking-tight">World Heritage</span>
            </div>
            <p className="text-xs text-colosseum-ink/60 leading-relaxed">
              Designated as a UNESCO site in 1980, it is the most visited monument in Italy.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: "Height", value: "48m", desc: "Equivalent to a 12-story building" },
          { label: "Circumference", value: "527m", desc: "An elliptical masterpiece" },
          { label: "Arches", value: "80", desc: "Numbered for rapid entry/exit" },
          { label: "Materials", value: "Stone", desc: "Travertine, Tuff, and Concrete" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/50 backdrop-blur-sm border border-black/5 p-8 rounded-3xl text-center">
            <span className="block text-sm font-bold uppercase tracking-widest text-colosseum-amber mb-2">{stat.label}</span>
            <span className="block text-4xl font-display mb-2">{stat.value}</span>
            <p className="text-xs text-colosseum-ink/50">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HistoryTimeline = () => {
  const timeline = [
    { year: "70 AD", title: "Construction Begins", desc: "Emperor Vespasian commissions the arena on the site of Nero's Golden House, funded by the spoils of the Jewish War. It was a political statement to return the land to the people." },
    { year: "80 AD", title: "Inaugural Games", desc: "Titus opens the arena with 100 days of games. Over 9,000 animals were killed, and the arena was flooded for a massive mock sea battle (Naumachia)." },
    { year: "82 AD", title: "The Hypogeum", desc: "Domitian completes the structure, adding the complex underground tunnels, cages, and elevator systems that allowed for dramatic stage effects." },
    { year: "217 AD", title: "The Great Fire", desc: "Lightning strikes the upper levels, causing a fire that destroyed the wooden upper tiers. The arena was closed for 20 years for extensive repairs." },
    { year: "404 AD", title: "End of Gladiator Combat", desc: "Emperor Honorius officially bans gladiator fights after the death of the monk Telemachus, who tried to stop a fight and was stoned by the crowd." },
    { year: "523 AD", title: "Last Recorded Hunt", desc: "The final venatio (animal hunt) takes place under the reign of Theodoric, marking the end of its original use as a venue for blood sports." },
    { year: "1349 AD", title: "The Great Earthquake", desc: "A massive quake causes the outer south side to collapse. The fallen stone was later used to build palaces and churches across Rome." },
    { year: "1749 AD", title: "Sanctification", desc: "Pope Benedict XIV declares the site sacred to the memory of Christian martyrs, halting the centuries of looting and stone-quarrying." },
  ];

  return (
    <section id="history" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
          <SectionHeading title="A Legacy in Stone" subtitle="Timeline" />
          <p className="text-lg text-colosseum-ink/70 font-serif leading-relaxed">
            From the spoils of the Jewish War to the symbol of an empire, the Colosseum has stood for nearly two millennia as a testament to Roman engineering and societal complexity.
          </p>
          <div className="space-y-4 pt-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl group">
              <Badge>The Foundation</Badge>
              <img 
                src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&q=80&w=800" 
                alt="Colosseum Detail" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group">
              <Badge>The Ruin</Badge>
              <img 
                src="https://images.unsplash.com/photo-1515542672103-d84767ad2c58?auto=format&fit=crop&q=80&w=800" 
                alt="Colosseum Interior" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full border border-colosseum-amber flex items-center justify-center text-[10px] font-bold text-colosseum-amber group-hover:bg-colosseum-amber group-hover:text-white transition-all">
                    {item.year}
                  </div>
                  <div className="h-px flex-1 bg-colosseum-amber/20" />
                </div>
                <h3 className="text-xl font-display mb-3 group-hover:text-colosseum-amber transition-colors">{item.title}</h3>
                <p className="text-sm text-colosseum-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TheGames = () => {
  const gladiators = [
    { name: "Murmillo", role: "The Fish Man", icon: <Shield />, img: "https://images.unsplash.com/photo-1615715757401-f30e7b27b912?auto=format&fit=crop&q=80&w=600" },
    { name: "Retiarius", role: "The Net Fighter", icon: <Swords />, img: "https://images.unsplash.com/photo-1551818014-9985a6396869?auto=format&fit=crop&q=80&w=600" },
    { name: "Secutor", role: "The Chaser", icon: <Skull />, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section id="games" className="py-24 bg-colosseum-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl"
          >
            <Badge className="bg-red-600">Live Spectacle</Badge>
            <img 
              src="https://images.unsplash.com/photo-1599933334297-516558e151cf?auto=format&fit=crop&q=80&w=1000" 
              alt="Gladiator Combat" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl font-display mb-2">Munera: The Gift</h4>
              <p className="text-white/60 text-sm">Originally funeral rites, the games evolved into state-sponsored political tools.</p>
            </div>
          </motion.div>
          
          <div>
            <SectionHeading title="Blood & Sand" subtitle="The Games" light />
            <p className="text-xl text-white/70 font-serif leading-relaxed mb-8">
              A day at the Colosseum was a choreographed sequence of violence and order. It began with animal hunts (Venationes), followed by public executions (Noxii), and culminated in the main event: Gladiator combat.
            </p>
            <ul className="space-y-6">
              {[
                { t: "Seating Hierarchy", d: "From the Emperor's podium to the wooden nosebleed seats for the poor." },
                { t: "The Velarium", d: "A massive retractable awning operated by Roman sailors to provide shade." },
                { t: "The Hypogeum", d: "A complex elevator system that could 'magically' spawn beasts onto the floor." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-colosseum-amber flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider text-colosseum-amber">{item.t}</h5>
                    <p className="text-white/50 text-sm mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gladiators.map((g, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <img 
                  src={g.img} 
                  alt={g.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 text-white/40 group-hover:text-colosseum-amber transition-colors">
                  {g.icon}
                </div>
              </div>
              <h4 className="text-xl font-display mb-1">{g.name}</h4>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">{g.role}</p>
              <p className="text-sm text-white/60 leading-relaxed">
                Equipped with specialized armor and weapons designed for distinct fighting styles.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DailyLife = () => (
  <section id="daily" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="relative rounded-[3rem] overflow-hidden mb-24 h-[500px] flex items-center px-12 group">
      <img 
        src="https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80&w=2000" 
        alt="Ancient Rome" 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-colosseum-gold/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      
      <div className="relative z-10 max-w-2xl">
        <SectionHeading title="Life in the Shadow" subtitle="Daily Life" light />
        <p className="text-xl text-white/90 font-serif leading-relaxed">
          The Colosseum wasn't just an arena; it was the beating heart of a neighborhood. Thousands of vendors, slaves, and soldiers moved through the streets surrounding the stone giant every single day.
        </p>
      </div>
      <div className="absolute top-12 right-12 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
          <span className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Crowd Capacity</span>
          <span className="text-4xl font-display">80,000</span>
          <span className="block text-[10px] mt-2 opacity-60 italic">Estimated peak attendance</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { t: "Food Vendors", d: "Selling chickpeas, sausages, and wine to the thirsty crowds.", img: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=400" },
        { t: "Crowd Control", d: "The 80 numbered arches allowed 50,000 people to exit in minutes.", img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=400" },
        { t: "The Emperor", d: "Using the games to gauge public opinion and distribute grain.", img: "https://images.unsplash.com/photo-1549893072-4bc678117f45?auto=format&fit=crop&q=80&w=400" },
        { t: "The Ludus Magnus", d: "The great gladiator training school connected by tunnel.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-xl transition-all"
        >
          <div className="relative h-40 rounded-xl overflow-hidden mb-6">
            <img 
              src={item.img} 
              alt={item.t} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-colosseum-amber/10 mix-blend-overlay" />
          </div>
          <h4 className="text-lg font-display mb-2">{item.t}</h4>
          <p className="text-sm text-colosseum-ink/60 leading-relaxed">{item.d}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Architecture = () => (
  <section id="architecture" className="py-24 bg-colosseum-linen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading title="Engineering Marvel" subtitle="Architecture" />
          <p className="text-xl text-colosseum-ink/70 font-serif leading-relaxed mb-12">
            The Colosseum was a masterpiece of Roman engineering, utilizing concrete and stone to create the largest amphitheatre ever built. Its design influenced every stadium built since.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Shield />, t: "The 4 Orders", d: "Doric, Ionic, and Corinthian columns adorn the tiers, with Composite at the top." },
              { icon: <Users />, t: "80 Arches", d: "Numbered entrances allowed 50,000 people to exit in under 15 minutes." },
              { icon: <Hammer />, t: "Materials", d: "100,000 cubic meters of Travertine stone held by 300 tons of iron clamps." },
              { icon: <Info />, t: "The Velarium", d: "A massive retractable awning operated by Roman sailors to provide shade." },
              { icon: <MapPin />, t: "Dimensions", d: "189m long, 156m wide, covering 6 acres with a base area of 24,000 sqm." },
              { icon: <Gem />, t: "The Hypogeum", d: "Two-level underground network of tunnels and cages for beasts and gladiators." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(217, 119, 6, 0.05)" }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 transition-colors cursor-default"
              >
                <div className="text-colosseum-amber mb-4">{item.icon}</div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{item.t}</h4>
                <p className="text-xs text-colosseum-ink/60 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square group">
            <Badge>The Outer Ring</Badge>
            <img 
              src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&q=80&w=1000" 
              alt="Colosseum Arches" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video group">
            <Badge>The Interior</Badge>
            <img 
              src="https://images.unsplash.com/photo-1515542672103-d84767ad2c58?auto=format&fit=crop&q=80&w=1000" 
              alt="Colosseum Interior" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Legacy = () => (
  <section id="legacy" className="py-24 bg-colosseum-ink text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative rounded-[3rem] overflow-hidden h-[600px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Colosseum Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-colosseum-ink via-transparent to-colosseum-ink" />
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-colosseum-amber/90 backdrop-blur-md p-12 rounded-[2rem] shadow-2xl"
          >
            <SectionHeading title="The Eternal Symbol" subtitle="Legacy" light />
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-white">
              "While stands the Coliseum, Rome shall stand; when falls the Coliseum, Rome shall fall; and when Rome falls, the world."
            </p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Venerable Bede</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Restoration = () => (
  <section id="restoration" className="py-24 bg-amber-pale">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <SectionHeading title="Preserving Eternity" subtitle="Restoration" />
        <p className="text-lg text-colosseum-ink/70 font-serif leading-relaxed mb-10">
          A massive €20 million project is currently underway to restore the arena floor and stabilize the crumbling arches. This includes a new high-tech wooden floor that will allow visitors to stand where gladiators once fought.
        </p>
        
        <div className="space-y-2">
          <ProgressBar label="Structural Stabilization" progress={85} />
          <ProgressBar label="Hypogeum Cleaning" progress={92} />
          <ProgressBar label="New Arena Floor" progress={45} />
          <ProgressBar label="Outer Ring Repair" progress={60} />
        </div>

        <div className="mt-12 p-8 bg-colosseum-amber/10 rounded-3xl border border-colosseum-amber/20">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-colosseum-amber flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-colosseum-ink mb-1">Insider Tip</h5>
              <p className="text-sm text-colosseum-ink/70 leading-relaxed">
                Visit during the early morning (8:30 AM) to see the restoration teams in action. The soft light also reveals the original mason marks on the travertine blocks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-colosseum-amber/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-colosseum-amber/10 rounded-full blur-3xl" />
        <motion.div 
          initial={{ rotate: 2 }}
          whileInView={{ rotate: 0 }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]"
        >
          <Badge>Aerial View 2024</Badge>
          <img 
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200" 
            alt="Restoration Work" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Facts = () => (
  <section id="facts" className="py-24 bg-colosseum-linen overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="Did You Know?" subtitle="Surprising Secrets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { 
            t: "Naval Battles", 
            d: "The arena could be flooded with water to stage 'Naumachiae'—full-scale mock sea battles with real ships.",
            icon: <Waves className="w-6 h-6" />
          },
          { 
            t: "The Colossus", 
            d: "It's named after the 'Colossus of Nero', a 100ft bronze statue that stood nearby, not for its own size.",
            icon: <Zap className="w-6 h-6" />
          },
          { 
            t: "Botanical Oasis", 
            d: "In the 1800s, the ruins became a unique microclimate, home to over 400 species of rare exotic plants.",
            icon: <Leaf className="w-6 h-6" />
          },
          { 
            t: "The Quarry", 
            d: "Much of the outer marble facade was looted to build St. Peter's Basilica and other Roman palaces.",
            icon: <Building2 className="w-6 h-6" />
          },
          { 
            t: "Animal Toll", 
            d: "In the inaugural 100-day games, over 9,000 wild animals were killed in the arena.",
            icon: <Skull className="w-6 h-6" />
          },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="relative bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl font-display text-black/[0.03] group-hover:text-colosseum-amber/5 transition-colors select-none">
              0{i + 1}
            </div>
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-colosseum-amber/10 flex items-center justify-center text-colosseum-amber mb-6 group-hover:bg-colosseum-amber group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h4 className="relative z-10 text-lg font-display mb-3 text-colosseum-ink">{item.t}</h4>
            <p className="relative z-10 text-xs text-colosseum-ink/60 leading-relaxed">{item.d}</p>
            <div className="relative z-10 mt-6 pt-6 border-t border-black/5 w-full">
              <span className="text-[10px] font-bold uppercase tracking-widest text-colosseum-amber/40 group-hover:text-colosseum-amber transition-colors">
                Discovery #0{i + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionHeading title="The Stone Giant" subtitle="Gallery" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
      {[
        { s: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200", cap: "Sunset over the arches" },
        { s: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&q=80&w=600", cap: "Travertine details" },
        { s: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1515542672103-d84767ad2c58?auto=format&fit=crop&q=80&w=600", cap: "The Hypogeum tunnels" },
        { s: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1599933334297-516558e151cf?auto=format&fit=crop&q=80&w=600", cap: "Arena floor view" },
        { s: "col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=1200", cap: "Interior panorama" },
        { s: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600", cap: "Roman Forum view" },
        { s: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e?auto=format&fit=crop&q=80&w=600", cap: "Night illumination" },
        { s: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&q=80&w=600", cap: "Aerial perspective" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 0.98 }}
          className={`${item.s} rounded-2xl overflow-hidden shadow-lg group relative cursor-pointer`}
        >
          <img 
            src={item.img} 
            alt={`Gallery ${i}`} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <span className="text-white text-sm font-medium tracking-wide">{item.cap}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Visit = () => (
  <section className="py-24">
    <div className="relative h-[400px] mb-16 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2000" 
        alt="Visit Header" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
        <div className="max-w-2xl px-6">
          <h2 className="text-5xl font-display text-white mb-4">Plan Your Journey</h2>
          <p className="text-white/80 font-serif text-lg">Experience the grandeur of Rome in person.</p>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: <Clock />, t: "Opening Hours", d: "Daily from 8:30 AM until one hour before sunset." },
        { icon: <Ticket />, t: "Tickets", d: "Standard entry: €16. Includes Roman Forum and Palatine Hill." },
        { icon: <MapPin />, t: "Location", d: "Piazza del Colosseo, 1, 00184 Roma RM, Italy." },
      ].map((item, i) => (
        <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-black/5 text-center group hover:bg-colosseum-amber transition-colors">
          <div className="w-16 h-16 rounded-full bg-colosseum-amber/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20">
            {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-colosseum-amber group-hover:text-white" })}
          </div>
          <h4 className="text-xl font-display mb-4 group-hover:text-white">{item.t}</h4>
          <p className="text-colosseum-ink/60 group-hover:text-white/80 leading-relaxed">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-colosseum-ink text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-colosseum-ink font-display font-bold">C</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">COLOSSEUM</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Preserving the legacy of Rome's greatest architectural achievement for future generations.
          </p>
          <div className="flex gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                <Star className="w-4 h-4 text-white/40" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-colosseum-amber">Sections</h5>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#history" className="hover:text-white transition-colors">History & Timeline</a></li>
            <li><a href="#games" className="hover:text-white transition-colors">The Gladiator Games</a></li>
            <li><a href="#daily" className="hover:text-white transition-colors">Daily Life in Rome</a></li>
            <li><a href="#restoration" className="hover:text-white transition-colors">Current Restoration</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-colosseum-amber">Quick Facts</h5>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex justify-between"><span>Capacity:</span> <span className="text-white">50,000 - 80,000</span></li>
            <li className="flex justify-between"><span>Built:</span> <span className="text-white">70 - 80 AD</span></li>
            <li className="flex justify-between"><span>Material:</span> <span className="text-white">Travertine & Tuff</span></li>
            <li className="flex justify-between"><span>Status:</span> <span className="text-white">UNESCO Site</span></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-colosseum-amber">Newsletter</h5>
          <p className="text-sm text-white/40 mb-6">Get updates on new discoveries and events.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-colosseum-amber transition-colors"
            />
            <button className="bg-colosseum-amber p-2 rounded-lg hover:bg-amber-600 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
        <p>© 2026 Eternal Arena Project. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookie Settings</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-colosseum-amber selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <HistoryTimeline />
        <Architecture />
        <TheGames />
        <DailyLife />
        <Restoration />
        <Facts />
        <Legacy />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
