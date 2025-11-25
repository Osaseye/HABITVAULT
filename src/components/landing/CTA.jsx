import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
      }} />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 shadow-2xl hover:border-slate-600/50 transition-all duration-300">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6"
            >
              <span className="animate-pulse">🎉</span>
              <span>Join 50,000+ users already building better habits</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Your Life?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Start building powerful habits today. No credit card required. 
              Cancel anytime. Join thousands of successful users.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                to="/auth"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg text-white overflow-hidden hover:scale-105 transition-transform duration-300 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <button className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span>4.8/5 Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '1M+', label: 'Habits Tracked' },
              { value: '95%', label: 'Success Rate' },
              { value: '4.8★', label: 'User Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
