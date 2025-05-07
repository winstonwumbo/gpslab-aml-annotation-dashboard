import { html, fixture, expect } from '@open-wc/testing';
import "../gpslab-annotation-dashboard.js";

describe("GpslabAnnotationDashboard test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <gpslab-annotation-dashboard
        title="title"
      ></gpslab-annotation-dashboard>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
