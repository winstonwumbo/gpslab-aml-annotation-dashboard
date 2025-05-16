/**
 * Copyright 2025 winstonwumbo
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./transaction-graph.js";
/**
 * `gpslab-annotation-dashboard`
 * 
 * @demo index.html
 * @element gpslab-annotation-dashboard
 */
export class AnnotationBox extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "annotation-box";
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
      title: { type: String, reflect: true },
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
        width: 100vw;
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
        width: 370px;
      }
      .input-item label {
        font-size: 16px;
      }
      .input-item label {
        width: 60px;
      }
      select, textarea {
        width: 300px;
      }
      textarea {
        height: 100px;
      }
      .subgraph {
          display: flex;
          justify-content: center;
          color: white;
          background-color: var(--ddd-theme-default-nittanyNavy);
          border-radius: 10px;
          margin: 20px;
          width: 600px;
          height: 420px;
      }
    `];
  }

  updated(changedProperties){
    super.updated(changedProperties);
    if(changedProperties.has("title")){
        console.log(changedProperties)
    }
  }

  changeMenu (e) {
    let buttonName = e.target.textContent;
    this.dispatchEvent(
        new CustomEvent("change-menu", {
          bubbles: true,
          composed: true,
          detail: { menu: buttonName },
        })
      );
  }
  // Lit render the HTML
  render() {
    if(this.title == "Network Subgraph") {
    return html`
        <div class="wrapper">
            <div class="questions">
                        <div class="annotation-types">
                          <button class="annotation" @click=${this.changeMenu}>Network Subgraph</button>
                          <button class="annotation" @click=${this.changeMenu}>Risk Assessment</button>
                          <button class="annotation" @click=${this.changeMenu}>Regulatory Analysis</button>
                          <button class="annotation" @click=${this.changeMenu}>Behavior Simulation</button>
                        </div>
                        <h3> Current Subgraph</h3>
                        <div class="side-by-side">
                        <!-- <div class="subgraph">No subgraph</div> -->
                        <div><transaction-graph></transaction-graph></div>
                        <div class="actual-questions">
                          <h6>Please annotate this transaction</h6>
                          <div class="input-item">
                                    <label for="exchange">Are there any known laundering techniques? Choose from this list or add a new entry:</label><br>
                                    <input type="radio" id="html" name="fav_language" value="HTML">
                                    <label for="html">Layering</label><br>
                                    <input type="radio" id="css" name="fav_language" value="CSS">
                                    <label for="css">Smurfing</label><br>
                                    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                                    <label for="javascript">Cross-Chain Transfer</label><br>
                                    <input type="radio" id="t" name="fav_language" value="JavaScript">
                                    <label for="t">Tumbling</label><br>
                                    <input type="radio" id="o" name="fav_language" value="JavaScript">
                                    <label for="o">Other</label>
                          </div>
                          <div class="input-item">
                                  <div class="input-item">
                                    <label for="exchange">Tag suspicious edges in the subgraph</label>
                                    <select name="exchange" id="mySelect" placeholder="Select the Exchange Used">
                                      <option value="1">Select a pair...</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="others">Others</option>
                                    </select>
                                  </div>
                          </div>
                          <div class="input-item">
                            <div><label>Notes</label></div>
                            <textarea placeholder="Describe the transaction pattern"></textarea>
                          </div>
            
                        </div>
            
                        </div>
                        </div>
        </div>`;}
        else if(this.title == "Risk Assessment") {
            return html`
                <div class="wrapper">
                    <div class="questions">
                                <div class="annotation-types">
                                <button class="annotation" @click=${this.changeMenu}>Network Subgraph</button>
                          <button class="annotation" @click=${this.changeMenu}>Risk Assessment</button>
                          <button class="annotation" @click=${this.changeMenu}>Regulatory Analysis</button>
                          <button class="annotation" @click=${this.changeMenu}>Behavior Simulation</button>
                
                                </div>
                                <div id="risk" class="actual-questions">
                                <h3 class="text-lg font-medium mb-4">Risk Assessment</h3>
                                
                                <div style="display: flex; justify-content: space-between;" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Quantitative Risk Score</label>
                                        <div class="flex space-x-2">
                                            <button class="risk-score-btn px-3 py-1 rounded-full text-white risk-score-low" data-score="low">Low</button>
                                            <button class="risk-score-btn px-3 py-1 rounded-full text-white risk-score-medium" data-score="medium">Medium</button>
                                            <button class="risk-score-btn px-3 py-1 rounded-full text-white risk-score-high" data-score="high">High</button>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Financial Impact</label>
                                        <select class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Minimal (< $10k)</option>
                                            <option>Moderate ($10k - $100k)</option>
                                            <option selected>Significant ($100k - $1M)</option>
                                            <option>Major (> $1M)</option>
                                        </select>
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Qualitative Risk Explanation</label><br>
                                    <textarea class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Explain the reasoning behind the risk assessment..."></textarea>
                                </div>
                                
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Security Impact</label><br>
                                    <textarea class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="2" placeholder="Describe any security implications..."></textarea>
                                </div>
                                </div>
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Key Risk Factors</label>
                                    <div class="space-y-2 mt-2">
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Rapid transaction turnover</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">Use of privacy coins/mixers</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">Offshore/non-compliant exchanges</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Structured transactions</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Newly created accounts</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex justify-end">
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <i class="fas fa-save mr-2"></i>Save Assessment
                                    </button>
                                </div>
                            </div>

                    </div>                
                </div>
            `
        } else if (this.title == "Regulatory Analysis") {
            return html`
                <div class="wrapper">
                    <div class="questions">
                                <div class="annotation-types">
                                <button class="annotation" @click=${this.changeMenu}>Network Subgraph</button>
                                <button class="annotation" @click=${this.changeMenu}>Risk Assessment</button>
                                <button class="annotation" @click=${this.changeMenu}>Regulatory Analysis</button>
                                <button class="annotation" @click=${this.changeMenu}>Behavior Simulation</button>
                                </div>
                                                            <!-- Regulatory Annotations -->
                            <div id="regulatory" class="actual-questions">
                                <h3 class="text-lg font-medium mb-4">Regulatory Analysis</h3>
                                <div style="display: flex; justify-content: space-between;">
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Regulatory Loopholes Exploited</label><br>
                                    <textarea class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Describe any regulatory gaps or loopholes exploited in this case..."></textarea>
                                </div>
                                
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Jurisdictional Rules Bypassed</label>
                                    <div class="space-y-2 mt-2">
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">AML reporting requirements</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">KYC verification norms</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">Sanctions evasion</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Travel rule compliance</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Source of funds verification</label>
                                        </div>
                                    </div>
                                </div>
                                 </div>
                                <div class="mb-6">
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Affected Jurisdictions</label><br>
                                    <textarea style="width: 600px;" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="List which localities regulations would be applied under"></textarea>
                                </div>
                                
                                <div class="flex justify-end">
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <i class="fas fa-save mr-2"></i>Save Analysis
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>`;
        } else if (this.title == "Behavior Simulation") {
            return html`
                <div class="wrapper">
                    <div class="questions">
                    <div class="annotation-types">
                                <button class="annotation" @click=${this.changeMenu}>Network Subgraph</button>
                                <button class="annotation" @click=${this.changeMenu}>Risk Assessment</button>
                                <button class="annotation" @click=${this.changeMenu}>Regulatory Analysis</button>
                                <button class="annotation" @click=${this.changeMenu}>Behavior Simulation</button>
                                </div>
                                <!-- Attacker Behavioral Simulation -->
                            <div class="mb-6 actual-questions">
                                
                                <div class="annotation-panel mt-2" id="attacker-simulation">
                                    <div class="space-y-4 p-3">
                                        <div style="display: flex; justify-content: space-between;">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Attacker Actions</label><br>
                                            <textarea class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:border-blue-500 focus:ring-blue-500" rows="3" placeholder="What would you do as an attacker?"></textarea>
                                        </div>
                                        
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Plausible Legitimate Actions</label><br>
                                            <div class="space-y-2 mt-2">
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">DeFi swaps
                                            </label><br>
                                            (Decentralized exchange transactions)
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Cross-chain bridges</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 text-sm text-gray-700">Flash loans</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Token airdrops</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Privacy wallets</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                            <label class="ml-2 text-sm text-gray-700">Other</label>
                                        </div>
                                    </div>
                                        </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Potential Countermeasures</label><br>
                                            <textarea class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:border-blue-500 focus:ring-blue-500" rows="2" placeholder="Suggested countermeasures..."></textarea>
                                        </div>
                                        
                                        <button class="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg text-sm">
                                            Save Simulation Notes
                                        </button>
                                    </div>
                    </div>
                </div></div></div>`;
        }

  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(AnnotationBox.tag, AnnotationBox);