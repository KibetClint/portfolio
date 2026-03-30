import { useState, useEffect } from "react";
import { X, MessageCircle, Terminal } from "lucide-react";

const WHATSAPP_NUMBER = "254707632591";
const DEFAULT_MESSAGE =
  "Hi Clinton, I came across your portfolio and I'm interested in discussing a potential project. Could we schedule a time to connect?";

const TYPED_MESSAGE =
  "Hey there! 👋 Got a project idea or just want to say hi? I'd love to hear from you.";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  useEffect(() => {
    if (isOpen) {
      setDisplayedText("");
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedText(TYPED_MESSAGE.slice(0, i));
        if (i >= TYPED_MESSAGE.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat popup ── */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}>
        <div
          className="w-72 rounded-lg overflow-hidden border border-emerald-500/20 bg-[#050a0e] relative"
          style={{
            boxShadow:
              "0 0 40px rgba(0,200,106,0.12), 0 20px 60px rgba(0,0,0,0.6)",
          }}>
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.008) 2px, rgba(0,255,100,0.008) 4px)",
            }}
          />

          {/* Terminal title bar */}
          <div className="relative z-10 flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/15 bg-white/[0.02]">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
            <div className="flex items-center gap-1.5 ml-2 flex-1">
              <Terminal className="w-3 h-3 text-emerald-400/50" />
              <span className="font-mono text-[10px] text-white/25">
                chat.init()
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded border border-emerald-500/20 bg-emerald-500/5
                hover:border-emerald-500/40 hover:bg-emerald-500/10
                flex items-center justify-center text-white/40 hover:text-white/80
                transition-all duration-200">
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 relative z-10">
            {/* Message bubble */}
            <div className="rounded-lg border border-emerald-500/15 bg-black/40 p-3 mb-4 min-h-[76px]">
              {/* Sender label */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-[10px] text-emerald-400/60">
                  clinton.kibet
                </span>
                <span className="font-mono text-[10px] text-white/20 ml-auto">
                  just now
                </span>
              </div>
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                {displayedText}
                {isTyping && (
                  <span className="inline-flex gap-[3px] ml-1 align-middle">
                    <span className="w-1 h-1 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1 h-1 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1 h-1 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:300ms]" />
                  </span>
                )}
              </p>
            </div>

            {/* CTA button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5
                rounded font-mono font-semibold text-xs transition-all
                hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #00c96a, #00a8d4)",
                color: "#050a0e",
                boxShadow: "0 0 20px rgba(0,200,106,0.25)",
              }}>
              <MessageCircle className="w-3.5 h-3.5" />
              whatsapp.connect()
            </a>
          </div>
        </div>
      </div>

      {/* ── Floating button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #00a855, #0090b8)"
            : "linear-gradient(135deg, #00c96a, #00a8d4)",
          boxShadow:
            "0 0 24px rgba(0,200,106,0.35), 0 8px 24px rgba(0,0,0,0.4)",
        }}
        aria-label="Let's Talk">
        {/* Ping ring */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: "linear-gradient(135deg, #00c96a, #00a8d4)" }}
          />
        )}
        {/* Border ring */}
        <span className="absolute inset-0 rounded-full border border-emerald-400/30" />

        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
