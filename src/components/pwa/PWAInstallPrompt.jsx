import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

// Simple inline icons for PWA prompt
const IconDownload = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

const IconX = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconShield = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconZap = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const PWAInstallPrompt = ({ open = true, onClose = () => {} }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(open);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      // Save event locally and globally
      try {
        if (typeof window !== 'undefined') window.__HABITVAULT_deferredPrompt = e;
      } catch {
        // ignore
      }
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // If a global deferred prompt was already captured, use it
    try {
      if (typeof window !== 'undefined' && window.__HABITVAULT_deferredPrompt) {
        setDeferredPrompt(window.__HABITVAULT_deferredPrompt);
        setVisible(true);
      }
    } catch {
      // ignore
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    setIsInstalling(true);
    
    // Respect session dismiss
    if (sessionStorage.getItem('pwa-install-dismissed')) {
      setVisible(false);
      onClose();
      return;
    }

    const promptToUse = deferredPrompt || (typeof window !== 'undefined' && window.__HABITVAULT_deferredPrompt) || null;
    
    if (!promptToUse) {
      // Show manual installation instructions
      console.log('⚠️ PWA: beforeinstallprompt not available. Showing manual instructions.');
      alert(
        '📱 Install HabitVault:\n\n' +
        '🌐 Chrome/Edge (Desktop):\n' +
        '1. Click the install icon (⊕) in the address bar\n' +
        '2. Or click menu (⋮) → Install HabitVault\n\n' +
        '📱 Chrome/Edge (Mobile):\n' +
        '1. Tap menu (⋮)\n' +
        '2. Tap "Install app" or "Add to Home screen"\n\n' +
        '🍎 Safari (iOS):\n' +
        '1. Tap Share button (□↑)\n' +
        '2. Tap "Add to Home Screen"\n' +
        '3. Tap "Add"'
      );
      setIsInstalling(false);
      return;
    }

    try {
      console.log('🚀 PWA: Showing install prompt...');
      promptToUse.prompt();
      const choice = await promptToUse.userChoice;
      
      if (choice.outcome === 'accepted') {
        console.log('✅ PWA: User accepted install');
      } else {
        console.log('❌ PWA: User dismissed install');
      }
      
      setDeferredPrompt(null);
      try { if (typeof window !== 'undefined') window.__HABITVAULT_deferredPrompt = null; } catch { /* ignore */ }
    } catch (err) {
      console.error('❌ PWA: Install prompt failed:', err);
      alert('Unable to install. Please use your browser\'s install option from the menu.');
    }

    setIsInstalling(false);
    setVisible(false);
    onClose();
  };

  const handleDismiss = () => {
    sessionStorage.setItem('pwa-install-dismissed', 'true');
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-40 px-2"
      >
        <motion.div 
          className="relative bg-gradient-to-br from-primary to-primary/90 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 opacity-50" />
          
          <div className="relative p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-white rounded-2xl p-2 shadow-lg">
                    <Logo size="sm" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">📱</span>
                  </div>
                </motion.div>
                
                <div>
                  <h3 className="font-poppins font-bold text-white text-lg">HabitVault</h3>
                  <p className="text-white/70 text-sm font-inter">Install App</p>
                </div>
              </div>

              <motion.button 
                onClick={handleDismiss} 
                className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX />
              </motion.button>
            </div>

            {/* Content */}
            <div className="mb-5">
              <p className="text-white/90 text-sm mb-3 font-inter leading-relaxed">
                Get the full HabitVault experience with offline access and faster performance.
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center space-x-2 text-white/80">
                  <IconShield />
                  <span>Offline Access</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <IconZap />
                  <span>Faster Loading</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-3">
              <motion.button 
                onClick={handleInstallClick}
                disabled={isInstalling}
                className="flex-1 bg-white text-primary font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isInstalling ? (
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <IconDownload />
                    <span>Install</span>
                  </>
                )}
              </motion.button>
              
              <motion.button 
                onClick={handleDismiss} 
                className="px-4 py-3 text-white/80 hover:text-white transition-colors border border-white/20 rounded-xl hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Later
              </motion.button>
            </div>

            {/* Brand indicator */}
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full opacity-70" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;