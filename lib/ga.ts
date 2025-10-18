export const GA_ID = "G-WHH5NFS1H3";


type GAEvent = {
    action: string;
    params?: Record<string, unknown>;
};


export function gaEvent({ action, params = {} }: GAEvent) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", action, params);
}


export function trackAndGo(
    url: string,
    action: string,
    params: Record<string, unknown> = {}
) {
    if (typeof window === "undefined" || !window.gtag) {
        window.location.href = url;
        return;
    }
    let fired = false;
    window.gtag("event", action, {
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