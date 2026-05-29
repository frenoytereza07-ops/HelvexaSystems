import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLang } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Animated Demo Components
function StarterDemo() {
  const [step, setStep] = useState(0);
  const { lang } = useLang();

  const labels: Record<string, { missed: string; aiName: string; secs: string; msg1: string; msg2: string; msg3: string; reviewSent: string; jobDone: string; chatAssist: string; visitor: string; question: string; pricing: { starter: string; growth: string; premium: string } }> = {
    en: { missed: "Missed Call", aiName: "AI Assistant", secs: "47 sec", msg1: "Hey! Saw you called. How can I help?", msg2: "Need a quote for plumbing", msg3: "Perfect! What's your address?", reviewSent: "Review Request Sent", jobDone: "Job completed • 2 hours ago", chatAssist: "Chat Assistant", visitor: "Visitor on pricing page", question: "Can you help me choose a plan?", pricing: { starter: "Starter", growth: "Growth", premium: "Premium" } },
    fr: { missed: "Appel manqué", aiName: "Assistant IA", secs: "47 s", msg1: "Salut ! Vous avez appelé. Comment puis-je aider ?", msg2: "Devis pour plomberie", msg3: "Parfait ! Quelle est votre adresse ?", reviewSent: "Demande d'avis envoyée", jobDone: "Tâche terminée • il y a 2 h", chatAssist: "Assistant Chat", visitor: "Visiteur sur la page tarifs", question: "Pouvez-vous m'aider à choisir ?", pricing: { starter: "Starter", growth: "Growth", premium: "Premium" } },
    it: { missed: "Chiamata persa", aiName: "Assistente IA", secs: "47 sec", msg1: "Ciao! Hai chiamato. Come posso aiutarti?", msg2: "Preventivo per idraulica", msg3: "Perfetto! Qual è il tuo indirizzo?", reviewSent: "Richiesta recensione inviata", jobDone: "Lavoro completato • 2 ore fa", chatAssist: "Assistente Chat", visitor: "Visitatore su pagina prezzi", question: "Puoi aiutarmi a scegliere?", pricing: { starter: "Starter", growth: "Growth", premium: "Premium" } },
    hi: { missed: "मिस्ड कॉल", aiName: "AI सहायक", secs: "47 सेकंड", msg1: "नमस्ते! आपने कॉल की थी। कैसे मदद करूं?", msg2: "प्लंबिंग का कोटेशन चाहिए", msg3: "बढ़िया! आपका पता क्या है?", reviewSent: "रिव्यू अनुरोध भेजा गया", jobDone: "काम पूरा हुआ • 2 घंटे पहले", chatAssist: "चैट सहायक", visitor: "प्राइसिंग पेज पर विज़िटर", question: "क्या आप प्लान चुनने में मदद करेंगे?", pricing: { starter: "स्टार्टर", growth: "ग्रोथ", premium: "प्रीमियम" } },
    de: { missed: "Verpasster Anruf", aiName: "KI-Assistent", secs: "47 Sek.", msg1: "Hi! Sie haben angerufen. Wie kann ich helfen?", msg2: "Angebot für Klempnerarbeiten", msg3: "Perfekt! Wie ist Ihre Adresse?", reviewSent: "Bewertungsanfrage gesendet", jobDone: "Auftrag erledigt • vor 2 Std.", chatAssist: "Chat-Assistent", visitor: "Besucher auf Preisseite", question: "Können Sie mir einen Plan empfehlen?", pricing: { starter: "Starter", growth: "Growth", premium: "Premium" } },
    es: { missed: "Llamada perdida", aiName: "Asistente IA", secs: "47 seg", msg1: "¡Hola! Vimos tu llamada. ¿Cómo puedo ayudar?", msg2: "Presupuesto de fontanería", msg3: "¡Perfecto! ¿Cuál es tu dirección?", reviewSent: "Solicitud de reseña enviada", jobDone: "Trabajo completado • hace 2 horas", chatAssist: "Asistente de Chat", visitor: "Visitante en página de precios", question: "¿Me ayudas a elegir un plan?", pricing: { starter: "Starter", growth: "Growth", premium: "Premium" } },
  };
  const L = labels[lang] || labels.en;

  useEffect(() => {
    const interval = setInterval(() => setStep((s) => (s + 1) % 3), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-slate-950/50 p-4 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
      <div className="relative mx-auto h-full w-[280px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="missed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute inset-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs text-zinc-500">{L.missed}</span>
              </div>
              <div className="space-y-2">
                <div className="rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-2.5 max-w-[85%]">
                  <p className="text-[11px] text-zinc-400 mb-0.5">{L.aiName}</p>
                  <p className="text-sm text-white">{L.msg1}</p>
                </div>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }} className="ml-auto rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-2.5 max-w-[75%]">
                  <p className="text-sm text-white">{L.msg2}</p>
                </motion.div>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }} className="rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-2.5 max-w-[85%]">
                  <p className="text-[11px] text-zinc-400 mb-0.5">{L.aiName} • {L.secs}</p>
                  <p className="text-sm text-white">{L.msg3}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div key="review" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 ring-1 ring-amber-500/30">
                <span className="text-3xl">⭐</span>
              </motion.div>
              <p className="text-sm font-medium text-white">{L.reviewSent}</p>
              <p className="mt-1 text-xs text-zinc-500">{L.jobDone}</p>
              <div className="mt-4 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-amber-400">★</motion.span>
                ))}
              </div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="chat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute inset-0">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 backdrop-blur">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center"><span className="text-[10px]">AI</span></div>
                  <span className="text-xs font-medium text-white">{L.chatAssist}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] text-zinc-500">{L.visitor}</div>
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-7 overflow-hidden rounded-lg bg-zinc-800 px-3 flex items-center">
                    <span className="text-xs text-zinc-300 whitespace-nowrap">{L.question}</span>
                  </motion.div>
                  <div className="flex gap-1.5">
                    <span className="rounded-md bg-emerald-600/20 px-2 py-1 text-[10px] text-emerald-400 ring-1 ring-emerald-600/30">{L.pricing.starter}</span>
                    <span className="rounded-md bg-violet-600/20 px-2 py-1 text-[10px] text-violet-400 ring-1 ring-violet-600/30">{L.pricing.growth}</span>
                    <span className="rounded-md bg-fuchsia-600/20 px-2 py-1 text-[10px] text-fuchsia-400 ring-1 ring-fuchsia-600/30">{L.pricing.premium}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {[0,1,2].map(i => <div key={i} className={`h-1 rounded-full transition-all ${i === step ? 'w-6 bg-emerald-500' : 'w-1 bg-zinc-700'}`} />)}
      </div>
    </div>
  );
}

