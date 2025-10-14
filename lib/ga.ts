export const GA_ID = "G-WHH5NFS1H3";

type GAEvent = {
  action: string;
  params?: Record<string, any>;
};

export function gaEvent({ action, params = {} }: GAEvent) {
  if (typeof window === "undefined") return;
  (window as any).gtag?.("event", action, params);
}

/**
 * Envia evento e só então navega para uma URL externa (ex.: Kiwify).
 * Usa event_callback + timeout de segurança (400ms).
 */
export function trackAndGo(url: string, action: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined" || !(window as any).gtag) {
    window.location.href = url;
    return;
  }
  let fired = false;
  (window as any).gtag("event", action, {
    ...params,
    event_callback: () => {
      fired = true;
      window.location.href = url;
    },
  });
  setTimeout(() => {
    if (!fired) window.location.href = url;
  }, 400);
}
