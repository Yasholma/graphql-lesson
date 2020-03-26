import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_TOTAL_PRICE = gql`
  {
    total @client
  }
`;

const CheckoutContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => (
      <Query query={GET_TOTAL_PRICE}>
        {({ data: { total } }) => (
          <CheckoutPage cartItems={cartItems} total={total} />
        )}
      </Query>
    )}
  </Query>
);

export default CheckoutContainer;
