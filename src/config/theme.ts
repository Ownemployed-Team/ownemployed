export default {
    breakpoints: ['40em', '55em', '64em'],
    //breakpoints: ['720px', '920px', '1440px'],
    fontSizes: {
        card: '14px',
        body: '16px',
        h4: '20px',
        h3: '22px',
        h2: '34px',
        h1: '42px',
    },
    colors: {
        primary: '#6F63AD',
        primaryHover: 'rgb(111, 99, 173, 0.4)',
        secondary: '#FFDA63',
        secondaryHover: '#FFE180',
        alert: '#FF5252',
        alertHover: '#ff8080',
        success: '#33d9b2',
        successHover: '#53dfbf',
        heading: '#000000',
        body: '#768598',
        white: '#fff',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        monospace: 'Menlo, monospace',
        body: 'Rubik, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    fontWeights: {
        body: 400,
        heading: 600,
        bold: 700,
    },
    lineHeights: {
        body: '26px',
        heading: '52px',
    },
    shadows: {
        small: '0px 0px 8px rgba(0,0,0,0.15);',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    radii: {
        small: 3,
        default: 12,
        large: 39,
        round: '100%',
    },
    variants: {
        card: {
            p: 2,
            bg: '#F3F3F3',
            boxShadow: 'card',
            borderRadius: 2,
        },
    },
    text: {},
    buttons: {
        primary: {
            color: 'white',
            bg: 'primary',
        },
    },
}
