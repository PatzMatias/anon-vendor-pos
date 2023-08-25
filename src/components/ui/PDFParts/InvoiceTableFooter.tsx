import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { PesoPriceFormatter } from '~/definitions/general';

// const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold',
  },
  footerWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  description: {
    fontFamily: 'Helvetica-Bold',
  },
  total: {
    fontFamily: 'Courier-Bold',
    textAlign: 'right',
    paddingRight: 8,
    fontWeight: 700
  },
});

interface IProps {
  total: number
}

const InvoiceTableFooter = ({total}: IProps) => {
    // const formattedAmount = PesoPriceFormatter(total);
    return(    
      <View style={styles.row}>
        {/* <Text style={styles.description}>TOTAL</Text> */}
        <View style={styles.footerWrap}>
          <Text style={styles.description}>Total Amount:</Text>
          <Text style={styles.total}> {`Php ${PesoPriceFormatter(total, "decimal")}`}</Text>
        </View>
      </View>
    )
};
  
  export default InvoiceTableFooter