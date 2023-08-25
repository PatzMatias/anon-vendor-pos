import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from '~/components/ui/PDFParts/InvoiceTableHeader'
import InvoiceTableRow from '~/components/ui/PDFParts/InvoiceTableRow'
import InvoiceTableBlankSpace from '~/components/ui/PDFParts/InvoiceTableBlankSpace'
import InvoiceTableFooter from '~/components/ui/PDFParts/InvoiceTableFooter'
import { type IInvoiceProps } from '~/components/ui/PDFParts/Invoice';

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

const InvoiceItemsTable = ({order}: IInvoiceProps) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={order.items} />
    <InvoiceTableBlankSpace rowsCount={ tableRowsCount - order.items.length} />
    <InvoiceTableFooter total={order.total_amount} />
  </View>
);
  
  export default InvoiceItemsTable