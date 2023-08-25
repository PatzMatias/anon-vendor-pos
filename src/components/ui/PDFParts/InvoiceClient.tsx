import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { type IInvoiceProps } from '~/components/ui/PDFParts/Invoice';

const styles = StyleSheet.create({
  headerContainer: {
      marginTop: 36
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique'
  },
});


export default function InvoiceClient({order}: IInvoiceProps){
  return (
    (
      <View style={styles.headerContainer}>
          <Text style={styles.billTo}>Bill To:</Text>
          <Text>{`${order.customer.first_name} ${order.customer.last_name}`}</Text>
          <Text>{order.customer.address}</Text>
          <Text>{order.customer.phone_number}</Text>
          {/* <Text>{invoice.email}</Text> */}
      </View>
    )
  )
};
