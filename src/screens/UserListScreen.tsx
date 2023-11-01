// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../services/queries/glQueries'; // Import your GraphQL query

// Your component
const UserList = () => {
  const [selectedUserType, setSelectedUserType] = useState('');
  const { loading, error, data } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: { role: selectedUserType },
  });

  useEffect(() => {
    // Fetch data when the component mounts or when selectedUserType changes
    if (selectedUserType !== null) {
      // You can access the data with 'data.listZellerCustomers.items'
      console.log(data);
    }
  }, [data, selectedUserType]);

  const renderUserItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      {/* Add other user details as needed */}
    </View>
  );

  return (
    <View>
      <Text>Select User Type:</Text>
      <TouchableOpacity onPress={() => setSelectedUserType('Admin')}>
        <Text>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedUserType('Manager')}>
        <Text>Manager</Text>
      </TouchableOpacity>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}

      {data && (
        <FlatList
          data={data.listZellerCustomers.items}
          keyExtractor={(item) => item.id}
          renderItem={renderUserItem}
        />
      )}
    </View>
  );
};

export default UserList;
