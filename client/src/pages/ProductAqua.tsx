import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "@/components/Layout";

export default function ProductAqua() {
  return (
    <Layout activePage="products">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Aqua Migrate - Free Media Editor">
          <p>
            Professional offline media editing software. Edit photos, videos,
            and audio without subscriptions, watermarks, or internet.
          </p>
          <p style={{ marginTop: "8px" }}>
            <button className="btn">
              Download Now
              <small>Free - No Registration</small>
            </button>
            <span className="price-tag">Free</span>
          </p>
        </HeroPanel>

        {/* Overview */}
        <Box title="What is Aqua Migrate?">
          <p>
            Aqua Migrate is a comprehensive media editing suite designed for
            everyone from casual users to professional creators. Whether you're
            editing photos, trimming videos, or adjusting audio, Aqua Migrate
            provides professional tools with an intuitive interface.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Key Highlights:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>
              <strong>Non-destructive editing:</strong> Your original files are
              never modified
            </li>
            <li>
              <strong>Offline first:</strong> Work without internet connection
            </li>
            <li>
              <strong>No watermarks:</strong> Export clean, professional files
            </li>
            <li>
              <strong>Batch processing:</strong> Edit multiple files at once
            </li>
            <li>
              <strong>Professional tools:</strong> Color grading, effects, and
              filters
            </li>
          </ul>
        </Box>

        {/* Features */}
        <Box title="Features">
          <div className="feat-grid">
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Photo Editing</h3>
              <p>
                Crop, rotate, adjust colors, apply filters, and more. Support
                for RAW, JPEG, PNG, and other formats.
              </p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Video Editing</h3>
              <p>
                Trim, cut, merge videos. Add transitions, effects, and audio.
                Support for MP4, WebM, and more.
              </p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Audio Editing</h3>
              <p>
                Edit audio tracks, adjust volume, apply effects. Support for
                WAV, MP3, FLAC, and other formats.
              </p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Batch Processing</h3>
              <p>
                Process multiple files at once with the same settings. Save
                time on repetitive tasks.
              </p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Color Grading</h3>
              <p>
                Professional color correction tools. Adjust curves, levels,
                saturation, and more.
              </p>
            </div>
            <div className="feat-box">
              <div className="icn"></div>
              <h3>Effects Library</h3>
              <p>
                Hundreds of built-in effects and filters. Create stunning
                visuals with one click.
              </p>
            </div>
          </div>
        </Box>

        {/* System Requirements */}
        <Box title="System Requirements">
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Minimum</td>
                <td>
                  Windows 7+ / macOS 10.12+ / Linux (any modern distro)
                  <br />
                  2GB RAM, 500MB disk space
                </td>
              </tr>
              <tr>
                <td className="k">Recommended</td>
                <td>
                  Windows 10+ / macOS 11+ / Ubuntu 20.04+
                  <br />
                  4GB+ RAM, 2GB+ disk space
                  <br />
                  SSD recommended for better performance
                </td>
              </tr>
              <tr>
                <td className="k">Supported Formats</td>
                <td>
                  <strong>Photo:</strong> JPEG, PNG, BMP, GIF, TIFF, RAW
                  <br />
                  <strong>Video:</strong> MP4, WebM, MKV, MOV
                  <br />
                  <strong>Audio:</strong> MP3, WAV, FLAC, OGG
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Getting Started */}
        <Box title="Getting Started">
          <p>
            <strong>Step 1: Download</strong>
            <br />
            Download Aqua Migrate from our website. Choose your operating
            system.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Step 2: Install</strong>
            <br />
            Run the installer and follow the on-screen instructions. It takes
            less than a minute.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Step 3: Open Your First File</strong>
            <br />
            Launch Aqua Migrate and open a photo, video, or audio file to get
            started.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Step 4: Edit & Export</strong>
            <br />
            Make your edits and export your file in your preferred format.
          </p>
        </Box>

        {/* FAQ */}
        <Box title="Frequently Asked Questions">
          <p>
            <strong>Q: Is Aqua Migrate really free?</strong>
            <br />
            A: Yes! Aqua Migrate is completely free, forever. No subscriptions,
            no hidden costs.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Do I need internet to use it?</strong>
            <br />
            A: No. Aqua Migrate works completely offline. Your files never
            leave your computer.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Can I use it commercially?</strong>
            <br />
            A: Yes. You can use Aqua Migrate for personal and commercial
            projects.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Is my data safe?</strong>
            <br />
            A: Absolutely. All processing happens locally on your computer. We
            never collect or store your files.
          </p>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Download */}
        <SideBox title="Download">
          <p className="note">
            <strong>Latest Version:</strong> 1.0.0
            <br />
            <strong>Released:</strong> January 2026
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

        {/* Stats */}
        <SideBox title="Stats">
          <p className="note">
            <strong>Downloads:</strong> 50,000+
            <br />
            <strong>Rating:</strong> 4.8/5 stars
            <br />
            <strong>Active Users:</strong> 15,000+
            <br />
            <strong>File Size:</strong> 250MB
            <br />
            <strong>License:</strong> Free & Open Source
          </p>
        </SideBox>

        {/* Support */}
        <SideBox title="Support">
          <ul>
            <li>
              <a href="/support">Documentation</a>
            </li>
            <li>
              <a href="#tutorials">Video Tutorials</a>
            </li>
            <li>
              <a href="#forum">Community Forum</a>
            </li>
            <li>
              <a href="#github">GitHub Issues</a>
            </li>
            <li>
              <a href="#contact">Contact Support</a>
            </li>
          </ul>
        </SideBox>

        {/* Related */}
        <SideBox title="Related Products">
          <ul>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="#aeropic-code">Aeropic Code</a>
            </li>
            <li>
              <a href="#aeropic-design">Aeropic Design</a>
            </li>
          </ul>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
