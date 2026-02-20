import { MapPin, Phone, Globe, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[hsl(220,20%,6%)]">
      {/* Decorative saffron glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[hsl(25,95%,53%)] opacity-[0.07] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-[hsl(25,95%,53%)] opacity-[0.05] blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Hero contact banner */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-[hsl(25,95%,53%)] to-[hsl(35,95%,55%)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_60px_hsl(25,95%,53%,0.3)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(220,20%,6%)] opacity-70 mb-1">
              Get in Touch
            </p>
            <a
             
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-[hsl(220,20%,6%)] text-[hsl(25,95%,53%)] group-hover:rotate-12 transition-transform duration-300">
                <Phone className="h-7 w-7" />
              </div>
              <span className="text-4xl md:text-5xl font-black text-[hsl(220,20%,6%)] tracking-tight group-hover:tracking-wide transition-all duration-300">
               9910992965
              </span>
            </a>
          </div>
          <div className="hidden md:block text-[hsl(220,20%,6%)] opacity-30">
            <ArrowUpRight className="h-16 w-16" />
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-black tracking-tighter">
              <span className="text-[hsl(25,95%,53%)]">Career</span>
              <span className="text-[hsl(25,95%,68%)]">4s</span>
              <span className="text-[hsl(0,0%,40%)]">.com</span>
            </h2>
            <p className="text-sm text-[hsl(0,0%,50%)] leading-relaxed max-w-xs">
              Empowering careers through expert placement solutions, training, and consulting services.
            </p>
            <a
              href="https://career4s.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(25,95%,53%)] hover:text-[hsl(25,95%,68%)] transition-colors group w-fit"
            >
              <Globe className="h-4 w-4" />
              Visit career4s.com
              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Offices */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* New Delhi */}
            <div className="rounded-xl border border-[hsl(220,10%,15%)] bg-[hsl(220,15%,9%)] p-6 hover:border-[hsl(25,95%,53%,0.4)] transition-colors duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-[hsl(25,95%,53%,0.15)] text-[hsl(25,95%,53%)]">
                  <MapPin className="h-10 w-20" />
                </div>
                <h3 className="font-bold text-[hsl(0,0%,95%)] text-lg">Jasola , New Delhi</h3>
              </div>
              <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed group-hover:text-[hsl(0,0%,70%)] transition-colors">
                119, First Floor, DLF Tower A, Jasola, New Delhi – 110025
              </p>
            </div>

            {/* Faridabad */}
            {/* <div className="rounded-xl border border-[hsl(220,10%,15%)] bg-[hsl(220,15%,9%)] p-6 hover:border-[hsl(25,95%,53%,0.4)] transition-colors duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-[hsl(25,95%,53%,0.15)] text-[hsl(25,95%,53%)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-[hsl(0,0%,95%)] text-lg">Faridabad Haryana</h3>
              </div>
              <p className="text-sm text-[hsl(0,0%,55%)] leading-relaxed group-hover:text-[hsl(0,0%,70%)] transition-colors">
                Block E/1-58, Sec-11, Near YMCA University, Faridabad – 121006, HR
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(220,10%,12%)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[hsl(0,0%,35%)]">
          <span>© 2026 Career4s.com. All rights reserved.</span>
          {/* <span className="flex items-center gap-1">
            Made with <span className="text-[hsl(25,95%,53%)]">♥</span> in India
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
