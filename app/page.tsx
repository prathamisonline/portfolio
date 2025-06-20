"use client";

import { useEffect } from 'react';
import Home from "@/components/home/home";

export default function Page() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          // Close mobile menu if open
          const mobileMenuButton = document.querySelector('[aria-expanded="true"]');
          if (mobileMenuButton && mobileMenuButton.getAttribute('data-mobile-menu-button') === 'true') {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
          }
          
          // Calculate the scroll position, accounting for the fixed header
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, false);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Home />
    </div>
  );
}
