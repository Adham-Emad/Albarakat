/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذا السطر الذي أضفناه لتصدير الملفات الثابتة
  output: 'export', 
  // ... باقي الإعدادات الأخرى التي لديك
};

// هذا هو التعديل المطلوب:
export default nextConfig;