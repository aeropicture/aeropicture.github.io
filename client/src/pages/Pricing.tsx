import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "@/components/Layout";

export default function Pricing() {
  return (
    <Layout activePage="pricing">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Simple, Transparent Pricing">
          <p>
            All Aeropic products are free. No subscriptions, no hidden costs, no
            premium tiers. Ever.
          </p>
        </HeroPanel>

        {/* Pricing Table */}
        <Box title="Our Pricing Model">
          <p>
            We believe software should be free and accessible to everyone. That's
            why all Aeropic products are completely free, forever.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>What You Get:</strong>
          </p>
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">All Features</td>
                <td>Access to all features in every product</td>
              </tr>
              <tr>
                <td className="k">No Watermarks</td>
                <td>Export clean, professional files</td>
              </tr>
              <tr>
                <td className="k">No Ads</td>
                <td>Distraction-free experience</td>
              </tr>
              <tr>
                <td className="k">No Tracking</td>
                <td>Your privacy is protected</td>
              </tr>
              <tr>
                <td className="k">Offline Use</td>
                <td>Work without internet connection</td>
              </tr>
              <tr>
                <td className="k">Lifetime Updates</td>
                <td>Always get the latest features</td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Why Free */}
        <Box title="Why Are Aeropic Products Free?">
          <p>
            We believe that professional software should be accessible to
            everyone, regardless of their budget. Our mission is to democratize
            software development and empower creators worldwide.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Our Funding Model:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>Community donations and sponsorships</li>
            <li>Open source contributions</li>
            <li>Grants and partnerships</li>
            <li>Volunteer developers and designers</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            We don't charge users because we believe in the power of free,
            open-source software to change the world.
          </p>
        </Box>

        {/* Comparison */}
        <Box title="Aeropic vs. Competitors">
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Feature</td>
                <td style={{ fontWeight: "bold" }}>Aeropic</td>
                <td>Adobe</td>
                <td>Corel</td>
              </tr>
              <tr>
                <td className="k">Price</td>
                <td>Free</td>
                <td>$20-55/month</td>
                <td>$99-199</td>
              </tr>
              <tr>
                <td className="k">Watermarks</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="k">Offline</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td className="k">Open Source</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="k">No Ads</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Support Aeropic */}
        <Box title="Support Aeropic Development">
          <p>
            While all Aeropic products are free, we appreciate support from our
            community. If you'd like to help us continue development, consider:
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>
              <strong>Donate:</strong> Support our development with a financial
              contribution
            </li>
            <li>
              <strong>Contribute:</strong> Help us build better software
            </li>
            <li>
              <strong>Spread the Word:</strong> Tell your friends about Aeropic
            </li>
            <li>
              <strong>Report Issues:</strong> Help us find and fix bugs
            </li>
            <li>
              <strong>Suggest Features:</strong> Share your ideas for new features
            </li>
          </ul>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Quick Summary */}
        <SideBox title="Quick Summary">
          <p className="note">
            <strong>All Aeropic products are:</strong>
            <br />
            ✓ Free
            <br />
            ✓ Open Source
            <br />
            ✓ No Subscriptions
            <br />
            ✓ No Watermarks
            <br />
            ✓ No Ads
            <br />
            ✓ Privacy-Focused
          </p>
        </SideBox>

        {/* Current Products */}
        <SideBox title="Current Products">
          <ul>
            <li>
              <a href="/product/aqua">Aqua Migrate</a>
              <br />
              <small>Media Editor - Free</small>
            </li>
            <li style={{ marginTop: "8px" }}>
              <a href="#code">Aeropic Code</a>
              <br />
              <small>Code Editor - Coming Soon</small>
            </li>
            <li style={{ marginTop: "8px" }}>
              <a href="#design">Aeropic Design</a>
              <br />
              <small>Design Tool - Coming Soon</small>
            </li>
          </ul>
        </SideBox>

        {/* Get Started */}
        <SideBox title="Get Started">
          <p className="note">
            Ready to download?
            <br />
            <br />
            <a href="/download">Download Now</a>
            <br />
            <br />
            No registration required. No credit card needed.
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
