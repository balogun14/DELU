"use client";

import Icon from "@/app/components/shared/Icon";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

const conversations = [
  {
    id: "conv-1", name: "Sarah K.", initial: "S", lastMessage: "Yes, the portion size is perfect for two!", time: "10:42 AM",
    tag: "Food", tagColor: "bg-tertiary-container text-on-tertiary-container", unread: 0, online: true,
  },
  {
    id: "conv-2", name: "Mark T.", initial: "M", lastMessage: "Are you still selling the textbook?", time: "Yesterday",
    tag: "Product", tagColor: "bg-secondary-container text-on-secondary-container", unread: 1, online: false,
  },
  {
    id: "conv-3", name: "Elena R.", initial: "E", lastMessage: "Thanks for the tutoring session! Helped a lot.", time: "Mon",
    tag: "Service", tagColor: "bg-surface-dim text-on-surface", unread: 0, online: false,
  },
];

const initialMessages: Message[] = [
  { id: 1, sender: "them", text: "Hi! I saw your listing for the Jollof rice. It looks amazing. 😋 Are you making a fresh batch today?", time: "10:35 AM" },
  { id: 2, sender: "me", text: "Hey Sarah! Thank you! Yes, I just finished cooking a fresh batch about 30 minutes ago. It's perfectly warm right now.", time: "10:38 AM", status: "read" },
  { id: 3, sender: "them", text: "Perfect! I'd love to grab two portions. Are they quite large? My roommate wants some too.", time: "10:40 AM" },
  { id: 4, sender: "me", text: "Yes, the portion size is perfect for two! I pack them in standard 24oz containers.", time: "10:42 AM", status: "delivered" },
];

const autoReplies = [
  "That sounds great! When can I pick it up? 🤔",
  "Perfect, I'll be at the library foyer around 2 PM. Does that work?",
  "Awesome, see you then! Can't wait to try it 😊",
  "One more thing — do you have any drinks to go with it?",
  "Thanks so much! You're the best seller on ADEL 💚",
];

