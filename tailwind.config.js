module.exports = {
    theme: {
        extend: {
            fontFamily: {
                nunito: [
                    'Inter var', 
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ]
            },
            maxWidth: (theme, { breakpoints }) => ({
                '6.5xl': '76rem'
            }),
            colors: {
                'green-netlify-400': '#4bae9f',
                'green-netlify-500': '#15847d',
                'radical-red-500': '#FF2260',
                'matisse-blue-400': '#43b4d8',
                'matisse-blue-500': '#146396'
            },
            boxShadow: {
                '3xl': '0 4px 20px rgba(0,0,0,.12)'
            },
            spacing: {
                '260': '65rem',
                '112': '28rem',
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('@tailwindcss/ui')
    ],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'src/**/*.vue',
            'src/**/*.js',
        ]
    }
}
