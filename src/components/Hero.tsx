import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import photo from '../assets/photo.jpg';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-accent-cyan/30 text-accent-cyan text-sm mb-6 mx-auto lg:mx-0">
                        <Sparkles className="w-4 h-4" />
                        <span>AI Automation Architect</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Создаю <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-500 to-accent-purple animate-gradient break-words">
                            Автоматизированное Будущее
                        </span>
                    </h1>

                    <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Разрабатываю сложные нейросетевые системы, внедряю AI-агентов и автоматизирую бизнес-процессы. От идеи до масштабируемой архитектуры.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] flex items-center gap-2 group"
                        >
                            Смотреть Кейсы
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => window.open('https://t.me/HermannSaliter', '_blank')}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2 hover:border-accent-cyan/30"
                        >
                            <Terminal className="w-5 h-5 text-accent-cyan" />
                            Связаться
                        </button>
                    </motion.div>
                </motion.div>

                {/* Photo Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[500px] h-[600px] mx-auto">
                        {/* Abstract backing */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-3xl blur-2xl transform rotate-6 scale-95" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card border-accent-cyan/20">
                            <img
                                src={photo}
                                alt="Hermann Saliter"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                            />
                            {/* Overlay Gradient at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />

                            {/* Floating Name Badge */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="glass p-4 rounded-xl border border-white/10 backdrop-blur-md">
                                    <h3 className="text-xl font-bold text-white">Герман Салитер</h3>
                                    <p className="text-accent-cyan text-sm">Full-stack AI Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
