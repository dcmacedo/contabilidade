export const GTM_TRACKING_ID = 'GTM-NT6W4GW'

export const GTMPageView = (url: string) => {
  interface PageEventProps {
    event: string
    page: string
  }

  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url,
  }
  //@ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent)
  return pageEvent
}
