import { 
  Users, 
  ShoppingCart,
  PackageOpen,
  HeartHandshake
} from "lucide-react";
import type { ReactElement } from "react";

export const ROUTES = {
  // '/dashboard': "Dashboard",
  '/dashboard/admin': "Admin",
  '/dashboard/kiosk': "Kiosk",
  '/dashboard/user': "User",
}

export type ROUTE_DETAIL = {
  path: string;
  title: string;
  label: string;
  description: string;
  icon: () => ReactElement
}

export type DASHBOARD_MAINROUTE_TYPE = Record<string, ROUTE_DETAIL>

const iconSize = 20;

export const DASHBOARD_MAINROUTE_DETAILS = {
  // '/dashboard': "Dashboard",
  orders: {
    path: `/dashboard/orders`,
    title: `Orders`,
    label: `Orders`,
    description: `Create new orders, and view old orders from here.`,
    icon: () => <ShoppingCart size={iconSize} />
  },
  products: {
    path: `/dashboard/products`,
    title: `Products`,
    label: `Products`,
    description: `Add, edit, or delete your products here.`,
    icon: () => <PackageOpen size={iconSize} />
  },
  customers: {
    path: `/dashboard/customers`,
    title: `Customers`,
    label: `Customers`,
    description: `Manage your customers' information here.`,
    icon: () => <HeartHandshake size={iconSize} />
  },
  users: {
    path: `/dashboard/users`,
    title: `Users`,
    label: `Users`,
    description: `Manage your users here`,
    icon: () => <Users size={iconSize} />
  },
}



export default ROUTES;