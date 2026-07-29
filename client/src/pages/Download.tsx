import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "../components/Layout";

export default function Download() {
  return (
    <Layout activePage="download">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Download Aeropic">
          <p>
            Download free, professional software for media editing, development,
            and design. No registration required.
          </p>
        </HeroPanel>

        {/* Aqua Migrate */}
        <Box title="Aqua Migrate - Media Editor">
          <p>
            <strong>Free offline media editing software</strong> for photos,
            videos, and audio.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Version:</strong> 1.0.0 | <strong>Released:</strong> January
            2026 | <strong>Size:</strong> 250MB
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Download for your operating system:</strong>
          </p>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <button className="btn">
              Windows
              <small>64-bit Installer</small>
            </button>
            <button className="btn">
              macOS
              <small>Universal Binary</small>
            </button>
            <button className="btn">
              Linux
              <small>AppImage</small>
            </button>
          </div>
          <p style={{ marginTop: "10px" }}>
            <strong>Alternative Downloads:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>
              <a href="#portable">Portable Version (Windows)</a>
            </li>
            <li>
              <a href="#zip">ZIP Archive</a>
            </li>
            <li>
              <a href="#source">Source Code</a>
            </li>
          </ul>
        </Box>

        {/* System Requirements */}
        <Box title="System Requirements">
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Windows</td>
                <td>
                  Windows 7 or later
                  <br />
                  Processor: 1 GHz or faster
                  <br />
                  RAM: 2GB minimum, 4GB recommended
                  <br />
                  Disk: 500MB free space
                </td>
              </tr>
              <tr>
                <td className="k">macOS</td>
                <td>
                  macOS 10.12 or later
                  <br />
                  Processor: Intel or Apple Silicon
                  <br />
                  RAM: 2GB minimum, 4GB recommended
                  <br />
                  Disk: 500MB free space
                </td>
              </tr>
              <tr>
                <td className="k">Linux</td>
                <td>
                  Any modern Linux distribution
                  <br />
                  Processor: 1 GHz or faster
                  <br />
                  RAM: 2GB minimum, 4GB recommended
                  <br />
                  Disk: 500MB free space
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Installation Guide */}
        <Box title="Installation Guide">
          <p>
            <strong>Windows:</strong>
          </p>
          <ol style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>Download the Windows installer</li>
            <li>Double-click the .exe file to start installation</li>
            <li>Follow the on-screen instructions</li>
            <li>Click "Finish" when installation is complete</li>
            <li>Aqua Migrate will launch automatically</li>
          </ol>

          <p style={{ marginTop: "10px" }}>
            <strong>macOS:</strong>
          </p>
          <ol style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>Download the macOS installer</li>
            <li>Open the .dmg file</li>
            <li>Drag Aqua Migrate to the Applications folder</li>
            <li>Open Applications and double-click Aqua Migrate</li>
            <li>Grant permissions if prompted</li>
          </ol>

          <p style={{ marginTop: "10px" }}>
            <strong>Linux:</strong>
          </p>
          <ol style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>Download the AppImage file</li>
            <li>Make it executable: chmod +x Aqua-Migrate.AppImage</li>
            <li>Double-click to run, or: ./Aqua-Migrate.AppImage</li>
            <li>No installation required!</li>
          </ol>
        </Box>

        {/* Portable Version */}
        <Box title="Portable Version">
          <p>
            Don't want to install? Use the portable version instead. It works
            from a USB drive or any folder without installation.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Advantages:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>No installation required</li>
            <li>Works from USB drive</li>
            <li>No system registry changes</li>
            <li>Perfect for portable computing</li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            <button className="btn">
              Download Portable
              <small>Windows 64-bit</small>
            </button>
          </p>
        </Box>

        {/* Older Versions */}
        <Box title="Older Versions">
          <p>
            Need an older version? Browse our archive of previous releases.
          </p>
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Version 1.0.0</td>
                <td>
                  January 2026 - Latest
                  <br />
                  <a href="#v1-0-0">Release Notes</a>
                </td>
              </tr>
              <tr>
                <td className="k">Version 0.9.0</td>
                <td>
                  December 2025 - Beta
                  <br />
                  <a href="#v0-9-0">Release Notes</a>
                </td>
              </tr>
              <tr>
                <td className="k">Version 0.8.0</td>
                <td>
                  November 2025 - Early Beta
                  <br />
                  <a href="#v0-8-0">Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Coming Soon */}
        <Box title="Coming Soon">
          <p>
            More Aeropic products are on the way. Stay tuned for announcements.
          </p>
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Aeropic Code</td>
                <td>Lightweight code editor for developers</td>
              </tr>
              <tr>
                <td className="k">Aeropic Design</td>
                <td>Vector graphics and UI design tool</td>
              </tr>
              <tr>
                <td className="k">Aeropic Sync</td>
                <td>Cloud synchronization for your projects</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Quick Download */}
        <SideBox title="Quick Download">
          <p className="note">
            <strong>Aqua Migrate 1.0.0</strong>
            <br />
            <br />
            <a href="#windows" style={{ display: "block", marginBottom: "8px" }}>
              <button className="btn" style={{ width: "100%" }}>
                Windows
              </button>
            </a>
            <a href="#mac" style={{ display: "block", marginBottom: "8px" }}>
              <button className="btn" style={{ width: "100%" }}>
                macOS
              </button>
            </a>
            <a href="#linux" style={{ display: "block" }}>
              <button className="btn" style={{ width: "100%" }}>
                Linux
              </button>
            </a>
          </p>
        </SideBox>

        {/* Download Stats */}
        <SideBox title="Download Stats">
          <p className="note">
            <strong>Total Downloads:</strong> 50,000+
            <br />
            <strong>This Month:</strong> 5,000+
            <br />
            <strong>Average Rating:</strong> 4.8/5 stars
            <br />
            <br />
            <strong>Popular Platforms:</strong>
            <br />
            Windows: 60%
            <br />
            macOS: 25%
            <br />
            Linux: 15%
          </p>
        </SideBox>

        {/* Support */}
        <SideBox title="Need Help?">
          <ul>
            <li>
              <a href="/support">Documentation</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#tutorials">Video Tutorials</a>
            </li>
            <li>
              <a href="#forum">Community Forum</a>
            </li>
            <li>
              <a href="#contact">Contact Support</a>
            </li>
          </ul>
        </SideBox>

        {/* Verify Download */}
        <SideBox title="Verify Download">
          <p className="note">
            All downloads are signed and verified. You can check the SHA256
            checksum to ensure integrity.
            <br />
            <br />
            <a href="#checksums">View Checksums</a>
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
