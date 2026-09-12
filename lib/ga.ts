export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const gaEvent = ({ action, params }: { action: string; params?: Record<string, unknown> }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};

export const trackAndGo = (
  url: string,
  action: string = "click",
  params: Record<string, unknown> = {}
) => {
  if (typeof window !== "undefined" && window.gtag) {
    let navigated = false;
    const timeout = setTimeout(() => {
      if (!navigated) {
        navigated = true;
        window.location.href = url;
      }
    }, 1000);

    window.gtag("event", action, {
      ...params,
      event_callback: () => {
        if (!navigated) {
          navigated = true;
          clearTimeout(timeout);
          window.location.href = url;
        }
      },
    });
  } else {
    window.location.href = url;
  }
};
