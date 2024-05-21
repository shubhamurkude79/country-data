// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { YOUR_GOOGLE_CLIENT_ID } from '../constants/constant'

export const environment = {
  production: false,
  googleClientId: YOUR_GOOGLE_CLIENT_ID,
  loginSysUrl: 'http://localhost:3000/api/auth',
  apiUrl: 'https://restcountries.com/v3.1/all?fields=name,flags',
  independentApiUrl : 'https://restcountries.com/v3.1/independent',
  currencyUrl: 'https://restcountries.com/v3.1/currency/',
  allDataUrl: 'https://restcountries.com/v3.1/all',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
