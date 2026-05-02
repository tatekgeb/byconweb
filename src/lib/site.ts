/** Marketing copy and URLs — override with PUBLIC_* env in production. */
export function getSite() {
  const tms = import.meta.env.PUBLIC_TMS_APP_URL?.replace(/\/$/, '') || 'https://tms.bycon.com';
  return {
    tmsUrl: tms,
    contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@bycon.com',
    salesEmail: import.meta.env.PUBLIC_SALES_EMAIL || 'sales@bycon.com',
    privacyEmail: import.meta.env.PUBLIC_PRIVACY_EMAIL || 'privacy@bycon.com',
    securityEmail: import.meta.env.PUBLIC_SECURITY_EMAIL || 'security@bycon.com',
    careersEmail: import.meta.env.PUBLIC_CAREERS_EMAIL || 'careers@bycon.com',
  };
}
