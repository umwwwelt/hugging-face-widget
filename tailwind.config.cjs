const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: '1rem' }
		},
		extend: {
			variants: {
				transitionProperty: ['hover']
			},
			colors: {
				orange: colors.orange,
				teal: colors.teal,
				sky: colors.sky,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				pink: colors.pink,
				lime: colors.lime,
				cyan: colors.cyan,
				gray: {
					350: '#b3bcc9',
					850: '#141c2e',
					925: '#101623',
					950: '#0b0f19'
				}
			},
			screens: {
				'with-hover': { raw: '(hover: hover)' },
				'no-hover': { raw: '(hover: none)' }
			},
			gridTemplateRows: {
				full: '100%'
			},
			fontFamily: {
				sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
			}
		}
	}
};
