import React from 'react';
import Logo from '../components/ui/Logo';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Feature card component for landing page
const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div 
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    variants={fadeIn}
    whileHover={{ 
      y: -8, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
    }}
  >
    <div className="text-accent mb-6 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-3 font-poppins text-primary text-center">{title}</h3>
    <p className="text-gray-600 font-inter text-center leading-relaxed">{description}</p>
  </motion.div>
);

const LandingPage = () => {
  return (
    <MainLayout>
      {/* Hero Section - Compact and School-Friendly */}
      <motion.section 
        className="bg-gradient-to-b from-primary to-primary/90 text-white py-8 pt-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Left Side - Enhanced Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-center lg:text-left"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Track Your Daily Habits{' '}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  & Grow!
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl font-inter text-white/95 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Build positive habits like reading, exercising, drinking water, or studying. 
                <span className="text-white font-medium"> Track your daily progress and stay motivated on your journey to self-improvement!</span>
              </motion.p>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90 text-sm sm:text-base">Simple habit tracking</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/90 text-sm sm:text-base">Visual progress charts</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90 text-sm sm:text-base">Daily reminders & motivation</span>
                </div>
              </motion.div>

              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <p className="text-white/80 text-sm italic">
                  "Small daily improvements lead to big results over time"
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Bigger Video */}
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/25 to-secondary/25 blur-2xl rounded-full"></div>
                
                {/* Bigger Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                  style={{ maxHeight: '420px' }}
                >
                  <source src="/device video/iPhone-13-PRO-habitvault-self.vercel.app-2q1-_208kgtvjh.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cross-Platform Section */}
      <section className="bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-white mb-4">
              Works Seamlessly Across All Your Devices
            </h2>
            <p className="text-base md:text-lg text-white/70 font-inter max-w-2xl mx-auto">
              Access your habits anywhere, anytime. HabitVault syncs across desktop, tablet, and mobile devices.
            </p>
          </motion.div>

          {/* Device Mockups Grid - Compact 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Macbook Mockup */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <img
                    src="/device images/Macbook-Air-habitvault-self.vercel.app.png"
                    alt="HabitVault on Macbook"
                    className="w-full h-auto rounded-lg shadow-xl max-h-64 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Desktop Experience</h3>
                    <p className="text-white/80 text-sm">Full-featured dashboard with advanced analytics</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* iPad Mockup */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <img
                    src="/device images/iPad-PRO-11-habitvault-self.vercel.app.png"
                    alt="HabitVault on iPad"
                    className="w-full h-auto rounded-lg shadow-xl max-h-64 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Tablet Optimized</h3>
                    <p className="text-white/80 text-sm">Perfect for reviewing habits on the go</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Galaxy Phone Mockup */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-secondary/10 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <img
                    src="/device images/Galaxy-A12-habitvault-self.vercel.app.png"
                    alt="HabitVault on Galaxy Phone"
                    className="w-full h-auto rounded-lg shadow-xl max-h-64 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Mobile Ready</h3>
                    <p className="text-white/80 text-sm">Track habits from your pocket</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Macbook Alternate View */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <img
                    src="/device images/Macbook-Air-habitvault-self.vercel.app (1).png"
                    alt="HabitVault Dashboard"
                    className="w-full h-auto rounded-lg shadow-xl max-h-64 object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">Beautiful Interface</h3>
                    <p className="text-white/80 text-sm">Intuitive design that makes habit tracking enjoyable</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <motion.section 
        id="features" 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-6">
              Powerful Features for Better Habits
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
              Our app is designed to help you build better habits while keeping your personal data private and secure.
              <span className="text-primary font-medium"> Everything you need to succeed.</span>
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H5.5z"></path>
                  <path d="M9 13h2m-1-3v2m-2 4h4m4-3l-4 4m0-4l4 4" strokeWidth="2" stroke="currentColor" fill="none"></path>
                </motion.svg>
              }
              title="End-to-End Encryption"
              description="All your habit data is encrypted on your device before being stored in the cloud, ensuring only you can access it."
              index={0}
            />
            
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </motion.svg>
              }
              title="Smart Habit Tracking"
              description="Create, update, and track habits with an intuitive interface designed for daily consistency and growth."
              index={1}
            />
            
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </motion.svg>
              }
              title="Visual Progress Analytics"
              description="Visualize your consistency and completion rates with interactive charts and detailed statistics."
              index={2}
            />
            
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </motion.svg>
              }
              title="Smart Reminders"
              description="Set personalized reminders and motivational messages to help you stay on track with your habit goals."
              index={3}
            />
            
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </motion.svg>
              }
              title="Secure Data Backup"
              description="Export your data or create encrypted backups to ensure you never lose your progress and achievements."
              index={4}
            />
            
            <FeatureCard
              icon={
                <motion.svg 
                  className="w-14 h-14" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </motion.svg>
              }
              title="Cross-Device Sync"
              description="Access your habits from any device while maintaining the same level of security and encryption across platforms."
              index={5}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Security Section */}
      <motion.section 
        id="security" 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >

        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold font-poppins text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Privacy First, Always
              </motion.h2>
              <motion.p 
                className="text-gray-600 font-inter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We've built HabitVault with security as our top priority. Here's how we protect your data:
              </motion.p>
            </div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">End-to-End Encryption</h3>
              <p className="mb-4 text-gray-600 font-inter">
                All your habit data is encrypted using AES-256 bit encryption before it ever leaves your device. 
                Even we can't read your data - only you have the keys.
              </p>
              
              <motion.div 
                className="bg-black p-4 rounded font-jetbrains text-sm mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.code
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                >
                  // Data is encrypted before storage<br />
                  const encryptedData = CryptoJS.AES.encrypt(<br />
                  &nbsp;&nbsp;JSON.stringify(habitData),<br />
                  &nbsp;&nbsp;userEncryptionKey<br />
                  ).toString();
                </motion.code>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold mb-3 font-poppins text-primary">No Third-Party Analytics</h3>
                <p className="text-gray-600 font-inter">
                  We don't include any third-party analytics or tracking tools. Your habits remain completely private.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                variants={fadeIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold mb-3 font-poppins text-primary">Local-First Storage</h3>
                <p className="text-gray-600 font-inter">
                  Your habits are stored locally first and then synced to the cloud with encryption, ensuring your data is always available.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section - Enhanced with Logo Background */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Logo Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: "url('/logo.png')",
            backgroundSize: '400px 400px',
            backgroundPosition: 'center center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Daily Habits?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of students and professionals who are building better habits while keeping their data private and secure. 
              <span className="font-medium"> Start your journey to success today!</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/signup"
                  className="block w-full sm:inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
                >
                  <span className="group-hover:tracking-wide transition-all duration-300">
                    Get Started Free
                  </span>
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/login"
                  className="block w-full sm:inline-block bg-white/10 backdrop-blur-sm border-2 border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-lg"
                >
                  Already Have Account? Log In
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </MainLayout>
  );
};

export default LandingPage;