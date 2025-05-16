import { LitElement, html, css } from 'lit';

export class TransactionGraph extends LitElement {
  static styles = css`
       :host {
        height: 520px;
        width: 600px;
       }
       .graph-container {
            background-color: #1a202c;
            border-radius: 0.5rem;
            position: relative;
            overflow: hidden;
            height: 520px;
            width: 600px;
        }
        
        .node {
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .node:hover {
            transform: scale(1.2);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
        .edge {
            position: absolute;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.5);
            transform-origin: left center;
            z-index: 1;
        }
        
        .selected-edge {
            background-color: #FFD700; /* Penn State gold */
            box-shadow: 0 0 10px #FFD700;
        }
        
        .annotation-panel {
            transition: all 0.3s ease;
            max-height: 0;
            overflow: hidden;
        }
        
        .annotation-panel.open {
            max-height: 1000px;
        }
        
        .risk-low {
            background-color: #1E407C; /* Penn State navy */
        }
        
        .risk-med {
            background-color: #FFD700; /* Penn State gold */
            color: #000;
        }
        
        .risk-high {
            background-color: #CE1126; /* Penn State red */
        }
        
        .technique-tag {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .penn-state-blue {
            background-color: #1E407C;
        }
        
        .penn-state-gold {
            background-color: #FFD700;
        }
        
        .penn-state-red {
            background-color: #CE1126;
        }
        
        .sidebar-header {
            background-color: #1E407C;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAgMjBoNjB2NjBIMjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0zMCAzMGg0MHY0MEgzMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRDcwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+');
            background-repeat: repeat;
            background-size: 30px;
        }
        
        .node-popup {
            position: absolute;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 100;
            width: 250px;
            border: 2px solid #1E407C;
        }
        
        .node-popup-header {
            background-color: #1E407C;
            color: white;
            padding: 0.5rem;
            margin: -1rem -1rem 0.5rem -1rem;
            border-top-left-radius: 0.35rem;
            border-top-right-radius: 0.35rem;
            font-weight: bold;
        }
        
        .node-popup-close {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
        }
  `;

  firstUpdated() {
    this.initGraph();
  }

  initGraph() {
    const container = this.shadowRoot.getElementById('graph-container');
    const width = container.clientWidth;
    const height = container.clientHeight;

    const nodes = [
      { id: 'A', x: width * 0.2, y: height * 0.3, color: '#CE1126', risk: 'High', name: 'Binance', type: 'Exchange', address: '0x123...abcd', balance: '12.5 BTC', firstSeen: '2023-04-12' },
      { id: 'B', x: width * 0.5, y: height * 0.5, color: '#007A33', risk: 'Medium', name: 'Coinbase', type: 'Exchange', address: '0x456...def0', balance: '9.8 BTC', firstSeen: '2023-04-10' },
      { id: 'C', x: width * 0.8, y: height * 0.2, color: '#00205B', risk: 'Low', name: 'Private Wallet', type: 'Wallet', address: '0x789...1234', balance: '5.6 BTC', firstSeen: '2023-04-15' },
      { id: 'D', x: width * 0.3, y: height * 0.8, color: '#FF6F00', risk: 'High', name: 'Suspicious Wallet', type: 'Wallet', address: '0xabc...5678', balance: '1.2 BTC', firstSeen: '2023-05-01' },
      { id: 'E', x: width * 0.7, y: height * 0.75, color: '#6A1B9A', risk: 'Medium', name: 'Kraken', type: 'Exchange', address: '0xdef...9012', balance: '3.3 BTC', firstSeen: '2023-05-03' },
    ];

    const edges = [
      { from: 'A', to: 'B', amount: '2.5 BTC', timestamp: '2023-05-15 08:23:45' },
      { from: 'B', to: 'C', amount: '1.1 BTC', timestamp: '2023-05-15 09:10:12' },
      { from: 'C', to: 'D', amount: '0.4 BTC', timestamp: '2023-05-16 10:05:30' },
      { from: 'A', to: 'D', amount: '0.8 BTC', timestamp: '2023-05-16 11:42:17' },
      { from: 'E', to: 'A', amount: '1.5 BTC', timestamp: '2023-05-17 14:55:01' },
    ];

    nodes.forEach(node => {
      const el = document.createElement('div');
      el.className = 'node';
      el.style.left = `${node.x - 20}px`;
      el.style.top = `${node.y - 20}px`;
      el.style.backgroundColor = node.color;
      el.textContent = node.id;
      el.dataset.nodeData = JSON.stringify(node);

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showNodeDetails(el);
      });

      container.appendChild(el);
    });

    edges.forEach(edge => {
      const fromNode = nodes.find(n => n.id === edge.from);
      const toNode = nodes.find(n => n.id === edge.to);
      const dx = toNode.x - fromNode.x;
      const dy = toNode.y - fromNode.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;

      const el = document.createElement('div');
      el.className = 'edge';
      el.style.width = `${length}px`;
      el.style.left = `${fromNode.x}px`;
      el.style.top = `${fromNode.y}px`;
      el.style.transform = `rotate(${angle}deg)`;
      el.dataset.amount = edge.amount;
      el.dataset.timestamp = edge.timestamp;

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectEdge(el);
      });

      container.appendChild(el);
    });

    container.addEventListener('click', () => {
      this.deselectAllEdges();
      this.closeAllPopups();
    });
  }

  showNodeDetails(el) {
    this.closeAllPopups();
    const node = JSON.parse(el.dataset.nodeData);

    const popup = document.createElement('div');
    popup.className = 'node-popup';
    popup.innerHTML = `
      <div class="node-popup-header">
        Node ${node.id} Details
        <button class="node-popup-close">X</button>
      </div>
      <div class="space-y-2 text-sm">
        <div><strong>Type:</strong> ${node.type}</div>
        <div><strong>Name:</strong> ${node.name}</div>
        <div><strong>Address:</strong> ${node.address}</div>
        <div><strong>Balance:</strong> ${node.balance}</div>
        <div><strong>Risk:</strong> ${node.risk}</div>
        <div><strong>First Seen:</strong> ${node.firstSeen}</div>
      </div>
    `;

    popup.querySelector('.node-popup-close').addEventListener('click', () => popup.remove());
    this.shadowRoot.getElementById('graph-container').appendChild(popup);
  }

  deselectAllEdges() {
    this.shadowRoot.querySelectorAll('.selected-edge').forEach(el => {
      el.classList.remove('selected-edge');
    });
  }

  closeAllPopups() {
    this.shadowRoot.querySelectorAll('.node-popup').forEach(el => el.remove());
  }

  selectEdge(el) {
    this.deselectAllEdges();
    el.classList.add('selected-edge');
  }

  constructor() {
    super();
    this.title = "";
  }

    // Lit reactive properties
    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
        };
    }

  render() {
    return html`
      <div class="graph-container" id="graph-container"></div>
    `;
  }
}

customElements.define('transaction-graph', TransactionGraph);
