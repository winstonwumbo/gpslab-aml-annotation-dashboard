/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./src/dashboard-sidebar.js";
import "./src/dashboard-screen.js";

/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class GpslabAmlAnnotationDashboard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "gpslab-aml-annotation-dashboard";
  }

  constructor() {
    super();
    this.title = "";
    this.currentPage = "Overview";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.addEventListener("change-page", this.__handlePageChange.bind(this));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentPage: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-white);
        font-family: var(--ddd-font-navigation);
        /* height: 100vh;
        width: 100vw; */
        overflow-x: hidden;
      }
      .wrapper {
        display: flex;
        /* margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4); */
      }
      h3 span {
        font-size: var(--gpslab-annotation-dashboard-label-font-size, var(--ddd-font-size-s));
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
  <dashboard-sidebar title="Cryptocurrency AML Dashboard" subtitle="Penn State GPS Lab"></dashboard-sidebar>
  <dashboard-screen page-type=${this.currentPage}></dashboard-screen>
  <slot></slot>
</div>`;
  }

  __handlePageChange(e) {
    this.currentPage = e.detail.page;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(GpslabAmlAnnotationDashboard.tag, GpslabAmlAnnotationDashboard);