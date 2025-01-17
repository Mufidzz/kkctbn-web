import MontserratLight from 'assets/fonts/Montserrat-Light.ttf'
import MontserratRegular from 'assets/fonts/Montserrat-Regular.ttf'
import MontserratMedium from 'assets/fonts/Montserrat-Medium.ttf'
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf'

const montserratLight = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 100,
    src: `url(${MontserratLight})`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const montserratRegular = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${MontserratRegular})`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const montserratMedium = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `url(${MontserratMedium})`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const montserratBold = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `url(${MontserratBold})`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default {
    '@global' : {
        '@font-face' : [montserratLight, montserratRegular, montserratMedium, montserratBold]
    }
}