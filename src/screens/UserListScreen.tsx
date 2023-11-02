// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../services/queries/glQueries';

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
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select User Type:</Text>
      <TouchableOpacity onPress={() => setSelectedUserType('Admin')}>
        <Text style={styles.text}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedUserType('Manager')}>
        <Text style={styles.text}>Manager</Text>
      </TouchableOpacity>

      {loading && <Text style={styles.text}>Loading...</Text>}
      {error && <Text style={styles.text}>Error: {error.message}</Text>}

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

const styles = StyleSheet.create({
  text: { marginTop: 20 },
});

export default UserList;
