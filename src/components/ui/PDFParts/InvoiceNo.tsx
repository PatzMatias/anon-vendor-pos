import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { PRINT_DATE_FORMAT, getLocaleDateString } from '~/definitions/general';
import { type IInvoiceProps } from '~/components/ui/PDFParts/Invoice';

const styles = StyleSheet.create({
  invoiceNoContainer: {
      flexDirection: 'row',
      marginTop: 36,
      justifyContent: 'flex-end'
  },
  invoiceDateContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
  },
  invoiceDate: {
      fontSize: 12,
      fontStyle: 'bold',
  },
  label: {
      width: 60
  }
  
});

export default function InvoiceNo({order}: IInvoiceProps) {
  return  (
    <>
      <View style={styles.invoiceNoContainer}>
          <Text style={styles.label}>Invoice No:</Text>
          <Text style={styles.invoiceDate}>{`13245697`}</Text>
      </View >
      <View style={styles.invoiceDateContainer}>
          <Text style={styles.label}>Date: </Text>
          <Text >{getLocaleDateString(order?.created_at, PRINT_DATE_FORMAT)}</Text>
      </View >
    </>
  );  
}