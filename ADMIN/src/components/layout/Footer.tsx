import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-6 px-8 border-t border-gray-100 bg-white mt-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600">
        <span>© 2026 | V'Peters Initiative.</span>
        <a 
          href="/terms" 
          className="text-blue-600 hover:underline font-medium"
        >
          Terms & Privacy
        </a>
      </div>
    </footer>
  );
};