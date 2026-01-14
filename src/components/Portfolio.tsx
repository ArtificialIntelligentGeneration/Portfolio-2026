import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
// Photo import removed
import aigenLogo from '../assets/aigen_logo.jpg';
import tgflowScreen from '../assets/tgflow_screen.png';
import konstantinScreen from '../assets/konstantin_n8n.png';

const projects = [
    {
        title: "AiGen: Медиа о Технологиях",
        category: "Content & Community",
        description: "Авторский канал о Generative AI и автоматизации. Ежедневные обзоры инструментов, аналитика рынка и кейсы внедрения.",
        image: aigenLogo,
        tags: ["Telegram", "Content Strategy", "Community Growth"],
        metrics: "News & Tech",
        stack: ["Media", "Analytics", "GenAI"],
        link: "https://t.me/AiG_TG_channel"
    },
    {
        title: "TGFlow: Traffic System",
        category: "High-Load Automation",
        description: "Масштабируемая система управления Telegram-аккаунтами. Автоматизация прогрева, рассылок и взаимодействия.",
        image: tgflowScreen,
        tags: ["PyQt6", "Telethon", "Multithreading"],
        metrics: "500+ Аккаунтов",
        stack: ["Python", "AsyncIO", "Proxy Management"],
        link: "https://github.com/ArtificialIntelligentGeneration/TGFlow"
    },
    {
        title: "NM Konstantin: Personal AI",
        category: "Intelligent Agent",
        description: "Личный ассистент в Telegram. Глубокая интеграция с n8n, управление календарем, задачами и базой знаний.",
        image: konstantinScreen,
        tags: ["n8n", "LangChain", "Vector DB"],
        metrics: "Personal Assistant",
        stack: ["Webhook", "Postgres", "Telegram API"],
        link: "https://t.me/AiGen_Bots/4"
    }
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-bg-dark relative overflow-hidden">
            {/* Abstract bg element */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-accent-blue/5 blur-[120px] -skew-y-12 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Избранные Кейсы</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Проекты, демонстрирующие подход к архитектуре и качеству.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative grid md:grid-cols-2 gap-8 items-center bg-zinc-900/30 rounded-3xl p-6 md:p-8 hover:bg-zinc-900/50 transition-colors border border-white/5 hover:border-white/10"
                        >
                            {/* Image/Visual Side - Using simplified class logic to avoid parser issues */}
                            <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 relative group-hover:shadow-2xl group-hover:shadow-accent-blue/10 transition-all">
                                {/* Clean image without overlay */}
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>

                            {/* Content Side */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 text-xs font-mono bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {project.metrics && (
                                    <div className="mb-8">
                                        <div className="text-sm font-semibold text-white mb-2">Metrics:</div>
                                        <div className="text-text-muted">{project.metrics}</div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-sm bg-black/40 text-text-muted hover:text-accent-cyan border border-white/5 rounded-md transition-colors cursor-default">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold hover:text-accent-cyan transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        {project.link.includes('github') ? 'GitHub' : 'Открыть'}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
