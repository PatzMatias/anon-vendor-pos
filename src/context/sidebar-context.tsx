import React, { useState, useMemo, createContext, useContext, useCallback } from 'react'
import type { ChildProps } from '~/definitions/react'


// create context
export const SidebarContext = createContext<{
  isSidebarOpen: boolean,
  toggleSidebar: () => void,
  closeSidebar: () => void
}>({
  isSidebarOpen: false,
  toggleSidebar: () => {
    //do nothing
  },
  closeSidebar: () => {
    // do nothing
  }
})

export const useSidebar = () => useContext(SidebarContext);

export default function SidebarProvider({ children }: ChildProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar= useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  },[isSidebarOpen]);

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [toggleSidebar, isSidebarOpen]
  )

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
