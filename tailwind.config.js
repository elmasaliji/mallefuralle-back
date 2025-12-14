/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Malle für Alle Custom Colors
                        malle: {
                                black: '#141414',
                                pink: '#d40e7b',
                                purple: '#9621ff',
                                orange: '#ff8100',
                                yellow: '#ffdb00'
                        }
                },
                keyframes: {
                        'accordion-down': {
                                from: {
                                        height: '0'
                                },
                                to: {
                                        height: 'var(--radix-accordion-content-height)'
                                }
                        },
                        'accordion-up': {
                                from: {
                                        height: 'var(--radix-accordion-content-height)'
                                },
                                to: {
                                        height: '0'
                                }
                        },
                        'flip': {
                                '0%': { transform: 'rotateY(0deg)' },
                                '100%': { transform: 'rotateY(180deg)' }
                        },
                        'flip-back': {
                                '0%': { transform: 'rotateY(180deg)' },
                                '100%': { transform: 'rotateY(0deg)' }
                        },
                        'glow-pulse': {
                                '0%, 100%': { boxShadow: '0 0 20px rgba(212, 14, 123, 0.5), 0 0 40px rgba(150, 33, 255, 0.3)' },
                                '50%': { boxShadow: '0 0 40px rgba(212, 14, 123, 0.8), 0 0 60px rgba(150, 33, 255, 0.5)' }
                        },
                        'fire': {
                                '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '1' },
                                '50%': { transform: 'scaleY(1.2) scaleX(0.9)', opacity: '0.8' }
                        },
                        'scroll-reveal': {
                                '0%': { opacity: '0', transform: 'translateY(60px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'flip': 'flip 0.6s ease-in-out forwards',
                        'flip-back': 'flip-back 0.6s ease-in-out forwards',
                        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                        'fire': 'fire 0.5s ease-in-out infinite',
                        'scroll-reveal': 'scroll-reveal 0.8s ease-out forwards'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
