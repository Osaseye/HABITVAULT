 import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Screenshots = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beautiful On{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Every Device
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Seamlessly track your habits on desktop, tablet, or mobile. Your progress syncs across all devices.
          </p>
        </motion.div>

        {/* Desktop Mockup (Main) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative mx-auto max-w-6xl">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-20" />
            
            {/* Macbook mockup */}
            <img
              src="/device images/Macbook-Air-habitvault-self.vercel.app.png"
              alt="HabitVault on Desktop"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Mobile & Tablet Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Tablet (iPad) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-2xl opacity-20" />
              
              {/* iPad mockup */}
              <img
                src="/device images/iPad-PRO-11-habitvault-self.vercel.app.png"
                alt="HabitVault on Tablet"
                className="relative w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Perfect for Tablets</h3>
              <p className="text-slate-400">Optimized layout for iPad and tablet devices</p>
            </div>
          </motion.div>

          {/* Mobile (Galaxy) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl opacity-20" />
              
              {/* Galaxy mockup */}
              <img
                src="/device images/Galaxy-A12-habitvault-self.vercel.app.png"
                alt="HabitVault on Mobile"
                className="relative w-full max-w-xs rounded-2xl shadow-2xl"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
              <p className="text-slate-400">Track habits on the go with our mobile app</p>
            </div>
          </motion.div>
        </div>

        {/* Feature highlights under screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              📱
            </div>
            <h4 className="text-white font-semibold mb-2">Responsive Design</h4>
            <p className="text-slate-400 text-sm">Adapts perfectly to any screen size</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ☁️
            </div>
            <h4 className="text-white font-semibold mb-2">Cloud Sync</h4>
            <p className="text-slate-400 text-sm">Automatic sync across all devices</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ⚡
            </div>
            <h4 className="text-white font-semibold mb-2">Lightning Fast</h4>
            <p className="text-slate-400 text-sm">Optimized for speed and performance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
