import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      title: 'Sign Up Free',
      description: 'Create your account in seconds. No credit card required.',
      icon: '✨',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '02',
      title: 'Add Your Habits',
      description: 'Set up habits you want to build. Customize frequency and goals.',
      icon: '🎯',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      number: '03',
      title: 'Track Progress',
      description: 'Check in daily, build streaks, and watch your progress grow.',
      icon: '📈',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building better habits has never been easier. Join thousands of users already transforming their lives.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting line (not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2" />
              )}

              <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 relative">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} blur-2xl opacity-30 scale-150`} />
                  
                  <div className="relative w-32 h-32 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex flex-col items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      STEP {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg text-white overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="mt-4 text-slate-400">No credit card required • Free forever</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
