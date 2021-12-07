// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseMexico: 'http://localhost/gers-wordpress/mexico/wp-json/acf/v3',
  urlMexico:  'http://localhost/gers-wordpress/mexico/wp-json/wp/v2',
  menuMexico: 'http://localhost/gers-wordpress/mexico/wp-json/menus/v1',
  domain: 'http://localhost/gers-wordpress',
  domain_angular: 'http://localhost'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
