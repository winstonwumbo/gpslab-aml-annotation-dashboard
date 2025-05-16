/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./dashboard-button.js";

/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class DashboardSidebar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "dashboard-sidebar";
  }

  constructor() {
    super();
    this.title = "";
    this.subtitle = "";
    this.popupStatus = false;

    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/gpslab-annotation-dashboard.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
    this.addEventListener("close-popup", this.__handleClosePopup.bind(this));

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      popupStatus: { type: Boolean, attribute: "popup-status" },

    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        position: fixed;
        color: var(--ddd-theme-default-white);
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        height: 100vh;
        width: 300px;
        overflow-x: hidden;
      }
      .wrapper {
        /* margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4); */
      }
      h3 span {
        font-size: var(--gpslab-annotation-dashboard-label-font-size, var(--ddd-font-size-s));
      }
      .header {
        padding: 0 var(--ddd-spacing-4);
      }
      .header h4 {
        margin-top: 20px;
      }
      .header p {
        padding-left: 20px;
      }
      .navigation {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      gpslab-annotation-dashboard:hover {
      box-shadow: var(--ddd-boxShadow-sm);
    }
    `];
  }

  changePage(e) {
    console.log("changePage", e.target.title);
    this.dispatchEvent(
      new CustomEvent("change-page", {
        bubbles: true,
        composed: true,
        detail: { page: e.target.title },
      })
    );
  }

  // Lit render the HTML
  render() {
    return html`
    <popup-card ?is-visible=${this.popupStatus}></popup-card>

<div class="wrapper">
    <slot></slot>
    <div class="header">
        <h4>${this.title}</h4>
        <p>${this.subtitle}</p>
    </div>
    <div class="navigation">
        <dashboard-button title="Overview" @click=${this.changePage}></dashboard-button>
        <dashboard-button title="Recent Annotations" @click=${this.changePage}></dashboard-button>
        <dashboard-button title="Graph Map" @click=${this.changePage}></dashboard-button>
        <h6>Shortcuts</h6>
        <dashboard-button title="Export" @click=${this.openPopup}></dashboard-button>
    </div>
</div>`;
  }

  __handleClosePopup(e) {
    console.log("closePopup", this.popupStatus);
    this.popupStatus = false;
    console.log("popupStatus", this.popupStatus);
  }

  __handleMenuChange(e) {
    console.log(e.detail)
    this.menuTitle = e.detail.menu;
    console.log(this.menuTitle);
  }

  openPopup(e) {
    console.log("openPopup", this.popupStatus);
    this.popupStatus = true;
    console.log("popupStatus", this.popupStatus);
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DashboardSidebar.tag, DashboardSidebar);