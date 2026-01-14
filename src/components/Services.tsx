import { motion } from 'framer-motion';
import { Bot, Video, Cpu, Globe } from 'lucide-react';

const services = [
    {
        title: "AI Контент Продакшн",
        description: "Генерация видео (Veo, Sora), изображений и текстов промышленного качества. Создание виртуальных инфлюенсеров.",
        icon: <Video className="w-8 h-8 text-accent-purple" />,
        tags: ["Veo 3.1", "Midjourney", "HeyGen", "ElevenLabs"]
    },
    {
        title: "AI Агенты и Чат-боты",
        description: "Умные ассистенты на базе LLM (Gemini, GPT-5) с доступом к инструментам и памяти. Автономное выполнение задач.",
        icon: <Bot className="w-8 h-8 text-accent-cyan" />,
        tags: ["Python", "LangChain", "n8n", "Telegram API"]
    },
    {
        title: "Автоматизация Процессов",
        description: "Построение RAG-систем, парсинг данных и интеграция CRM. Избавляю бизнес от рутины.",
        icon: <Cpu className="w-8 h-8 text-blue-400" />,
        tags: ["n8n", "SQL", "FastAPI", "Docker"]
    },
    {
        title: "Архитектура и Бэкенд",
        description: "Проектирование надежных высоконагруженных систем. Развертывание на собственных серверах и в облаке.",
        icon: <Globe className="w-8 h-8 text-purple-400" />,
        tags: ["System Design", "Microservices", "Security", "Linux"]
    }
];

export const Services = () => {
    return (
        <section className="py-24 bg-bg-dark relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Functional <span className="text-accent-blue">Capabilities</span></h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">Providing complete technical supremacy through code and neural networks.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl group hover:bg-white/5"
                        >
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
                                {s.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {s.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-text-secondary border border-white/10 hover:border-accent-cyan/50 hover:text-white transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
