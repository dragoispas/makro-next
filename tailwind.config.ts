import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				104: '26rem',
				112: "28rem",
				128: "32rem",
				144: "36rem",
				169: "40rem",
				176: "44rem",
				192: "48rem",
				208: "52rem",
				224: "56rem",
				256: "64rem",
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				macro: {
					protein: 'hsl(var(--chart-1))',
					fat: 'hsl(var(--chart-5))',
					carbs: 'hsl(var(--chart-2))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
} satisfies Config;
