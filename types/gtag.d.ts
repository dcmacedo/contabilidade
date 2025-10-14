// types/gtag.d.ts
export {};

type GtagConfigParams = {
  send_page_view?: boolean;
  [key: string]: unknown;
};

type GtagEventParams = {
  event_callback?: () => void;
  [key: string]: unknown;
};

type GtagCommand =
  | ["js", Date]
  | ["config", string, GtagConfigParams?]
  | ["event", string, GtagEventParams?];

type GtagFn = (...args: GtagCommand) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GtagFn;
  }
}
