import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThemeServiceInit, devuiDarkTheme, Theme, devuiLightTheme } from 'ng-devui/theme';
import { AppModule } from './app/app.module';

import {
  infinityTheme,
  sweetTheme,
  provenceTheme,
  deepTheme,
} from 'ng-devui/theme-collection';

const customTheme = new Theme({
  id: `customize-theme`,
  name: 'custom',
  cnName: '自定义',
  data: Object.assign({}, devuiLightTheme.data, {
    'devui-global-bg': '#cccccc',
  }),
  isDark: false,
});
const pinkTheme = new Theme({
  id: 'pinkTheme',
  name: 'pinkTheme',
  cnName: '粉色主题',
  data: {
    "devui-global-bg": "#f9fafb",
    "devui-glass-morphism-bg": "rgba(245, 246, 248,0.9)",
    "devui-global-bg-normal": "#ffffff",
    "devui-base-bg": "#f8f1f5",
    "devui-base-bg-dark": "#252b3a",
    "devui-brand": "#ec66ab",
    "devui-brand-foil": "#f8f1f5",
    "devui-brand-hover": "#ec66ab",
    "devui-brand-active": "#ec66ab",
    "devui-brand-active-focus": "#ec66ab",
    "devui-contrast": "#c7000b",
    "devui-text": "#2f272f",
    "devui-text-weak": "#575d6c",
    "devui-aide-text": "#827d82",
    "devui-aide-text-hover": "#252b3a",
    "devui-aide-text-stress": "#575d6c",
    "devui-placeholder": "#bdb8bd",
    "devui-light-text": "#ffffff",
    "devui-dark-text": "#252b3a",
    "devui-link": "#526ecc",
    "devui-link-active": "#96114d",
    "devui-link-light": "#96adfa",
    "devui-link-light-active": "#beccfa",
    "devui-line": "#aea6ad",
    "devui-dividing-line": "#eae7e9",
    "devui-block": "#ffffff",
    "devui-area": "#f5f5f5",
    "devui-danger": "#f66f6a",
    "devui-warning": "#fac20a",
    "devui-waiting": "#beccfa",
    "devui-success": "#50d4ab",
    "devui-info": "#5e7ce0",
    "devui-initial": "#e9edfa",
    "devui-unavailable": "#f5f5f5",
    "devui-shadow": "rgba(37, 43, 58, 0.24)",
    "devui-light-shadow": "rgba(37, 43, 58, 0.12)",
    "devui-connected-overlay-shadow": "rgba(37, 43, 58, 0.16)",
    "devui-feedback-overlay-shadow": "rgba(37, 43, 58, 0.2)",
    "devui-icon-text": "#babbc0",
    "devui-icon-bg": "#ffffff",
    "devui-icon-fill": "#71757f",
    "devui-icon-fill-weak": "#babbc0",
    "devui-icon-fill-hover": "#252b3a",
    "devui-icon-fill-active": "#ec66ab",
    "devui-icon-fill-active-hover": "#ec66ab",
    "devui-shape-icon-fill": "#d7d8da",
    "devui-shape-icon-fill-hover": "#babbc0",
    "devui-shape-icon-fill-active": "#babbc0",
    "devui-shape-icon-fill-disabled": "#f5f5f5",
    "devui-form-control-line": "#D7D8DA",
    "devui-form-control-bg": "#ffffff",
    "devui-form-control-line-hover": "#9b9fa8",
    "devui-form-control-line-active": "#ec66ab",
    "devui-form-control-interactive-outline": "rgba(236,102,171,0.08)",
    "devui-form-control-line-active-hover": "#ec66ab",
    "devui-list-item-active-bg": "#ffdcee",
    "devui-list-item-active-text": "#252b3a",
    "devui-list-item-active-hover-bg": "#ffdcee",
    "devui-list-item-hover-bg": "#f7bfdc",
    "devui-list-item-hover-text": "#252b3a",
    "devui-list-item-selected-bg": "#ffdcee",
    "devui-list-item-strip-bg": "#f2f5fc",
    "devui-disabled-bg": "#f6f6f6",
    "devui-disabled-line": "#dfe1e6",
    "devui-disabled-text": "#cbcacb",
    "devui-primary-disabled": "#fad1e6",
    "devui-icon-fill-active-disabled": "#fad1e6",
    "devui-label-bg": "#ffdcee",
    "devui-connected-overlay-bg": "#ffffff",
    "devui-connected-overlay-line": "#ec66ab",
    "devui-fullscreen-overlay-bg": "#ffffff",
    "devui-feedback-overlay-bg": "#464d6e",
    "devui-feedback-overlay-text": "#dfe1e6",
    "devui-embed-search-bg": "#ffdcee",
    "devui-embed-search-bg-hover": "#eef0f5",
    "devui-float-block-shadow": "rgba(94, 124, 224, 0.3)",
    "devui-highlight-overlay": "rgba(255, 255, 255, 0.8)",
    "devui-range-item-hover-bg": "#e9edfa",
    "devui-gray-form-control-bg": "#f5f5f5",
    "devui-gray-form-control-hover-bg": "#ebebeb",
    "devui-nav-expand-bg": "#fbfbfc",
    "devui-primary": "#ec66ab",
    "devui-primary-hover": "#ec66ab",
    "devui-primary-active": "#ec66ab",
    "devui-contrast-hover": "#d64a52",
    "devui-contrast-active": "#b12220",
    "devui-danger-line": "#f66f6a",
    "devui-danger-bg": "#ffd5d4",
    "devui-warning-line": "#fa9841",
    "devui-warning-bg": "#ffe1c7",
    "devui-info-line": "#5e7ce0",
    "devui-info-bg": "#e9edfa",
    "devui-success-line": "#50d4ab",
    "devui-success-bg": "#cffcee",
    "devui-primary-line": "#5e7ce0",
    "devui-primary-bg": "#f2f5fc",
    "devui-default-line": "#5e7ce0",
    "devui-default-bg": "#f7f8fa",
    "devui-shadow-length-base": "0 2px 6px 0",
    "devui-shadow-length-slide-left": "-2px 0 8px 0",
    "devui-shadow-length-slide-right": "2px 0 8px 0",
    "devui-shadow-length-connected-overlay": "0 2px 12px 0",
    "devui-shadow-length-hover": "0 4px 16px 0",
    "devui-shadow-length-feedback-overlay": "0 8px 16px 0",
    "devui-shadow-length-fullscreen-overlay": "0 10px 24px 0",
    "devui-border-radius": "4px",
    "devui-border-radius-feedback": "4px",
    "devui-border-radius-card": "4px",
    "devui-border-radius-full": "100px",
    "devui-font-size": "12px",
    "devui-font-size-card-title": "14px",
    "devui-font-size-page-title": "16px",
    "devui-font-size-modal-title": "18px",
    "devui-font-size-price": "20px",
    "devui-font-size-data-overview": "24px",
    "devui-font-size-icon": "16px",
    "devui-font-size-sm": "12px",
    "devui-font-size-md": "12px",
    "devui-font-size-lg": "14px",
    "devui-font-title-weight": "bold",
    "devui-font-content-weight": "normal",
    "devui-line-height-base": "1.5",
    "devui-animation-ease-in-smooth": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "devui-animation-duration-slow": "300ms",
    "devui-animation-duration-base": "200ms",
    "devui-animation-duration-fast": "100ms",
    "devui-animation-ease-in": "cubic-bezier(0.5, 0, 0.84, 0.25)",
    "devui-animation-ease-out": "cubic-bezier(0.16, 0.75, 0.5, 1)",
    "devui-animation-ease-in-out": "cubic-bezier(0.5, 0.05, 0.5, 0.95)",
    "devui-animation-ease-in-out-smooth": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "devui-animation-linear": "cubic-bezier(0, 0, 1, 1)",
    "devui-z-index-full-page-overlay": "1080",
    "devui-z-index-pop-up": "1060",
    "devui-z-index-dropdown": "1052",
    "devui-z-index-modal": "1050",
    "devui-z-index-drawer": "1040",
    "devui-z-index-framework": "1000",
    "devui-btn-sm-padding": "0 12px",
    "devui-btn-padding": "0 16px",
    "devui-btn-lg-padding": "0 20px",
    "devui-btn-common-bg": "#EBEBEB",
    "devui-btn-common-border-color": "transparent",
    "devui-btn-common-bg-hover": "#D1D1D1",
    "devui-btn-common-color-hover": "#252B3A",
    "devui-btn-common-border-color-hover": "transparent",
    "devui-btn-common-bg-active": "#BDBDBD",
    "devui-btn-common-color-active": "#252B3A",
    "devui-btn-common-border-color-active": "transparent",
    "devui-btn-common-border-disabled": "transparent",
    "devui-icon-hover-bg": "#EBEBEB",
    "devui-icon-active-bg": "#D1D1D1"
    
  },
  isExtendable: true,
});
ThemeServiceInit({
  infinityTheme,
  pinkTheme,
  provenceTheme,
  deepTheme,
  devuiDarkTheme,
  customTheme,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
