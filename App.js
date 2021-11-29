import React from 'react';

import * as Sentry from '@sentry/react-native';
import Navigation from './src/route/Navigtion';
<<<<<<< HEAD
function App() {
  const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
  Sentry.init({
    dsn: 'https://0505d3aa4a9043c99031230202bf40b7@o1045193.ingest.sentry.io/6025118',
    environment: 'production',
    integrations: [
      new Sentry.ReactNativeTracing({
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
        routingInstrumentation,
      }),
    ],
    tracesSampleRate: 0.2,

    enableAutoPerformanceTracking: true,
  });

  throw new Error('Git check Alok');
=======
const reactNavigationV5Instrumentation =
  new Sentry.ReactNavigationV5Instrumentation({
    routeChangeTimeoutMs: 500, // How long it will wait for the route change to complete. Default is 1000ms
  });
Sentry.init({
  dsn: 'https://0505d3aa4a9043c99031230202bf40b7@o1045193.ingest.sentry.io/6025118',
  environment: 'production',
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      routingInstrumentation: reactNavigationV5Instrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
  enableAutoPerformanceTracking: true,
  sessionTrackingIntervalMillis: 5000,
});
function App() {
  // throw new Error('Git check');
>>>>>>> 123baf67a8afff0c3e33968c2d4111cb79673eb4
  // throw new Error('Git check');

  return (
    <Navigation
      reactNavigationV5Instrumentation={reactNavigationV5Instrumentation}
    />
  );
}
// Push check by aman
//push check by aman returns
export default Sentry.wrap(App);
