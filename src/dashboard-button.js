/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class DashboardButton extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "dashboard-button";
  }

  constructor() {
    super();
    this.title = "";
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
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }
      button {
        padding: 15px 20px;
        border-radius: 5px;
        width: 250px;
        border: none;
        font-weight: bold;
        font-size: 16px;
        background-color: var(--dashboard-button-background-color, var(--ddd-theme-default-white));
        color: var(--dashboard-button-text-color, var(--ddd-theme-default-nittanyNavy));
      }
      button:hover {
        cursor: pointer;
        background-color: darkgray;
      }
      gpslab-annotation-dashboard:hover {
      box-shadow: var(--ddd-boxShadow-sm);
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
        <div class="wrapper">
            <slot></slot><button>${this.title}</button>
        </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DashboardButton.tag, DashboardButton);