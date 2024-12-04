import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

export const metadata: Metadata = {
  title: "Inventory Managment",
  description:
    "This project is an Inventory Management System designed to help organizations efficiently track and manage their stock levels, orders, sales, and deliveries. By integrating both client and server components, the system provides a comprehensive solution for real-time inventory monitoring and control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
