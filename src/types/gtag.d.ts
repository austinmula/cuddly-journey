declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
    fbq: (
      command: 'track' | 'init' | 'trackCustom',
      eventName: string,
      data?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
