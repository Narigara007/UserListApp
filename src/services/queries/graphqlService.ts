import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import awsconfig  from '../../../aws-exports';

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
