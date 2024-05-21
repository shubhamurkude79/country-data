import { YOUR_GOOGLE_CLIENT_ID } from '../constants/constant'

export const environment = {
  production: true,
  googleClientId: YOUR_GOOGLE_CLIENT_ID,
  loginSysUrl: 'http://localhost:3000/api/auth',
  apiUrl: 'https://restcountries.com/v3.1/all?fields=name,flags',
  independentApiUrl : 'https://restcountries.com/v3.1/independent',
  currencyUrl: 'https://restcountries.com/v3.1/currency/',
  allDataUrl: 'https://restcountries.com/v3.1/all',
};
