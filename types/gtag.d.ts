export { };


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
    | ["event", string, GtagEventParams?]
    | ["consent", "default" | "update", GtagConsentParams?];

type GtagConsentParams = {
    analytics_storage?: "granted" | "denied";
    ad_storage?: "granted" | "denied";
    wait_for_update?: number;
    [key: string]: unknown;
};


type GtagFn = (...args: GtagCommand) => void;


declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: GtagFn;
    }
}