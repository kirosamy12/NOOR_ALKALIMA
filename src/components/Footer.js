import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 text-center w-full" style={{direction: 'rtl'}}>
      <span className="block text-sm">جميع الحقوق محفوظة لـ kirellos samy © {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer; 