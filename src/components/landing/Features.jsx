import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: '📊',
    title: 'Smart Habit Tracking',
    description: 'Create and track unlimited habits with customizable frequencies. Daily, weekly, or custom schedules - you choose.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: '📈',
    title: 'Visual Progress',
    description: 'Beautiful charts, heatmaps, and analytics show your progress at a glance. See your consistency over time.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: '🔔',
    title: 'Daily Reminders',
    description: 'Never miss a habit with smart notifications. Set multiple reminders and configure quiet hours.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: '🎯',
    title: 'Goal Setting',
    description: 'Set meaningful milestones and track your journey. Celebrate wins with achievement badges.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: '📱',
    title: 'Offline Access',
    description: 'Works without internet as a Progressive Web App. Your data syncs automatically when online.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: '🔐',
    title: 'Privacy First',
    description: 'Your data stays secure with Firebase. End-to-end encryption keeps your habits private.',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
      
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
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Build Better Habits
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to help you stay consistent and achieve your goals
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    Learn more
                    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Ready to transform your daily routine?
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            Start Building Habits Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
