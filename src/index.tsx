import React from 'react';
import ReactDOM from 'react-dom/client';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { App } from './App';

const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: '6fdf3c14fdeb1414bd0d320ff88533',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
);
