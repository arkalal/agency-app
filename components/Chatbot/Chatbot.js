"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoClose, IoSend } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import styles from "./Chatbot.module.scss";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm your AI assistant. How can I help you build your SaaS MVP today?",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        chatRef.current &&
        !chatRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll on mobile when chat is open
  useEffect(() => {
    if (isOpen && window.innerWidth <= 480) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Start streaming from our API
    try {
      setIsLoading(true);
      const controller = new AbortController();
      abortRef.current = controller;

      // Build OpenAI-compatible message history
      const history = [...messages, userMessage]
        .filter((m) => m.text && typeof m.text === "string")
        .map((m) => ({
          role: m.type === "user" ? "user" : "assistant",
          content: m.text,
        }));

      // Insert a placeholder assistant message to append streamed chunks
      const botIndex = messages.length + 1; // after pushing user
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "", timestamp: new Date(), streaming: true },
      ]);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Request failed: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });
        if (chunk) {
          setMessages((prev) => {
            const copy = [...prev];
            const last = copy[copy.length - 1];
            if (last && last.streaming) {
              last.text = (last.text || "") + chunk;
            }
            return copy;
          });
        }
      }

      // mark stream done
      setMessages((prev) => {
        const copy = [...prev];
        const last = copy[copy.length - 1];
        if (last && last.streaming) delete last.streaming;
        return copy;
      });
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, I ran into an issue. Please try again.", timestamp: new Date() },
      ]);
      console.error("Chat stream error:", err);
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  };

  const quickActions = [
    "Tell me about MVP pricing",
    "How long does development take?",
    "Book a consultation",
  ];

  const handleQuickAction = (action) => {
    setInputValue(action);
  };

  return (
    <div className={styles.chatbotContainer} ref={chatRef}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerLeft}>
                <div className={styles.botAvatar}>
                  <RiRobot2Line />
                </div>
                <div className={styles.headerInfo}>
                  <div className={styles.botName}>Arka AI Assistant</div>
                  <div className={styles.botStatus}>
                    <span className={styles.statusDot}></span>
                    Online
                  </div>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <IoClose />
              </button>
            </div>

            {/* Messages Area */}
            <div className={styles.messagesArea}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  className={`${styles.message} ${
                    msg.type === "user" ? styles.userMessage : styles.botMessage
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.type === "bot" && (
                    <div className={styles.messageAvatar}>
                      <RiRobot2Line />
                    </div>
                  )}
                  <div className={styles.messageBubble}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.text || ""}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />

              {/* Quick Actions */}
              {messages.length <= 2 && (
                <div className={styles.quickActions}>
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      className={styles.quickActionBtn}
                      onClick={() => handleQuickAction(action)}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <form className={styles.inputArea} onSubmit={handleSendMessage}>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send message"
              >
                <IoSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Bubble */}
      <motion.button
        className={styles.chatBubble}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoChatbubbleEllipsesOutline />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && <span className={styles.notificationBadge}>1</span>}
      </motion.button>
    </div>
  );
}
