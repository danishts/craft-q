import {
  LayoutDashboard,
  FileText,
  Package,
  Calendar,
  Layers,
  Truck,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Upholstery Quotes",
    path: "/quotes",
    icon: FileText,
  },
  {
    title: "Pillow Orders",
    path: "/pillow-orders",
    icon: Package,
  },
  {
    title: "Bookings",
    path: "/bookings",
    icon: Calendar,
  },
  {
    title: "Fabric Management",
    path: "/fabric",
    icon: Layers,
  },
  {
    title: "Order Tracker",
    path: "/tracker",
    icon: Truck,
  },
];
