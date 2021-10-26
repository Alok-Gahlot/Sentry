import React from 'react';

import * as Sentry from '@sentry/react-native';
import Navigation from './src/route/Navigtion';
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
  // throw new Error('Git check');

  return <Navigation routingInstrumentation={routingInstrumentation} />;
}

export default Sentry.wrap(App);
