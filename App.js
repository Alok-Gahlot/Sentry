import React from 'react';

import * as Sentry from '@sentry/react-native';
import Navigation from './src/route/Navigtion';
<<<<<<< HEAD
function App() {
  const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
  Sentry.init({
    dsn: 'https://4ae6b042f7924b20aedde0692da85084@o1075722.ingest.sentry.io/6076559',
    environment: 'production',
    integrations: [
      new Sentry.ReactNativeTracing({
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
        routingInstrumentation,
      }),
    ],
    tracesSampler: context => {
      switch (context.transactionContext.op) {
        case 'navigation':
          return 1;
        default:
          return 1;
      }
    },
=======
const reactNavigationV5Instrumentation =
  new Sentry.ReactNavigationV5Instrumentation({
    routeChangeTimeoutMs: 500, // How long it will wait for the route change to complete. Default is 1000ms
>>>>>>> a3138fbcd5531b30d035de7aac898aa2205fa54f
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
  // throw new Error('Git check');

  return (
    <Navigation
      reactNavigationV5Instrumentation={reactNavigationV5Instrumentation}
    />
  );
}

export default Sentry.wrap(App);
