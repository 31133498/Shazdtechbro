import { create } from 'zustand';

interface PortfolioState {
  isDarkMode: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  toggleDarkMode: () => void;
  setActiveSection: (section: string) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  isDarkMode: true,
  activeSection: 'hero',
  isMenuOpen: false,
  
  toggleDarkMode: () => set((state) => ({ 
    isDarkMode: !state.isDarkMode 
  })),
  
  setActiveSection: (section: string) => set({ 
    activeSection: section 
  }),
  
  toggleMenu: () => set((state) => ({ 
    isMenuOpen: !state.isMenuOpen 
  })),
  
  closeMenu: () => set({ 
    isMenuOpen: false 
  }),
}));