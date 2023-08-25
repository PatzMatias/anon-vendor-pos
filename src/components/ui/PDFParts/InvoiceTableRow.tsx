import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { type OrderItem } from '~/pages/api/orders';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
      borderBottomColor: '#bff0fd',
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 24,
      fontStyle: 'bold',
      fontFamily: 'Courier'
  },
  description: {
      width: '60%',
      textAlign: 'left',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      paddingLeft: 8,
  },
  qty: {
      width: '10%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'right',
      paddingRight: 8,
  },
  rate: {
      width: '15%',
      borderRightColor: borderColor,
      borderRightWidth: 1,
      textAlign: 'right',
      paddingRight: 8,
  },
  discount: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  amount: {
      width: '15%',
      textAlign: 'right',
      paddingRight: 8,
  },
});



interface IProps {
  items: OrderItem[]
}

const InvoiceTableRow = ({items}: IProps) => {
  const rows = items.map( (item: OrderItem) => 
    <View style={styles.row} key={item.short_name.replace(" ", "_")}>
      <Text style={styles.description}>{item.short_name}</Text>
      <Text style={styles.qty}>{item.quantity}</Text>
      <Text style={styles.rate}>{item.price}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
      <Text style={styles.amount}>{(item.quantity * item.price - item.discount).toFixed(2)}</Text>
    </View>
  )
  return (<>{rows}</> )
};
  
export default InvoiceTableRow