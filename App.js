import React from 'react';

import * as Sentry from '@sentry/react-native';
import Navigation from './src/route/Navigtion';
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
  });

  try {
    throw new Error('Sentry check ');
  } catch (err) {
    Sentry.captureMessage('Sentry Check');
  }

  // throw new Error('Git check');
  // throw new Error('Git check');

  return <Navigation routingInstrumentation={routingInstrumentation} />;
}

export default Sentry.wrap(App);
