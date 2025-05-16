/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import cytoscape from "cytoscape";
import "./annotation-form.js";
import "./dashboard-button.js";
import "./popup-card.js";
import "./annotation-box.js";

/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class DashboardScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "dashboard-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.menuTitle = "Network Subgraph";
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

    this.addEventListener("change-menu", this.__handleMenuChange.bind(this));

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pageType: { type: String, attribute: "page-type" },
      menuTitle: { type: String, attribute: "menu-title" },
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
      /* :host(:not([popup-status])) {
        popup-card {
          display: block;
        }
      } */
      :host([page-type="Overview"]) .header {
        display: flex;
        width: 70%;
        justify-content: space-between;
      }
      :host([page-type="Add Annotation"]) h3 {
        margin: 4px;
      }
      :host([page-type="Overview"]) h3,
      :host([page-type="Overview"]) dashboard-button {
        display: inline-block;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 300px;
      }
      gpslab-annotation-dashboard:hover {
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .subgraph {
          display: flex;
          justify-content: center;
          color: white;
          background-color: var(--ddd-theme-default-nittanyNavy);
          border-radius: 10px;
          margin: 20px;
          width: 800px;
          height: 420px;
      }
      .add-button {
        --dashboard-button-background-color: var(--ddd-theme-default-nittanyNavy);
        --dashboard-button-text-color: var(--ddd-theme-default-white);
      }
      .table-container {
        padding: 0 80px;
      }
      table {
        width: 300px;

      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
      }
      #cy {
        width: 1000px;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 300px;
      }
      .annotation-types {
        display: flex;
        flex-direction: row;
      }
      .annotation {
        padding: 8px 40px;
        color: #646464;
        border-bottom: 1px solid black;
      }
      .annotation:active, .annotation:hover {
        color: black;
        border-bottom: 2px solid red;
      }
      .questions {
        background-color: lightgray;
      }
      .side-by-side {
        display: flex;
        flex-direction: row;
      }
      .input-item {
        width: 400px;
      }
      .input-item label {
        font-size: 16px;
      }
      select, textarea {
        width: 300px;
      }
      textarea {
        height: 100px;
      }
      tr:hover {
        background-color: lightgray;
      }
    `];
  }

  // Lit render the HTML
  render() {
    if(this.pageType === "Overview") {
      return html`
        <div class="wrapper">
            <div class="header">
              <h3> Dataset Overview</h3> 
              <dashboard-button class="add-button" title="Edit Item" @click=${this.toAnnotationPage}></dashboard-button>
            </div>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Source</th>
                    <th>Currency Involved</th>
                    <th>Amount Stolen</th>
                    <th>Senders</th>
                    <th>Receivers</th>
                    <th>Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr @click=${this.toAnnotationPage}>
                    <td>$1.1M BAYC NFT Phishing Scam Traced By Yuga Labs Researcher</td>
                    <td><a href="https://threadreaderapp.com/thread/1920845187586105848.html">ZachXBT</a></td>
                    <td>ETH, DAI</td>
                    <td>482.3, 500000</td>
                    <td>1</td>
                    <td>13</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>Magna aliqua</td>
                    <td>Ut enim</td>
                    <td>Ad minim</td>
                    <td>Veniam quis</td>
                    <td>Nostrud exercitation</td>
                    <td>Ullamco laboris</td>
                    <td>Nisi ut aliquip</td>
                  </tr>
                  <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>
                  <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>                <tr>
                    <td>Ex ea commodo</td>
                    <td>Consequat</td>
                    <td>Duis aute</td>
                    <td>Irure dolor</td>
                    <td>In reprehenderit</td>
                    <td>Voluptate velit</td>
                    <td>Esse cillum</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      `;
    } else if(this.pageType === "Add Annotation") {
      return html`
        <div class="wrapper">
            <annotation-form></annotation-form>
            <annotation-box title=${this.menuTitle}></annotation-box>
        </div>`;
    } else if(this.pageType === "Graph Map"){
      return html`
        <div class="wrapper">
            <h3> Visualization</h3>
            <div id="cy"></div>
        </div>`;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("pageType")) {
      console.log("pageType changed to", this.pageType);
      // var cy = cytoscape({
      //   container: this.shadowRoot.querySelector('#cy'),
      //   elements: [
      //     { data: { id: 'a' } },
      //     { data: { id: 'b' } },
      //     {
      //       data: {
      //         id: 'ab',
      //         source: 'a',
      //         target: 'b'
      //       }
      //     }]
      // });
    }
  }

  firstUpdated(changedProperties) {
    // var cy = cytoscape({
    //   container: this.shadowRoot.querySelector('#cy'),
    //   elements: [
    //     { data: { id: 'a' } },
    //     { data: { id: 'b' } },
    //     {
    //       data: {
    //         id: 'ab',
    //         source: 'a',
    //         target: 'b'
    //       }
    //     }]
    // });

  }

  toAnnotationPage(e) {
    console.log("changePage", e.target.title);
    this.dispatchEvent(
      new CustomEvent("change-page", {
        bubbles: true,
        composed: true,
        detail: { page: "Add Annotation" },
      })
    );
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

globalThis.customElements.define(DashboardScreen.tag, DashboardScreen);