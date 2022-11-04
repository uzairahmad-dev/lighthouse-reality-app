import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { client } from './graphql/queries';
import { store } from './store';

import App from './App';

import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    </React.StrictMode>
);
