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
export class PopupCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "popup-card";
  }

  constructor() {
    super();
    this.title = "";
    this.isVisible = false;
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      isVisible: { type: Boolean, attribute: "is-visible" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
        position: fixed;
        top: 340px;
        left: 300px;
      }
      :host(:not([is-visible])) {
        display: none;
      }
      .wrapper {
        position: absolute;
        background-color: lightgray;
        border-radius: 10px;
        border: 1px solid black;
        width: 600px;
      }
      h3, .close-button {
        color: black;
      }
      h6 {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
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
            <slot></slot><h3>Export AML Dataset</h3>
            <h6>Download as CSV</h6>
            <div class="close-button" @click=${this.closePopup}>X</div>
        </div>`;
  }

  closePopup() {
    this.isVisible = false;
    this.dispatchEvent(
      new CustomEvent("close-popup", {
        bubbles: true,
        composed: true,
        detail: { isVisible: false },
      })
    );
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PopupCard.tag, PopupCard);