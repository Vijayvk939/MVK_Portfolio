import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = ['#00ffff', '#0080ff', '#8000ff', '#ff00ff'];
    
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = 0.3 * (1 - distance / 120);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8 inline-block perspective-1000">
          <div className="relative w-40 h-40 transform-3d group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <span className="neon-text text-cyan-300">MVK</span>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 blur-xl animate-glow-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Machavarapu Vijaya Kumar
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm">
            Machavarapu Vijaya Kumar
          </span>
        </h1>

        <div className="mb-6 relative">
          <p className="text-xl md:text-2xl text-gray-300 relative z-10">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="text-cyan-400 animate-glow-pulse" size={24} />
              <span className="neon-text text-cyan-300">Full Stack Application Developer</span>
            </span>
          </p>
        </div>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-lg glass-strong rounded-2xl p-6 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
          Dynamic and results-oriented Application Developer with 2 years of hands-on experience
          in software development. Specialized in building scalable web applications using React,
          Node.js, and modern cloud technologies.
        </p>

        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          <a
            href="mailto:vijaymachaapu.m@gmail.com"
            className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10 font-semibold">Get in Touch</span>
            <div className="absolute inset-0 neon-glow text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/machavarapu-va-kumar-3334ba1b6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-8 py-4 glass-strong rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Linkedin size={20} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">LinkedIn</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </div>

        <button
          onClick={scrollToNext}
          className="group relative text-cyan-400 hover:text-cyan-300 transition-all duration-300 animate-float"
        >
          <ChevronDown size={40} className="neon-text group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown size={40} className="text-cyan-400/30 blur-sm animate-pulse" />
          </div>
        </button>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
    </section>
  );
}

export default Hero;
