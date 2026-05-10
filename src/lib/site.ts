/** Marketing copy and URLs — override with PUBLIC_* env in production. */
export function getSite() {
  const tms = import.meta.env.PUBLIC_TMS_APP_URL?.replace(/\/$/, '') || 'https://tms.bycon.net';
  const admin = 'admin@bycon.net';
  const privacy = import.meta.env.PUBLIC_PRIVACY_EMAIL || admin;
  return {
    tmsUrl: tms,
    contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || admin,
    salesEmail: import.meta.env.PUBLIC_SALES_EMAIL || 'sales@bycon.net',
    privacyEmail: privacy,
    legalEmail: import.meta.env.PUBLIC_LEGAL_EMAIL || privacy,
    securityEmail: import.meta.env.PUBLIC_SECURITY_EMAIL || admin,
    careersEmail: import.meta.env.PUBLIC_CAREERS_EMAIL || admin,
  };
}
