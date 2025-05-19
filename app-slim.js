// app-slim.js: Optimized JS Entry Point for millersmint.com

// Import core libraries
import axios from 'axios';
import Alpine from 'alpinejs';

// Register Alpine globally
window.Alpine = Alpine;
Alpine.start();

// Load payment module only if needed
const loadPaymentModule = async () => {
  const module = await import('./modules/payment.js');
  module.initPayment();
};

// Load shipping module only if needed
const loadShippingModule = async () => {
  const module = await import('./modules/shipping.js');
  module.initShipping();
};

// Detect and load modules based on DOM presence
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#payment-form')) {
    loadPaymentModule();
  }
  if (document.querySelector('#shipping-form')) {
    loadShippingModule();
  }
});

// Axios configuration example
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
