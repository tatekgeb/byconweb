/** Marketing copy and URLs — override with PUBLIC_* env in production. */
export function getSite() {
  const tms = import.meta.env.PUBLIC_TMS_APP_URL?.replace(/\/$/, '') || 'https://tms.bycon.net';
  const privacy =
    import.meta.env.PUBLIC_PRIVACY_EMAIL || 'privacy@bycon.net';
  return {
    tmsUrl: tms,
    contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@bycon.net',
    salesEmail: import.meta.env.PUBLIC_SALES_EMAIL || 'sales@bycon.net',
    privacyEmail: privacy,
    legalEmail: import.meta.env.PUBLIC_LEGAL_EMAIL || privacy,
    securityEmail: import.meta.env.PUBLIC_SECURITY_EMAIL || 'security@bycon.net',
    careersEmail: import.meta.env.PUBLIC_CAREERS_EMAIL || 'careers@bycon.net',
  };
}
