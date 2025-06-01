// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // adjust this based on your project structure
    ],
    theme: {
        extend: {
            // Add custom transforms and 3D utilities
            transformStyle: {
                'preserve-3d': 'preserve-3d',
            },
            translate: {
                '3d': 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z))',
            },
            // Add custom background patterns
            backgroundImage: {
                'diagonal-stripes': `
          linear-gradient(135deg, #0000 18.75%, #f3f3f3 0 31.25%, #0000 0),
          repeating-linear-gradient(45deg, #f3f3f3 -6.25% 6.25%, #ffffff 0 18.75%)
        `,
            },
            // Add custom colors
            colors: {
                'card-accent': 'rgba(4, 193, 250, 0.732)',
                'card-blue': 'rgb(7, 185, 255)',
            },
            // Add 3D perspective
            perspective: {
                '1000': '1000px',
            },
        },
    },
    plugins: [
        // Plugin for 3D transform utilities
        function ({ addUtilities }: { addUtilities: any }) {
            const newUtilities = {
                '.transform-style-preserve-3d': {
                    'transform-style': 'preserve-3d',
                },
                '.backface-visible': {
                    'backface-visibility': 'visible',
                },
                '.backface-hidden': {
                    'backface-visibility': 'hidden',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};

export default config;