import { DefaultTheme, Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#219EBC',
    background: 'white',
    border: 'rgb(220, 220, 220)',
  },
}

export const darkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#219EBC',
    background: 'rgb(20, 20, 20)',
    text: 'white',
    border: 'rgb(40, 40, 40)'
  },
}

export const subtextDarkTheme: string = 'rgb(148, 148, 148)';
export const subtextLightTheme: string = 'rgb(117 117 117)';
export const darkRipple: string = 'rgb(60, 60, 60)';
export const lightRipple: string = 'rgb(195, 195, 195)';