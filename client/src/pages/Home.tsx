import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  FeatureBox,
  SideBox,
  Box,
} from "@/components/Layout";

export default function Home() {
  return (
    <Layout activePage="home">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Welcome to Aeropic">
          <p>
            Aeropic is a modern software company dedicated to creating
            accessible, powerful tools for everyone. Our mission is to make
            professional-grade software simple and intuitive.
          </p>
          <p>
            Whether you're a content creator, designer, or developer, Aeropic
            has the perfect solution for your needs.
          </p>
          <button className="btn">
            Get Started
            <small>Free Download</small>
          </button>
        </HeroPanel>

        {/* Features Grid */}
        <div className="feat-grid">
          <FeatureBox title="Free & Open">
            All Aeropic software is free to download and use. No hidden costs,
            no subscriptions.
          </FeatureBox>
          <FeatureBox title="Easy to Use">
            Intuitive interfaces designed for everyone, from beginners to
            professionals.
          </FeatureBox>
          <FeatureBox title="Powerful Tools">
            Professional-grade features that rival expensive commercial
            software.
          </FeatureBox>
          <FeatureBox title="Community Driven">
            Built by and for the community. Your feedback shapes our products.
          </FeatureBox>
        </div>

        {/* Featured Product */}
        <Box title="Featured Product: Aqua Migrate">
          <p>
            <strong>Aqua Migrate</strong> is a free offline media editing
            software designed for everyone. Edit photos, videos, and audio with
            professional tools.
          </p>
          <p style={{ marginTop: "8px" }}>
            <strong>Key Features:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>Non-destructive editing</li>
            <li>Support for multiple formats</li>
            <li>Professional filters and effects</li>
            <li>Batch processing</li>
            <li>No internet required</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            <a href="/product/aqua" className="btn">
              Learn More
              <small>View Details</small>
            </a>
          </p>
        </Box>

        {/* Why Choose Aeropic */}
        <Box title="Why Choose Aeropic?">
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Free</td>
                <td>All software is completely free, forever.</td>
              </tr>
              <tr>
                <td className="k">Offline</td>
                <td>Work without internet connection.</td>
              </tr>
              <tr>
                <td className="k">Open Source</td>
                <td>Community-driven development.</td>
              </tr>
              <tr>
                <td className="k">Cross-Platform</td>
                <td>Works on Windows, Mac, and Linux.</td>
              </tr>
              <tr>
                <td className="k">No Ads</td>
                <td>Clean interface, no distractions.</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Latest News */}
        <SideBox title="Latest News">
          <p style={{ fontSize: "10px", marginBottom: "8px" }}>
            <strong>Aqua Migrate 1.0 Released</strong>
            <br />
            Our flagship media editor is now available for download.
          </p>
          <p style={{ fontSize: "10px", marginBottom: "8px" }}>
            <strong>New Community Forum</strong>
            <br />
            Join our growing community of creators and developers.
          </p>
          <p style={{ fontSize: "10px" }}>
            <strong>Roadmap 2026</strong>
            <br />
            Check out our plans for new features and products.
          </p>
        </SideBox>

        {/* Quick Links */}
        <SideBox title="Quick Links">
          <ul>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/download">Download</a>
            </li>
            <li>
              <a href="/support">Documentation</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </SideBox>

        {/* System Requirements */}
        <SideBox title="System Requirements">
          <p className="note">
            <strong>Minimum:</strong>
            <br />
            Windows 7+ / macOS 10.12+ / Linux (any modern distro)
            <br />
            <br />
            <strong>Recommended:</strong>
            <br />
            Windows 10+ / macOS 11+ / Ubuntu 20.04+
            <br />
            4GB RAM, 2GB disk space
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
