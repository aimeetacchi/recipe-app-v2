import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from '@apollo/client';
import { Amplify, Auth } from 'aws-amplify';
import { createAuthLink, AUTH_TYPE } from 'aws-appsync-auth-link';

import awsconfig from '../aws-exports';
// if (process.env.REACT_APP_AUTH_DOMAIN !== '') {
//     const oauth = {
//         domain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
//         scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
//         redirectSignIn: `${window.location.origin}/`,
//         redirectSignOut: `${window.location.origin}/`,
//         responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
//         identityProvider: process.env.REACT_APP_IDP,
//         client_id: awsconfig.aws_user_pools_web_client_id,
//     };
//     awsconfig.oauth = oauth;
// }
Amplify.configure(awsconfig);

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;

const auth = {
    type: awsconfig.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => {
        const session = await Auth.currentSession();
        return session.getIdToken().getJwtToken();
    },
};

const httpLink = new HttpLink({ uri: url });

const link = ApolloLink.from([createAuthLink({ url, region, auth }), httpLink]);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});