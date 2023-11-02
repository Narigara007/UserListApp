import { gql } from '@apollo/client';

export const LIST_ZELLER_CUSTOMERS = gql`
  query getZellerCustomer($role: String) {
    listZellerCustomers(filter: { role: { eq: $role } }) {
      items {
        id
        name
        email
        role
      }
    }
  }
`;