function GrowthDemo() {
  const [activeCall, setActiveCall] = useState(false);
  const { lang } = useLang();

  const labels: Record<string, { recept: string; live: string; today: string; booked: string; live2: string; newLead: string; dm: string; replies: string; resp: string; bookedPct: string }> = {
    en: { recept: "AI Receptionist", live: "Live call • Booking appointment", today: "Today", booked: "3 booked", live2: "Live", newLead: "New lead", dm: "DM Automation", replies: "12 replies today", resp: "Response time: 18s avg", bookedPct: "94% booked" },
    fr: { recept: "Standardiste IA", live: "Appel en cours • Prise de RDV", today: "Aujourd'hui", booked: "3 réservés", live2: "En direct", newLead: "Nouveau prospect", dm: "Automation DM", replies: "12 réponses aujourd'hui", resp: "Temps moy : 18 s", bookedPct: "94% réservés" },
    it: { recept: "Receptionist IA", live: "Chiamata live • Prenotazione", today: "Oggi", booked: "3 prenotati", live2: "Live", newLead: "Nuovo lead", dm: "Automazione DM", replies: "12 risposte oggi", resp: "Tempo medio: 18s", bookedPct: "94% prenotati" },
    hi: { recept: "AI रिसेप्शनिस्ट", live: "लाइव कॉल • अपॉइंटमेंट बुक", today: "आज", booked: "3 बुक", live2: "लाइव", newLead: "नया लीड", dm: "DM ऑटोमेशन", replies: "आज 12 जवाब", resp: "औसत समय: 18s", bookedPct: "94% बुक" },
    de: { recept: "KI-Rezeptionist", live: "Live-Call • Buchung", today: "Heute", booked: "3 gebucht", live2: "Live", newLead: "Neuer Lead", dm: "DM-Automation", replies: "12 Antworten heute", resp: "Antwortzeit: Ø 18s", bookedPct: "94% gebucht" },
    es: { recept: "Recepcionista IA", live: "Llamada en vivo • Reservando", today: "Hoy", booked: "3 reservados", live2: "En vivo", newLead: "Nuevo lead", dm: "Automatización DM", replies: "12 respuestas hoy", resp: "Tiempo medio: 18s", bookedPct: "94% reservado" },
  };
  const L = labels[lang] || labels.en;

  useEffect(() => {
    const interval = setInterval(() => setActiveCall(prev => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-slate-950/50 p-4 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent" />
      <div className="relative grid h-full grid-cols-2 gap-3">
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className={`h-2 w-2 rounded-full ${activeCall ? 'bg-violet-500 animate-pulse' : 'bg-zinc-600'}`} />
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">{L.recept}</span>
          </div>
          <div className="flex h-[70px] items-center justify-center">
            <div className="flex items-end gap-[3px] h-12">
              {[...Array(12)].map((_, i) => (
                <motion.div key={i} className="w-[3px] rounded-full bg-violet-500" animate={{ height: activeCall ? [8, Math.random() * 32 + 8, 8] : 8 }} transition={{ duration: 0.4, repeat: activeCall ? Infinity : 0, delay: i * 0.05 }} />
              ))}
            </div>
          </div>
          <AnimatePresence>
            {activeCall && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center">
                <p className="text-[11px] text-violet-400">{L.live}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">{L.today}</span>
            <span className="text-[10px] text-emerald-400">{L.booked}</span>
          </div>
          <div className="space-y-1.5">
            {[
              { time: "10:30", name: "Sarah M.", status: "confirmed" },
              { time: "2:00", name: "Mike R.", status: "confirmed" },
              { time: "4:15", name: L.newLead, status: "auto" },
            ].map((apt, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex items-center gap-2 rounded-lg bg-zinc-800/50 px-2 py-1.5">
                <span className="text-[10px] font-mono text-zinc-500">{apt.time}</span>
                <span className="text-[11px] text-white truncate">{apt.name}</span>
                {apt.status === "auto" && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto rounded bg-violet-600/20 px-1.5 py-0.5 text-[9px] text-violet-400">AI</motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-span-2 relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-1">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-zinc-900 flex items-center justify-center"><span className="text-[8px]">IG</span></div>
              <div className="h-5 w-5 rounded-full bg-green-600 ring-2 ring-zinc-900 flex items-center justify-center"><span className="text-[8px]">WA</span></div>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">{L.dm}</span>
            <span className="ml-auto text-[10px] text-zinc-500">{L.replies}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 space-y-1">
              <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="h-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
              <div className="flex gap-3 text-[10px] text-zinc-600">
                <span>{L.resp}</span><span>•</span><span>{L.bookedPct}</span>
              </div>
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="h-8 w-8 rounded-full border-2 border-zinc-800 border-t-violet-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PremiumDemo() {
  const [flowStep, setFlowStep] = useState(0);
  const { lang } = useLang();

  const labels: Record<string, { workflow: string; live: string; adClick: string; qualify: string; book: string; close: string; brandedApp: string; whiteLabel: string; activeUsers: string; bookingsToday: string }> = {
    en: { workflow: "Custom Workflow", live: "Live", adClick: "Ad Click", qualify: "AI Qualify", book: "Book", close: "Close", brandedApp: "Your Branded App", whiteLabel: "WHITE-LABEL", activeUsers: "Active users", bookingsToday: "Bookings today" },
    fr: { workflow: "Workflow personnalisé", live: "Live", adClick: "Clic pub", qualify: "IA qualifie", book: "Réserver", close: "Conclure", brandedApp: "Votre App de marque", whiteLabel: "WHITE-LABEL", activeUsers: "Utilisateurs actifs", bookingsToday: "Réservations" },
    it: { workflow: "Workflow personalizzato", live: "Live", adClick: "Click ad", qualify: "IA qualifica", book: "Prenota", close: "Chiudi", brandedApp: "La tua App brandizzata", whiteLabel: "WHITE-LABEL", activeUsers: "Utenti attivi", bookingsToday: "Prenotazioni oggi" },
    hi: { workflow: "कस्टम वर्कफ़्लो", live: "लाइव", adClick: "Ad क्लिक", qualify: "AI जांच", book: "बुक", close: "क्लोज़", brandedApp: "आपका ब्रांडेड ऐप", whiteLabel: "व्हाइट-लेबल", activeUsers: "सक्रिय उपयोगकर्ता", bookingsToday: "आज की बुकिंग" },
    de: { workflow: "Eigener Workflow", live: "Live", adClick: "Ad-Klick", qualify: "KI prüft", book: "Buchen", close: "Abschluss", brandedApp: "Ihre Branded App", whiteLabel: "WHITE-LABEL", activeUsers: "Aktive Nutzer", bookingsToday: "Buchungen heute" },
    es: { workflow: "Flujo Personalizado", live: "En vivo", adClick: "Clic en anuncio", qualify: "IA califica", book: "Reservar", close: "Cerrar", brandedApp: "Tu App de marca", whiteLabel: "WHITE-LABEL", activeUsers: "Usuarios activos", bookingsToday: "Reservas hoy" },
  };
  const L = labels[lang] || labels.en;

  useEffect(() => {
    const interval = setInterval(() => setFlowStep(s => (s + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: "📢", label: L.adClick },
    { icon: "🤖", label: L.qualify },
    { icon: "📅", label: L.book },
    { icon: "💰", label: L.close },
  ];

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-slate-950/50 p-4 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent" />
      <div className="relative h-full">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500">{L.workflow}</span>
          <span className="text-[10px] text-fuchsia-400">{L.live}</span>
        </div>
        <div className="relative">
          <div className="grid grid-cols-4 gap-2">
            {nodes.map((node, i) => (
              <div key={i} className="relative">
                <motion.div animate={{ scale: flowStep === i ? 1.1 : 1, boxShadow: flowStep === i ? "0 0 20px rgba(217, 70, 239, 0.5)" : "0 0 0px rgba(0,0,0,0)" }} className="relative z-10 flex flex-col items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${flowStep === i ? 'border-fuchsia-500/50 bg-fuchsia-500/20' : 'border-zinc-800 bg-zinc-900'} backdrop-blur transition-colors`}>
                    <span className="text-lg">{node.icon}</span>
                  </div>
                  <span className="mt-1.5 text-[9px] text-zinc-500 text-center leading-tight">{node.label}</span>
                </motion.div>
                {i < 3 && (
                  <div className="absolute left-[calc(50%+24px)] top-6 h-[2px] w-[calc(100%-24px)] -translate-y-1/2 bg-zinc-800">
                    <motion.div className="h-full bg-fuchsia-500" initial={{ width: "0%" }} animate={{ width: flowStep > i ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="relative h-[70px] w-[40px] rounded-lg border-2 border-zinc-700 bg-zinc-900 p-1">
              <div className="h-full w-full overflow-hidden rounded-[4px] bg-black">
                <div className="h-1.5 bg-zinc-800" />
                <div className="p-1 space-y-1">
                  <div className="h-1 w-full rounded bg-fuchsia-600/50" />
                  <div className="h-1 w-3/4 rounded bg-zinc-700" />
                  <div className="h-1 w-full rounded bg-zinc-700" />
                  <div className="mt-1 grid grid-cols-2 gap-0.5">
                    <div className="h-3 rounded bg-zinc-800" />
                    <div className="h-3 rounded bg-zinc-800" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-1 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-zinc-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs font-medium text-white">{L.brandedApp}</span>
                <span className="rounded bg-fuchsia-600/20 px-1.5 py-0.5 text-[9px] text-fuchsia-400 ring-1 ring-fuchsia-600/30">{L.whiteLabel}</span>
              </div>
              <div className="space-y-1">
                {[
                  { label: L.activeUsers, value: "1,247" },
                  { label: L.bookingsToday, value: "38" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">{stat.label}</span>
                    <motion.span key={stat.value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] font-mono text-white">{stat.value}</motion.span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  const { t, lang } = useLang();

  const packages = [
    { id: "starter", color: "emerald", popular: false, ...t.packages.starter },
    { id: "growth", color: "violet", popular: true, ...t.packages.growth },
    { id: "premium", color: "fuchsia", popular: false, ...t.packages.premium },
  ];

  return (
    <div key={lang} className="min-h-screen bg-[#050507] text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/20 via-[#050507] to-[#050507]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 -left-1/4 h-[600px] w-[800px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute top-0 -right-1/4 h-[600px] w-[800px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-violet-600 via-fuchsia-600 to-emerald-600 z-[100]" style={{ scaleX: scrollYProgress }} />

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-50 blur" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-black ring-1 ring-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs><linearGradient id="g" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#d946ef" /></linearGradient></defs>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-[17px] font-semibold tracking-tight">helvexa</div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500 -mt-1">AI Automation</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#packages" className="text-[14px] text-zinc-400 transition-colors hover:text-white">{t.nav.packages}</a>
            <a href="#how-it-works" className="text-[14px] text-zinc-400 transition-colors hover:text-white">{t.nav.how}</a>
            <a href="#results" className="text-[14px] text-zinc-400 transition-colors hover:text-white">{t.nav.results}</a>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a href="mailto:helvexaaiservice@gmail.com" className="hidden md:flex h-9 items-center gap-2 rounded-full bg-white px-4 text-[13px] font-medium text-black transition-all hover:bg-zinc-200">
              <span>{t.nav.contact}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={mobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-x-0 top-[68px] z-40 border-b border-white/5 bg-black/95 p-6 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-4">
              <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-zinc-300">{t.nav.packages}</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-zinc-300">{t.nav.how}</a>
              <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-zinc-300">{t.nav.results}</a>
              <a href="mailto:helvexaaiservice@gmail.com" className="mt-2 flex h-10 items-center justify-center rounded-full bg-white text-[14px] font-medium text-black">{t.nav.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero */}
        <section ref={heroRef} className="relative px-6 pb-20 pt-[140px]">
          <motion.div style={{ opacity, scale }} className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[900px] text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                </span>
                <span className="text-[12px] font-medium tracking-wide text-violet-300">{t.hero.badge}</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[clamp(40px,7vw,84px)] font-[650] leading-[0.95] tracking-[-0.02em]">
                {t.hero.title1}
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">{t.hero.title2}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-6 max-w-[640px] text-[18px] leading-relaxed text-zinc-400">{t.hero.subtitle}</motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="mailto:helvexaaiservice@gmail.com" className="group relative flex h-[48px] items-center gap-2 overflow-hidden rounded-full bg-white px-7 text-[15px] font-medium text-black transition-all hover:scale-[1.02]">
                  <span className="relative z-10">{t.hero.cta1}</span>
                  <svg className="relative z-10 transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#packages" className="flex h-[48px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 text-[15px] font-medium backdrop-blur transition-all hover:bg-white/10">{t.hero.cta2}</a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-zinc-500">
                {[t.hero.bullet1, t.hero.bullet2, t.hero.bullet3].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><path d="M20 6L9 17l-5-5"/></svg>
                    <span>{b}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative mx-auto mt-20 max-w-[1100px]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black/80 p-[1px] shadow-2xl shadow-black/50 backdrop-blur-3xl">
                <div className="relative overflow-hidden rounded-[27px] bg-[#0a0a0f]">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.1),transparent_50%)]" />
                  </div>
                  <div className="relative grid gap-6 p-6 md:grid-cols-3 md:p-8">
                    {[
                      { label: t.hero.statResponse, value: "47s", sub: t.hero.statResponseSub, trend: "-82%" },
                      { label: t.hero.statBookings, value: "127", sub: t.hero.statBookingsSub, trend: "+34%" },
                      { label: t.hero.statRevenue, value: "$48.2k", sub: t.hero.statRevenueSub, trend: "+56%" },
                    ].map((stat, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-5 backdrop-blur">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <p className="text-[12px] uppercase tracking-wider text-zinc-500">{stat.label}</p>
                            <span className={`text-[11px] font-medium ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-violet-400'}`}>{stat.trend}</span>
                          </div>
                          <p className="mt-3 text-[32px] font-[650] leading-none tracking-tight">{stat.value}</p>
                          <p className="mt-1 text-[13px] text-zinc-500">{stat.sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-x-20 -bottom-20 -z-10 h-[200px] bg-gradient-to-t from-violet-600/20 to-transparent blur-[80px]" />
            </motion.div>
          </motion.div>
        </section>

        {/* Packages */}
        <section id="packages" className="relative border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[700px] text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400">{t.packages.badge}</span>
              </div>
              <h2 className="text-[clamp(32px,5vw,52px)] font-[650] leading-[1.1] tracking-[-0.02em]">
                {t.packages.title1}<br />{t.packages.title2}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-zinc-400">{t.packages.subtitle}</p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-5">
              {packages.map((pkg, index) => (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative">
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                        <span className="text-[11px] font-medium uppercase tracking-wider text-violet-300">{t.packages.mostPopular}</span>
                      </div>
                    </div>
                  )}
                  <div className={`relative h-full overflow-hidden rounded-[28px] border bg-zinc-950/70 p-[1px] backdrop-blur-2xl transition-all duration-500 ${pkg.popular ? 'border-violet-500/30 shadow-[0_0_80px_-20px_rgba(139,92,246,0.3)] lg:scale-[1.02]' : 'border-white/10 hover:border-white/20'}`}>
                    <div className="relative flex h-full flex-col rounded-[27px] bg-[#08080b]">
                      <div className="relative border-b border-white/5 p-7">
                        <div className={`absolute inset-0 opacity-[0.15] ${pkg.color === 'emerald' ? 'bg-gradient-to-b from-emerald-600 to-transparent' : pkg.color === 'violet' ? 'bg-gradient-to-b from-violet-600 to-transparent' : 'bg-gradient-to-b from-fuchsia-600 to-transparent'}`} />
                        <div className="relative">
                          <div className={`text-[12px] font-semibold uppercase tracking-widest ${pkg.color === 'emerald' ? 'text-emerald-400' : pkg.color === 'violet' ? 'text-violet-400' : 'text-fuchsia-400'}`}>{pkg.name}</div>
                          <h3 className="mt-1.5 text-[26px] font-[650] tracking-tight">{pkg.title}</h3>
                          <p className="mt-3 text-[14px] leading-snug text-zinc-400">{pkg.desc}</p>
                        </div>
                      </div>
                      <div className="p-5">
                        {pkg.id === 'starter' && <StarterDemo />}
                        {pkg.id === 'growth' && <GrowthDemo />}
                        {pkg.id === 'premium' && <PremiumDemo />}
                      </div>
                      <div className="flex-1 px-7 pb-7">
                        <div className="space-y-3.5">
                          {pkg.features.map((feature, i) => (
                            <div key={i} className="flex gap-2.5">
                              <span className="text-[14px] leading-snug text-zinc-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                          <p className="text-[12px] leading-snug text-zinc-400">
                            <span className="font-medium text-zinc-300">{t.packages.onboardingLabel}</span> {pkg.onboarding}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-white/5 p-5">
                        <a href="mailto:helvexaaiservice@gmail.com" className={`group/btn relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-[14px] font-medium transition-all ${pkg.popular ? 'bg-white text-black hover:bg-zinc-100' : 'bg-white/5 text-white ring-1 ring-inset ring-white/10 hover:bg-white/10'}`}>
                          <span>{t.packages.cta}</span>
                          <svg className="transition-transform group-hover/btn:translate-x-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                        </a>
                        <p className="mt-2.5 text-center text-[11px] text-zinc-500">{t.packages.ctaSub}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="sticky top-[120px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-5">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400">{t.how.badge}</span>
                  </div>
                  <h2 className="text-[clamp(32px,4vw,44px)] font-[650] leading-[1.15] tracking-[-0.02em]">
                    {t.how.title1}<br />{t.how.title2}
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-zinc-400">{t.how.subtitle}</p>
                  <div className="mt-8">
                    <a href="mailto:helvexaaiservice@gmail.com" className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[14px] font-medium text-black transition-all hover:bg-zinc-200">
                      {t.how.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                {t.how.steps.map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="flex gap-6">
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-[15px] font-medium text-zinc-400 backdrop-blur transition-colors group-hover:border-violet-500/30 group-hover:text-violet-400">
                          0{i + 1}
                        </div>
                        <div className="absolute left-1/2 top-12 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent last:hidden" />
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="text-[20px] font-semibold tracking-tight">{item.title}</h3>
                          <span className="text-[12px] text-zinc-600">{item.detail}</span>
                        </div>
                        <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="border-y border-white/5 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08),_transparent_60%)] px-6 py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-[700px] text-center">
              <h2 className="text-[clamp(28px,4vw,40px)] font-[650] leading-[1.15] tracking-[-0.01em]">{t.results.title}</h2>
            </div>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.results.metrics.map((stat) => (
                <div key={stat.label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-[36px] font-[650] leading-none tracking-tight">{stat.metric}</div>
                    <div className="mt-2 text-[14px] font-medium text-white">{stat.label}</div>
                    <div className="mt-1 text-[12px] text-zinc-500">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {t.results.cases.map((useCase) => (
                <div key={useCase.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur">
                  <div className="text-2xl">{useCase.icon}</div>
                  <h3 className="mt-3 text-[17px] font-semibold">{useCase.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-snug text-zinc-400">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-[900px]">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15),_transparent_60%)] p-[1px]">
              <div className="relative overflow-hidden rounded-[31px] bg-[#08080b]/90 px-8 py-16 backdrop-blur-3xl md:px-16 md:py-20">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/20 blur-[100px]" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-[100px]" />
                <div className="relative text-center">
                  <h2 className="text-[clamp(32px,5vw,52px)] font-[650] leading-[1.05] tracking-[-0.02em]">
                    {t.cta.title1}<br />
                    <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.cta.title2}</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-[540px] text-[17px] leading-relaxed text-zinc-400">{t.cta.subtitle}</p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4">
                    <a href="mailto:helvexaaiservice@gmail.com" className="group relative inline-flex h-[52px] items-center gap-3 overflow-hidden rounded-full bg-white px-8 text-[16px] font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <span className="break-all">helvexaaiservice@gmail.com</span>
                    </a>
                    <p className="text-[13px] text-zinc-500">{t.cta.reply}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-[13px] text-zinc-500 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#gf)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs><linearGradient id="gf" x1="2" y1="2" x2="22" y2="22"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#d946ef" /></linearGradient></defs>
              </svg>
            </div>
            <span>{t.footer.rights}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:helvexaaiservice@gmail.com" className="transition-colors hover:text-zinc-300">{t.footer.contact}</a>
            <span>{t.footer.tag}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
