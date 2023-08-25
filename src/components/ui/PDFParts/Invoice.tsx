import type { OrderInfo } from '~/pages/api/orders';

import { 
  Page, 
  Document,  
  StyleSheet,
  // Image,
  Font,
} from '@react-pdf/renderer';
import InvoiceTitle from '~/components/ui/PDFParts/InvoiceTitle'
import InvoiceNo from '~/components/ui/PDFParts/InvoiceNo'
import InvoiceItemsTable from '~/components/ui/PDFParts/InvoiceItemsTable'
import InvoiceThankYouMsg from '~/components/ui/PDFParts/InvoiceThankYouMsg'
import InvoiceClient from '~/components/ui/PDFParts/InvoiceClient';

Font.register({
  family: 'Fira_Code',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/firacode/v21/uU9NCBsR6Z2vfE9aq3bh0NSDulI.woff2',
      fontWeight: 300,
    },
    {
      src: 'https://fonts.gstatic.com/s/firacode/v21/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/firacode/v21/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/firacode/v21/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/firacode/v21/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2',
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf',
      fontWeight: 100,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf',
      fontWeight: 200,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
      fontWeight: 300,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
      fontWeight: 400,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
      fontWeight: 500,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
      fontWeight: 600,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
      fontWeight: 700,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf',
      fontWeight: 800,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf',
      fontWeight: 900,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft:60,
    paddingRight:60,
    lineHeight: 1.5,
    flexDirection: 'column',
  }, 
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export interface IInvoiceProps {
  order: OrderInfo;
}

const Invoice = ({order}: IInvoiceProps) => (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <Image style={styles.logo} src={logo} /> */}
        <InvoiceTitle title='Invoice'/>
        <InvoiceNo order={order}/>
        <InvoiceClient order={order}/>
        <InvoiceItemsTable order={order} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
);

export default Invoice