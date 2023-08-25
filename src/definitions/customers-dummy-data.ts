import type { CustomerInfo } from "~/pages/api/customers";
import { randomUUID } from 'crypto';

export const customersDummyData: CustomerInfo[] = [
  {
    id: randomUUID(),
    first_name: "John",
    last_name: "Dela Cruz",
    phone_number: "0999-999-9999",
    address: "#123 Lansangan St., Brgy. Barangay, Philippines",
  },
  {
    id: randomUUID(),
    first_name: "Gina",
    last_name: "Dimagiba",
    phone_number: "0999-999-1111",
    address: "#352 Lansangan St., Brgy. Barangay, Philippines",
  }
]