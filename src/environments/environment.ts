// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAtqCxfa8V40v9sjJzB-UYvkNLHAH3cC7k",
    authDomain: "screen-cloud-f8c9a.firebaseapp.com",
    databaseURL: "https://screen-cloud-f8c9a.firebaseio.com",
    projectId: "screen-cloud-f8c9a",
    storageBucket: "screen-cloud-f8c9a.appspot.com",
    messagingSenderId: "933948910394"
  },
  googlePlacesBasePath: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&AIzaSyCp2wDN9wfLzBedC_IO00ImgD5sHsVY9mU',
  googleServerBasePath: 'http://localhost:8000/api',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
