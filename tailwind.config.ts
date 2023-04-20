/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'Error/50': '#FEF3F2',
        'Error/100': '#FEE4E2',
        'Error/200': '#FECDCA',
        'Error/300': '#FDA29B',
        'Error/400': '#F97066',
        'Error/500': '#F04438',
        'Error/600': '#D92D20',
        'Error/700': '#CF3131',
        'Error/800': '#C22A2A',
        'Error/900': '#B3201E',
        'Warning/50': '#FEF4E5',
        'Warning/100': '#FDE2BF',
        'Warning/200': '#FCD097',
        'Warning/300': '#FBBD71',
        'Warning/400': '#FAAF59',
        'Warning/500': '#F7A34E',
        'Warning/600': '#F2994A',
        'Warning/700': '#EA8A45',
        'Warning/800': '#E27D42',
        'Warning/900': '#D46A3E',
        'Success/50': '#E8F6ED',
        'Success/100': '#D1EEDB',
        'Success/200': '#BAE5C8',
        'Success/300': '#8CD4A4',
        'Success/400': '#5EC37F',
        'Success/500': '#52A86E',
        'Success/600': '#307F4A',
        'Blue/50': '#EFF8FF',
        'Blue/100': '#D1E9FF',
        'Blue/400': '#53B1FD',
        'Blue/600': '#1570EF',
        'Blue/700': '#175CD3',
        'Grey/50': '#F9FAFB',
        'Grey/100': '#F2F4F7',
        'Grey/200': '#E4E7EC',
        'Grey/300': '#D0D5DD',
        'Grey/400': '#98A2B3',
        'Grey/500': '#667085',
        'Grey/600': '#475467',
        'Grey/700': '#344054',
        'Grey/800': '#1D2939',
        'Grey/900': '#101828',
        'Text/Headline': '#2F3948',
        'Text/Primary': '#2E343B',
        'Text/Secondary': '#708090',
        'Text/Placeholder': '#BDBBC9',
        'Text/text-fade1': '#848484',
        'Text/body-label': '#585757',
        'Text/title-label': '#5A5477',
        'Text/text-fade2': '#969696',
        'input-field/field-purple': '#F9F9FF',
        'input-field/field-white': '#FFFFFFCC',
        'input-field/field-placeholder': '#BDBBC9',
        'Border/50': '#E4E7EC',
        'Border/100': '#D0D5DD',
        'Divider/50': '#F5F4F9',
        'Divider/100': '#F2F4F7',
        'noja-black-blue': '#0B0D17',
        'Noja/Primary/10': '#F0F0FE',
        'Noja/Primary/30': '#D2D2FD',
        'Noja/Primary/Main': '#6868F7',
        'Noja/Primary/600': '#4848F5',
        'Noja/Background/One': '#F9FAFC',
        'Noja/Background/Two': '#F5F6FC',
        'Noja/Background/Three': '#EFF0FA',
        'Noja/Font/Black': '#2F3948',
        'State/Hover': '#EFF0FA',
        'State/Disabled/50': '#EEEEEE',
        'State/Disabled/100': '#E0E0E0',
        'State/Disabled/200': '#CCCCCC',
      }
    },
  },
  plugins: [
   
  ],
}