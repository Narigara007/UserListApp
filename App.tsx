// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserListScreen from './src/screens/UserListScreen';
import { ApolloProvider } from "@apollo/client";
import client from './src/services/queries/graphqlService'; 

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="UserList" component={UserListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;