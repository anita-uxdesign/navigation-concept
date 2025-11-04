'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback, useRef } from 'react';
import { mainNavItems } from '@/config/navigation';

type NavigationContextType = {
  subNavOpen: boolean;
  toggleSubNav: () => void;
  pinnedItems: string[];
  setPinnedItems: (items: string[]) => void;
  itemOrder: string[];
  setItemOrder: (order: string[]) => void;
  expandedSections: Record<string, boolean>;
  toggleSection: (sectionId: string) => void;
  currentArea: string | null;
  setCurrentArea: (area: string | null) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with defaults to match SSR
  const defaultPinned = useMemo(() => mainNavItems.filter(item => item.defaultPinned).map(item => item.id), []);
  const defaultOrder = useMemo(() => mainNavItems.map(item => item.id), []);
  const defaultExpanded = useMemo(() => ({ section1: true }), []);

  const [subNavOpen, setSubNavOpen] = useState(true);
  const [pinnedItems, setPinnedItemsState] = useState<string[]>(defaultPinned);
  const [itemOrder, setItemOrderState] = useState<string[]>(defaultOrder);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(defaultExpanded);
  const [currentArea, setCurrentAreaState] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Use refs to debounce localStorage writes
  const saveTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

  // Hydrate from localStorage after mount (client-only)
  useEffect(() => {
    const savedPinned = localStorage.getItem('pinnedNavItems');
    if (savedPinned) {
      setPinnedItemsState(JSON.parse(savedPinned));
    }

    const savedOrder = localStorage.getItem('navItemOrder');
    if (savedOrder) {
      setItemOrderState(JSON.parse(savedOrder));
    }

    const savedExpanded = localStorage.getItem('expandedSections');
    if (savedExpanded) {
      setExpandedSections(JSON.parse(savedExpanded));
    }

    setIsHydrated(true);
  }, []);

  // Debounced localStorage save function
  const debouncedSave = useCallback((key: string, value: any) => {
    if (saveTimeoutRef.current[key]) {
      clearTimeout(saveTimeoutRef.current[key]);
    }
    saveTimeoutRef.current[key] = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, 300);
  }, []);

  // Save to localStorage when values change (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      debouncedSave('pinnedNavItems', pinnedItems);
    }
  }, [pinnedItems, isHydrated, debouncedSave]);

  useEffect(() => {
    if (isHydrated) {
      debouncedSave('navItemOrder', itemOrder);
    }
  }, [itemOrder, isHydrated, debouncedSave]);

  useEffect(() => {
    if (isHydrated) {
      debouncedSave('expandedSections', expandedSections);
    }
  }, [expandedSections, isHydrated, debouncedSave]);

  const toggleSubNav = useCallback(() => setSubNavOpen(prev => !prev), []);

  const setPinnedItems = useCallback((items: string[]) => {
    setPinnedItemsState(items);
  }, []);

  const setItemOrder = useCallback((order: string[]) => {
    setItemOrderState(order);
  }, []);

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }, []);

  const setCurrentArea = useCallback((area: string | null) => {
    setCurrentAreaState(prevArea => {
      if (area !== prevArea) {
        // Reset expanded sections to default when area changes
        setExpandedSections({ section1: true });
        // Reopen sub navigation when switching areas
        setSubNavOpen(true);
        return area;
      }
      return prevArea;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      subNavOpen,
      toggleSubNav,
      pinnedItems,
      setPinnedItems,
      itemOrder,
      setItemOrder,
      expandedSections,
      toggleSection,
      currentArea,
      setCurrentArea,
    }),
    [
      subNavOpen,
      toggleSubNav,
      pinnedItems,
      setPinnedItems,
      itemOrder,
      setItemOrder,
      expandedSections,
      toggleSection,
      currentArea,
      setCurrentArea,
    ]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
