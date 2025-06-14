
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Fashion Portfolio Colors with Gradient Support
				'dusty-lavender': {
					DEFAULT: '#D8B4DD',
					50: '#F7F2F8',
					100: '#F0E5F1',
					200: '#E4D0E7',
					300: '#D8B4DD',
					400: '#CA95D1',
					500: '#BC76C5',
					600: '#A855B8',
					700: '#8E3A9C',
					800: '#6B2D75',
					900: '#4A204E'
				},
				'midnight-navy': {
					DEFAULT: '#1A1F3A',
					50: '#E8E9F0',
					100: '#D1D4E1',
					200: '#A3A8C3',
					300: '#757DA5',
					400: '#475187',
					500: '#1A1F3A',
					600: '#15192F',
					700: '#101224',
					800: '#0B0C19',
					900: '#06060E'
				},
				'peach-accent': {
					DEFAULT: '#FBC6A4',
					50: '#FEF7F3',
					100: '#FDEEE7',
					200: '#FBDDCF',
					300: '#F9CCB7',
					400: '#F7BB9F',
					500: '#FBC6A4',
					600: '#F69E6B',
					700: '#F17532',
					800: '#E5550A',
					900: '#B3420C'
				},
				'lavender-bg': '#F9F6FB',
				'slate-gray': '#4A4A4A',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #D8B4DD 0%, #1A1F3A 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #FBC6A4 0%, #D8B4DD 100%)',
				'gradient-tertiary': 'linear-gradient(135deg, #F9F6FB 0%, #ffffff 50%, rgba(216, 180, 221, 0.1) 100%)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
