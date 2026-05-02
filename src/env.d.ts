/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TMS_APP_URL?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_SALES_EMAIL?: string;
  readonly PUBLIC_PRIVACY_EMAIL?: string;
  readonly PUBLIC_LEGAL_EMAIL?: string;
  readonly PUBLIC_SECURITY_EMAIL?: string;
  readonly PUBLIC_CAREERS_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