function formatTime(): string {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${m} ${ampm}`;
}

export default function InboxPage() {
  const [activeConv, setActiveConv] = useState("conv-1");
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [replyIndex, setReplyIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isTyping, scrollToBottom]);

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    const newMsg: Message = {
      id: Date.now(),
      sender: "me",
      text,
      time: formatTime(),
      status: "sent",
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Auto-resize textarea back
    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
    }

    // Simulate delivery after 500ms
    setTimeout(() => {
      setChatMessages((prev) =>
        prev.map((m) => (m.id === newMsg.id ? { ...m, status: "delivered" } : m))
      );
    }, 500);

    // Simulate typing indicator then auto-reply
    if (replyIndex < autoReplies.length) {
      const currentReplyIndex = replyIndex;
      setReplyIndex((prev) => prev + 1);

      setTimeout(() => setIsTyping(true), 1200);

      setTimeout(() => {
        setIsTyping(false);
        const reply: Message = {
          id: Date.now() + 1,
          sender: "them",
          text: autoReplies[currentReplyIndex],
          time: formatTime(),
        };
        setChatMessages((prev) => [...prev, reply]);

        // Mark our last message as "read"
        setChatMessages((prev) =>
          prev.map((m) => (m.id === newMsg.id ? { ...m, status: "read" } : m))
        );
      }, 2500 + Math.random() * 1500);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
    // Auto-resize
    const ta = e.target;
    ta.style.height = "44px";
    ta.style.height = Math.min(ta.scrollHeight, 128) + "px";
  }

  return (
    <div className="flex h-[calc(100vh-64px)] md:h-[calc(100vh-0px)] overflow-hidden p-0 md:p-6 gap-0 md:gap-6 relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Conversations List */}
      <aside className="hidden md:flex w-[340px] flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shrink-0"
        style={{ border: "1px solid rgba(171,173,175,0.1)", boxShadow: "0 4px 32px rgba(44,47,49,0.04)" }}
      >
        <div className="p-5" style={{ borderBottom: "1px solid rgba(229,233,235,0.5)" }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-bold text-lg text-on-surface">Messages</h3>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">3 unread</span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {["All", "Buying", "Selling"].map((f, i) => (
              <button key={f} className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                i === 0 ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1 no-scrollbar">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConv(conv.id)}
              className={`w-full text-left relative p-3 rounded-xl cursor-pointer transition-colors ${
                conv.id === activeConv ? "bg-primary/5" : "hover:bg-surface-container-low"
              }`}
              style={conv.id === activeConv ? { border: "1px solid rgba(0,105,71,0.1)" } : { border: "1px solid transparent" }}
            >
              {conv.id === activeConv && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
              )}
              <div className="flex gap-3">
                <div className="relative w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline font-bold shrink-0">
                  {conv.initial}
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-inverse-primary rounded-full" style={{ border: "2px solid white" }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-headline font-semibold text-sm text-on-surface truncate">{conv.name}</h4>
                    <span className={`text-xs font-medium ${conv.id === activeConv ? "text-primary" : "text-on-surface-variant"}`}>{conv.time}</span>
                  </div>
                  <p className={`text-xs truncate pr-4 ${conv.unread ? "text-on-surface font-bold" : "text-on-surface-variant"}`}>
                    {conv.lastMessage}
                  </p>
                  <div className="mt-2 flex gap-1.5 items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${conv.tagColor}`}>
                      {conv.tag}
                    </span>
                    {conv.unread > 0 && (
                      <span className="w-4 h-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <section className="flex-1 flex flex-col bg-surface-container-lowest rounded-none md:rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(171,173,175,0.1)", boxShadow: "0 4px 32px rgba(44,47,49,0.04)" }}
      >
        {/* Chat Header */}
        <div className="px-6 py-4 bg-white/60 backdrop-blur-md flex items-center justify-between sticky top-0 z-10"
          style={{ borderBottom: "1px solid rgba(229,233,235,0.5)" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline font-bold">
              S
            </div>
            <div>
              <h3 className="font-headline font-bold text-base text-on-surface flex items-center gap-2">
                Sarah K.
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-surface-container-high text-on-surface-variant flex items-center gap-1"
                  style={{ border: "1px solid rgba(171,173,175,0.2)" }}
                >
                  <Icon name="verified" filled size={12} className="text-primary" />
                  Verified Student
                </span>
              </h3>
              <p className="text-xs text-outline font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary inline-block" />
                Online now
              </p>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <Icon name="more_vert" size={20} />
          </button>
        </div>

        {/* Context Card */}
        <div className="px-6 py-3 bg-surface-container-lowest"
          style={{ borderBottom: "1px solid rgba(229,233,235,0.5)" }}
        >
          <div className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors cursor-pointer"
            style={{ border: "1px solid rgba(171,173,175,0.05)" }}
          >
            <div className="w-16 h-16 rounded-lg shrink-0 bg-tertiary-container/20 flex items-center justify-center text-tertiary">
              <Icon name="restaurant" filled size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-tertiary-container text-on-tertiary-container uppercase tracking-wider">Food</span>
                <span className="text-xs text-outline-variant font-medium">Pickup Today</span>
              </div>
              <h4 className="font-headline font-semibold text-sm text-on-surface truncate">Authentic Jollof Rice (Spicy)</h4>
              <p className="text-sm font-bold text-primary mt-0.5">3,450 HUF / portion</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-dim transition-colors whitespace-nowrap">
              Make Offer
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-background/50 no-scrollbar">
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-[10px] font-medium text-on-surface-variant tracking-wide">TODAY</span>
          </div>

          {chatMessages.map((msg) =>
            msg.sender === "them" ? (
              <div key={msg.id} className="flex gap-3 max-w-[80%] animate-[fadeSlideUp_0.3s_ease-out]">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline font-bold text-xs mt-auto shrink-0">S</div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-surface-container-lowest text-sm text-on-surface leading-relaxed"
                    style={{ border: "1px solid rgba(171,173,175,0.1)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-outline-variant font-medium ml-1">{msg.time}</span>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex gap-3 max-w-[80%] ml-auto justify-end animate-[fadeSlideUp_0.3s_ease-out]">
                <div className="flex flex-col gap-1 items-end">
                  <div className="px-4 py-3 rounded-2xl rounded-br-sm bg-gradient-to-br from-primary to-primary-dim text-white text-sm leading-relaxed"
                    style={{ boxShadow: "0 2px 8px rgba(0,105,71,0.15)" }}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-outline-variant font-medium mr-1 flex items-center gap-1">
                    {msg.time}
                    <Icon
                      name={msg.status === "read" ? "done_all" : msg.status === "delivered" ? "done_all" : "done"}
                      size={12}
                      className={msg.status === "read" ? "text-primary" : "text-outline-variant"}
                    />
                  </span>
                </div>
              </div>
            )
          )}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3 max-w-[80%] animate-[fadeSlideUp_0.2s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline font-bold text-xs mt-auto shrink-0">S</div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-surface-container-lowest"
                style={{ border: "1px solid rgba(171,173,175,0.1)" }}
              >
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-outline-variant animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-outline-variant animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-outline-variant animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-surface-container-lowest" style={{ borderTop: "1px solid rgba(229,233,235,0.5)" }}>
          <div className="flex items-end gap-3 bg-surface-container rounded-2xl p-2 transition-all duration-200 focus-within:bg-surface-container-lowest focus-within:ring-1 focus-within:ring-primary/20"
            style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)" }}
          >
            <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors shrink-0 mb-0.5">
              <Icon name="add_circle" size={22} />
            </button>
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2.5 text-sm font-body text-on-surface placeholder:text-outline max-h-32 min-h-[44px] outline-none"
              placeholder="Type a message..."
              rows={1}
            />
            <div className="flex items-center gap-1 mb-0.5 shrink-0">
              <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors">
                <Icon name="mood" size={22} />
              </button>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary-dim transition-all active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ boxShadow: inputValue.trim() ? "0 2px 8px rgba(0,105,71,0.25)" : "none" }}
              >
                <Icon name="send" size={20} />
              </button>
            </div>
          </div>
          <p className="text-[10px] text-center text-outline-variant mt-2 font-medium">
            Press <kbd className="font-sans px-1 bg-surface-container-high rounded mx-0.5">Enter</kbd> to send, <kbd className="font-sans px-1 bg-surface-container-high rounded mx-0.5">Shift + Enter</kbd> for new line
          </p>
        </div>
      </section>
    </div>
  );
}
