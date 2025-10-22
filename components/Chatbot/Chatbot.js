"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoClose, IoSend } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import styles from "./Chatbot.module.scss";

export default function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Ensure component is mounted before initializing chat
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Manage input state locally
  const [input, setInput] = React.useState("");

  // Use Vercel AI SDK useChat hook
  const {
    messages = [],
    sendMessage,
    status,
  } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  // Show typing indicator when message is submitted but response hasn't started streaming yet
  const isLoading = status === 'submitted';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    sendMessage({ text: input });
    setInput("");
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

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

  const quickActions = [
    "Tell me about MVP pricing",
    "How long does development take?",
    "Book a consultation",
  ];

  const handleQuickAction = (action) => {
    setInput(action);
  };

  // Add welcome message if no messages exist (memoized to prevent re-renders)
  const displayMessages = useMemo(() => {
    return messages.length === 0 
      ? [{
          id: "welcome",
          role: "assistant",
          content: "👋 Hi! I'm your AI assistant. How can I help you build your SaaS MVP today?",
        }]
      : messages;
  }, [messages]);

  // Don't render until mounted (prevents SSR issues)
  if (!isMounted) {
    return null;
  }

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
                  <div className={styles.botName}>nixpexel AI Assistant</div>
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
              {displayMessages && displayMessages.length > 0 ? (
                displayMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.role === "user" ? styles.userMessage : styles.botMessage
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.role === "assistant" && (
                    <div className={styles.messageAvatar}>
                      <RiRobot2Line />
                    </div>
                  )}
                  <div className={styles.messageBubble}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.parts 
                        ? msg.parts.map((part) => part.type === 'text' ? part.text : '').join('')
                        : msg.content || ""}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              ))
              ) : (
                <div>No messages</div>
              )}
              
              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  className={`${styles.message} ${styles.botMessage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.messageAvatar}>
                    <RiRobot2Line />
                  </div>
                  <div className={`${styles.messageBubble} ${styles.typingIndicator}`}>
                    <div className={styles.typingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />

              {/* Quick Actions */}
              {messages.length === 0 && (
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
            <form className={styles.inputArea} onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.input}
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={!input.trim() || isLoading}
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
