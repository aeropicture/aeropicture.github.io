import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "../components/Layout";
import { Link } from "wouter";

export default function Products() {
  return (
    <Layout activePage="products">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Aeropic Products">
          <p>
            Discover our collection of free, powerful software tools designed
            for creators, developers, and everyone in between.
          </p>
        </HeroPanel>

        {/* Aqua Migrate */}
        <Box title="Aqua Migrate - Media Editor">
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ flex: 1 }}>
              <p>
                <strong>Free offline media editing software</strong> for photos,
                videos, and audio.
              </p>
              <p style={{ marginTop: "8px" }}>
                Aqua Migrate combines professional-grade features with an
                intuitive interface. Edit your media offline, without
                subscriptions or watermarks.
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>Features:</strong>
              </p>
              <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
                <li>Non-destructive editing</li>
                <li>Support for RAW, JPEG, PNG, MP4, WebM, WAV, MP3</li>
                <li>Professional filters and effects</li>
                <li>Batch processing</li>
                <li>Color grading tools</li>
                <li>No internet required</li>
                <li>No watermarks</li>
              </ul>
              <p style={{ marginTop: "12px" }}>
                <Link href="/product/aqua" className="btn">
                  View Details
                  <small>Learn More</small>
                </Link>
                <span className="price-tag">Free</span>
              </p>
            </div>
          </div>
        </Box>

        {/* Coming Soon */}
        <Box title="Coming Soon">
          <p>
            We're working on several new products to expand the Aeropic
            ecosystem:
          </p>
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Aeropic Code</td>
                <td>A lightweight code editor for developers</td>
              </tr>
              <tr>
                <td className="k">Aeropic Design</td>
                <td>Vector graphics and UI design tool</td>
              </tr>
              <tr>
                <td className="k">Aeropic Sync</td>
                <td>Cloud synchronization for your projects</td>
              </tr>
              <tr>
                <td className="k">Aeropic Collaborate</td>
                <td>Real-time collaboration for teams</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "10px" }}>
            <em>
              Follow our roadmap and join our community to stay updated on new
              releases.
            </em>
          </p>
        </Box>

        {/* Why Aeropic */}
        <Box title="Why Choose Aeropic Products?">
          <div className="feat-grid">
            <div className="feat-box">
              <div className="icn"></div>
              <h3>100% Free</h3>
              <p>No subscriptions, no hidden costs, forever free.</p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Offline First</h3>
              <p>Work without internet. Your data stays on your computer.</p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Open Source</h3>
              <p>Transparent development, community-driven features.</p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Professional</h3>
              <p>Enterprise-grade features for everyone.</p>
            </div>
          </div>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Product Categories */}
        <SideBox title="Product Categories">
          <ul>
            <li>
              <a href="#media">Media Editing</a>
            </li>
            <li>
              <a href="#development">Development Tools</a>
            </li>
            <li>
              <a href="#design">Design Tools</a>
            </li>
            <li>
              <a href="#collaboration">Collaboration</a>
            </li>
            <li>
              <a href="#utilities">Utilities</a>
            </li>
          </ul>
        </SideBox>

        {/* Download Stats */}
        <SideBox title="Download Stats">
          <p className="note">
            <strong>Aqua Migrate</strong>
            <br />
            Downloads: 50,000+
            <br />
            Rating: 4.8/5 stars
            <br />
            <br />
            <strong>Active Users</strong>
            <br />
            Monthly: 15,000+
          </p>
        </SideBox>

        {/* Get Started */}
        <SideBox title="Get Started">
          <p className="note">
            Ready to try Aeropic products?
            <br />
            <br />
            <a href="/download">Download Now</a>
            <br />
            <br />
            <a href="/support">View Documentation</a>
            <br />
            <br />
            <a href="#contact">Get Support</a>
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
