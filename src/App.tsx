import Hero from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent-cyan/30 selection:text-white font-sans">
      <Hero />
      <Services />
      <Portfolio />

      <footer className="py-12 border-t border-white/5 bg-black/20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-text-muted font-mono text-sm">
            © 2026 AiGen Systems. All Systems Nominal.
          </p>
          <div className="flex justify-center gap-6 mt-4 opacity-50">
            <span className="text-xs">Tailscale Secure Node</span>
            <span className="text-xs">Optimized for Chrome</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
