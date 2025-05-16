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
export class AnnotationForm extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "annotation-form";
  }

  constructor() {
    super();
    this.title = "";
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
        padding: 5px 20px;
        border-radius: 5px;
        width: 150px;
        border: none;
        font-weight: bold;
        font-size: 16px;
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-white);
      }
      button:hover {
        cursor: pointer;
        background-color: darkgray;
      }
      h3 {
        margin: 4px;
      }
      .line-break {
        width: 100%;
      }
      .annotation-boxes {
        display: flex;
        flex-wrap: wrap;
      }
      .secondary {
        display: flex;
        gap: 80px;
      }
      .metadata-boxes {
        text-align: center;
      }
      /* .numeric-boxes {
        display: flex;
        flex-direction: row;
      } */
      .input-item {
        display: flex;
        flex-direction: column;
        margin: 4px 12px;
        padding: 4px 12px;
        background-color: var(--ddd-theme-default-limestoneLight);
        border-radius: 12px;
        box-shadow: var(--ddd-boxShadow-sm);
        font-size: 16px;
      }
      #source-wallet, #destination-wallet {
        width: 300px;
      }
      textarea {
        resize: vertical;
      }
      #description {
        width: 500px;
      }
      input, textarea, select {
        border-radius: 5px;
        border: 2px solid var(--ddd-theme-default-nittanyNavy);
        padding: 4px 12px;
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
            <form id="annotation-form">
            <h3>Case Information</h3>

                <div class="annotation-boxes">

                  <div class="input-item">
                      <label for="transaction-id">Transaction ID</label>
                      <input type="text" id="transaction-id" name="transaction-id" disabled value="2">
                    </div>

                  <div class="input-item">
                        <label for="source-wallet">Source Wallets</label>
                        <textarea type="text" id="source-wallet" name="source-wallet" disabled placeholder="0x9335da37d37bc5d46850eaee48f8b9ccbe94d9a2"></textarea>
                    </div>
                    <div class="input-item">
                        <label for="destination-wallet">Destination Wallets</label>
                        <textarea type="text" id="destination-wallet" name="destination-wallet" disabled placeholder="0x12219a05ee54b309de9c32b9fd6a3a278969e9b6  
0xa975b2563f766662d86f41586c5d0e97395fd6
0xae8543b7bbcea91694f9b176f2ad8872ce457660
0x515acfdae79a28e8332ac9ebddfdee12f8a1cb18  
0x0077eb43007b52d1b28080a05ba3dabe25303811  
0x68181a88c01b20070d1577f2ec490a94f53c8ff5  
0x245c3ee393231b98752a10525a1f2bed3e351e2e  
0x880e3258c1057b12ae4289611d4030b0878aa93c  
0x8552ee9552004f643042525e76bdb1d02ed9846  
0x532ca3e1a39948a3e66c7c87c78554ecded0cafb3c  
0x7d086d845059e238d229e2416f3d6f31c9575217  
0x23dcbdfbde3b6731936e21176d7e46709697eb18  
0xfa26bb677f570ab39cbb0f219b2f359a6072107"></textarea>
                    </div>
                    <div class="line-break"></div>
                    <div class="input-item">
                          <label for="currency-amount">Amount</label>
                          <input type="text" id="currency-amount" name="currency-amount" disabled value="482.3 ETH, 500,000 DAI">
                      </div>
                      <div class="input-item">
                      <label for="currency-amount">Exchanges</label>
                      <input type="text" id="currency-amount" name="currency-amount" disabled value="Tornado Cash, Gate">
                      </div>
                    <div class="input-item">
                        <label for="full-date">Case Date</label>
                        <input type="text" id="full-date" name="full-date" disabled value="5/9/2025">
                    </div>
                </div>
                <div class="secondary">
                  <div class="context-boxes">
                    <h3>Context</h3>

                      <div class="input-item">
                        <label for="title">Case Title</label>
                        <input type="text" id="title" name="title" disabled value="$1.1M BAYC NFT Phishing Scam Traced By Yuga Labs Researcher">
                    </div>
                    <div class="input-item">
                        <label for="description">Description</label>
                        <textarea id="description" name="description" disabled placeholder="In late 2023, a former Yuga Labs security researcher, Sam Curry, was wrongly detained by law enforcement who mistakenly linked him to a $1.1M phishing theft involving Bored Ape NFTs. The actual theft occurred in December 2022 through a social engineering scam using fake X accounts and a phishing site, leading to the loss of 14 BAYC NFTs. The real attacker funneled the stolen funds through Tornado Cash before eventually distributing the money across over 20 Gate.io deposit addresses. The address 0x5e72520038ec800986a9f1021fe2b8e3cd298c8d accidentally linked the Gate deposits to later withdrawals."></textarea>
                    </div>
                    <div class="input-item">
                        <label for="media-source">Media Source</label>
                        <input type="text" id="media-source" name="media-source" disabled value="https://threadreaderapp.com/thread/1920845187586105848.html">
                    </div>
                  </div>
                  <div class="metadata-boxes">
                    <h3>Subgraph Metadata</h3>
                      <div class="input-item">
                          <label for="currency-type">Sender Count</label>
                          <input type="text" id="currency-type" name="currency-type" disabled value="1">
                      </div>
                      <div class="input-item">
                          <label for="currency-type">Interim Entities</label>
                          <input type="text" id="currency-type" name="currency-type" disabled value="10">
                      </div>
                      <div class="input-item">
                          <label for="currency-type">Receiver Count</label>
                          <input type="text" id="currency-type" name="currency-type" disabled value="13">
                      </div>
                      <div class="input-item">
                          <label for="currency-type">Transaction Count</label>
                          <input type="text" id="currency-type" name="currency-type" disabled value="23">
                      </div>
                      <button type="submit">Save</button>

                  </div>
                </div>
            </form>
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

globalThis.customElements.define(AnnotationForm.tag, AnnotationForm);