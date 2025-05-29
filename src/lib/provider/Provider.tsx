import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

import { dark } from "@clerk/themes";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </ClerkProvider>
  );
};

export default Provider;
