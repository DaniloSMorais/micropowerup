"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ nome: "", whatsapp: "" });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const zapUrl = "https://wa.me/5543998419973";

  return (
    <div className="bg-[#050a15] text-white font-sans selection:bg-cyan-500/30 min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-5xl">
          <svg viewBox="0 0 900 120" className="w-full h-auto drop-shadow-[0_0_15px_rgba(8,145,178,0.3)]">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <text x="50%" y="90" textAnchor="middle" className="font-black italic" style={{ fontSize: "85px", fill: "white", fontFamily: "sans-serif" }}>
              MICRO POWER <tspan style={{ fill: "url(#grad)" }}> UP</tspan>
            </text>
          </svg>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mt-6 mb-10 italic">
            Potencialize o seu negócio com Inteligência Artificial
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection("solucoes")} className="bg-cyan-600 hover:bg-cyan-500 px-10 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">Nossas Soluções</button>
            <button onClick={() => scrollToSection("contato")} className="border border-slate-700 hover:bg-slate-800 px-10 py-4 rounded-full font-bold transition-all">Contato</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SOLUÇÕES (REPETIDA PARA MANTER INTEGRIDADE) */}
      <section id="solucoes" className="py-24 px-6 bg-[#080f1e]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 italic text-cyan-400 tracking-wider uppercase">Upgrade no seu negócio</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* CARD 1 */}
            <div className="flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-3xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 shadow-xl group">
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">Soluções Personalizadas</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">Atendemos as necessidades reais de Pequenas e Médias Empresas. Automatize processos burocráticos e foque no seu cliente.</p>
              <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 mb-8 italic text-slate-400 text-xs italic">
                "(...) Entre aquelas que já implementaram a IA, a maior parte está vendo valor imediato: 91% disseram que a tecnologia ajudou a tornar o negócio mais bem-sucedido."
              </blockquote>
              <div className="mt-auto"><a href={zapUrl} target="_blank" className="inline-block w-full text-center bg-transparent border border-cyan-600 text-cyan-400 font-bold py-3 rounded-xl hover:bg-cyan-600 hover:text-white transition-all uppercase text-xs">Fale Conosco</a></div>
            </div>
            {/* CARD 2 */}
            <div className="flex flex-col p-8 bg-gradient-to-br from-[#0a1525] to-black border border-emerald-500/30 rounded-3xl transition-all duration-300 hover:scale-105 shadow-2xl relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 uppercase tracking-tight italic">Menu Ligeiro</h3>
              <ul className="space-y-4 mb-8 text-sm text-slate-300 flex-grow">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✓</span> Automação completa para bares e restaurantes.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✓</span> Atendimento via IA Generativa.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">✓</span> Local e Delivery via QRCODE.</li>
              </ul>
              <div className="mt-auto"><a href="https://www.menuligeiro.com.br" target="_blank" className="inline-block w-full text-center bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-500 transition-all uppercase text-sm">Saiba mais</a></div>
            </div>
            {/* CARD 3 */}
            <div className="flex flex-col p-8 bg-slate-900/50 border border-slate-800 rounded-3xl transition-all duration-300 hover:scale-105 hover:border-purple-500/50 shadow-xl group">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 uppercase tracking-tight">Cursos IA</h3>
              <p className="text-slate-300 mb-6 text-sm">Treinamentos práticos de IA Generativa, Engenharia de Prompt e Construção de Agentes para Pequenos Negócios.</p>
              <div className="mt-auto"><a href="https://hotmart.com/..." target="_blank" className="inline-block w-full text-center bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-500 transition-all text-sm uppercase">Saiba mais</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO E REDES SOCIAIS */}
      <section id="contato" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: REDES SOCIAIS */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold italic text-cyan-400 uppercase tracking-tighter">Siga-nos nas redes</h3>
            <p className="text-slate-400 leading-relaxed">Fique por dentro das últimas novidades sobre IA e automação acompanhando nossos canais oficiais.</p>
            
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/MicroPowerUP" target="_blank" className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-pink-500/10 hover:border-pink-500/50 transition-all group">
                <div className="p-3 bg-pink-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">Instagram</p>
                  <p className="font-bold text-slate-200">@MicroPowerUP</p>
                </div>
              </a>

              <a href="https://www.youtube.com/@MicroPowerUP" target="_blank" className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-red-500/10 hover:border-red-500/50 transition-all group">
                <div className="p-3 bg-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">YouTube</p>
                  <p className="font-bold text-slate-200">Micro Power UP</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-900/40 border border-slate-800 rounded-2xl group">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-black text-slate-500">E-mail</p>
                  <p className="font-bold text-slate-200 text-sm md:text-base break-all">micropoweruptreinamentos@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <div className="bg-gradient-to-b from-slate-900 to-black p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase italic tracking-tighter">Envie uma mensagem</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Seu Nome" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500 border border-transparent transition-all" onChange={(e) => setFormData({...formData, nome: e.target.value})}/>
              <input type="text" placeholder="WhatsApp" className="w-full bg-slate-800 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-500 border border-transparent transition-all" onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}/>
              <button onClick={() => window.open(`${zapUrl}?text=Olá! Me chamo ${formData.nome}.`, "_blank")} className="w-full bg-cyan-600 hover:bg-cyan-500 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">Solicitar Consultoria</button>
            </div>
          </div>

        </div>
      </section>

    {/* NOVA SEÇÃO: NOSSA MISSÃO */}
      <section className="py-24 px-6 bg-[#0a1120] relative overflow-hidden">
        {/* Detalhe visual de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 mb-8">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black italic mb-10 tracking-tighter">NOSSA MISSÃO</h2>
          
          {/* Adicionado text-justify abaixo */}
          <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed text-justify">
            <p>
              A <span className="text-white font-bold">Micro Power UP</span> nasceu com uma missão clara: potencializar pequenos e médios negócios com apoio da Inteligência Artificial e de aplicações de software.
            </p>
            <p>
              Nós não entregamos apenas software; entregamos <span className="text-emerald-400 font-bold underline underline-offset-8 decoration-emerald-500/30">liberdade e escala</span>. Nossa especialidade é transformar operações caóticas em engrenagens automáticas de vendas.
            </p>
            <p className="text-slate-400 text-base md:text-lg">
              Sua empresa não precisa ser gigante para ter uma gestão de elite. Profissionalize seu atendimento, elimine erros humanos e coloque o seu negócio no mesmo nível de competitividade das grandes redes.
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-cyan-400 font-black tracking-[0.2em] mb-8 uppercase text-sm">O futuro do seu negócio começa agora</p>
            <a 
              href={zapUrl} 
              target="_blank" 
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-cyan-400 hover:text-black transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Conversar no WhatsApp
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-700 border-t border-slate-900 bg-black">
        <p className="font-bold tracking-[0.3em] text-slate-500 text-xs">MICRO POWER UP</p>
        <p className="text-[10px] mt-2 opacity-30 uppercase tracking-[0.5em]">Jacarezinho - PR</p>
      </footer>
    </div>
  );
}