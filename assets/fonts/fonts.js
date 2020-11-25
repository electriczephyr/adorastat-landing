import { createGlobalStyle } from 'styled-components';

import AvertaRegular from './AvertaStdPE-Regular.woff';
import AvertaRegular2 from './AvertaStdPE-Regular.woff2';
import AvertaSemibold from './AvertaStdPE-Semibold.woff';
import AvertaSemibold2 from './AvertaStdPE-Semibold.woff2';
import AvertaBold from './AvertaStdPE-Bold.woff';
import AvertaBold2 from './AvertaStdPE-Bold.woff2';

export default createGlobalStyle`
  @font-face {
      font-family: 'Averta Regular';
      src: local('Averta Regular'), local('AvertaRegular'),
      url(${AvertaRegular2}) format('woff2'),
      url(${AvertaRegular}) format('woff');
  }
  @font-face {
    font-family: 'Averta Semibold';
    src: local('Averta Semibold'), local('AvertaSemibold'),
    url(${AvertaSemibold2}) format('woff2'),
    url(${AvertaSemibold}) format('woff');
  }
  @font-face {
    font-family: 'Averta Bold';
    src: local('Averta Bold'), local('AvertaBold'),
    url(${AvertaBold2}) format('woff2'),
    url(${AvertaBold}) format('woff');
  }
`;

