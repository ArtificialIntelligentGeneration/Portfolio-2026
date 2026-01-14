/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Deep Charcoal Palette
                bg: {
                    dark: "#0a0a0a", // Almost black
                    card: "#121212", // Standard Dark Card
                    cardHover: "#1a1a1a",
                },
                // Accent Colors (Neon/Tech)
                accent: {
                    cyan: "#00f0ff", // Cyberpunk Cyan
                    purple: "#bd00ff", // Neon Purple
                    blue: "#2962ff", // Professional Blue
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#a1a1aa", // Zinc-400
                    muted: "#52525b", // Zinc-600
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'], // For code/terminals
            },
            animation: {
                'blob': 'blob 7s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            boxShadow: {
                'neon': '0 0 30px -10px rgba(0, 240, 255, 0.15)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)'
            }
        },
    },
    plugins: [],
}
