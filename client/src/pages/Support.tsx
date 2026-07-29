import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "../components/Layout";

export default function Support() {
  return (
    <Layout activePage="support">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="Support & Documentation">
          <p>
            Get help with Aeropic products. Browse our documentation, FAQs, and
            community resources.
          </p>
        </HeroPanel>

        {/* Getting Started */}
        <Box title="Getting Started">
          <p>
            <strong>New to Aeropic?</strong> Start here to learn the basics.
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>
              <a href="#install">Installation Guide</a>
            </li>
            <li>
              <a href="#first-steps">First Steps Tutorial</a>
            </li>
            <li>
              <a href="#interface">Understanding the Interface</a>
            </li>
            <li>
              <a href="#keyboard">Keyboard Shortcuts</a>
            </li>
          </ul>
        </Box>

        {/* Documentation */}
        <Box title="Documentation">
          <p>
            <strong>Aqua Migrate Documentation</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>
              <a href="#photo-editing">Photo Editing Guide</a>
            </li>
            <li>
              <a href="#video-editing">Video Editing Guide</a>
            </li>
            <li>
              <a href="#audio-editing">Audio Editing Guide</a>
            </li>
            <li>
              <a href="#batch-processing">Batch Processing</a>
            </li>
            <li>
              <a href="#export">Export Options</a>
            </li>
            <li>
              <a href="#effects">Effects & Filters</a>
            </li>
          </ul>
        </Box>

        {/* FAQ */}
        <Box title="Frequently Asked Questions">
          <p>
            <strong>Q: How do I install Aeropic?</strong>
            <br />
            A: Download the installer for your operating system and run it.
            Follow the on-screen instructions.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: What file formats are supported?</strong>
            <br />
            A: Aqua Migrate supports JPEG, PNG, BMP, GIF, TIFF, RAW for photos;
            MP4, WebM, MKV, MOV for videos; and MP3, WAV, FLAC, OGG for audio.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Can I use Aqua Migrate on multiple computers?</strong>
            <br />
            A: Yes. You can install Aqua Migrate on as many computers as you
            want.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: How do I report a bug?</strong>
            <br />
            A: Visit our GitHub repository and create an issue with details
            about the bug.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Can I contribute to Aeropic?</strong>
            <br />
            A: Absolutely! We welcome contributions. Check our GitHub for
            contribution guidelines.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Q: Is there a portable version?</strong>
            <br />
            A: Yes. Download the portable version if you want to use Aeropic
            without installation.
          </p>
        </Box>

        {/* Troubleshooting */}
        <Box title="Troubleshooting">
          <p>
            <strong>Problem: Aeropic won't start</strong>
            <br />
            Solution: Try reinstalling Aeropic. Make sure your system meets the
            minimum requirements.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Problem: File won't open</strong>
            <br />
            Solution: Check if the file format is supported. Try opening a
            different file to confirm.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Problem: Export is slow</strong>
            <br />
            Solution: Close other applications to free up system resources.
            Reduce the output resolution or quality.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Problem: Out of memory error</strong>
            <br />
            Solution: Close other applications. Try working with smaller files
            or reducing the resolution.
          </p>
        </Box>

        {/* Community */}
        <Box title="Community & Resources">
          <p>
            <strong>Connect with other Aeropic users:</strong>
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>
              <a href="#forum">Community Forum</a> - Ask questions and share tips
            </li>
            <li>
              <a href="#discord">Discord Server</a> - Real-time chat with the
              community
            </li>
            <li>
              <a href="#github">GitHub</a> - Source code and issue tracker
            </li>
            <li>
              <a href="#reddit">Reddit</a> - Discussion and news
            </li>
            <li>
              <a href="#twitter">Twitter</a> - Latest updates and announcements
            </li>
          </ul>
        </Box>

        {/* Contact */}
        <Box title="Contact Support">
          <p>
            Can't find what you're looking for? Get in touch with our support
            team.
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Email:</strong> support@aeropic.com
            <br />
            <strong>Response Time:</strong> Usually within 24 hours
            <br />
            <strong>Languages:</strong> English, Spanish, French, German, Chinese
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>For bug reports:</strong> Please provide:
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "6px" }}>
            <li>Your operating system and version</li>
            <li>Aeropic version</li>
            <li>Detailed description of the issue</li>
            <li>Steps to reproduce the problem</li>
            <li>Error messages or screenshots</li>
          </ul>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Quick Links */}
        <SideBox title="Quick Links">
          <ul>
            <li>
              <a href="/download">Download</a>
            </li>
            <li>
              <a href="/product/aqua">Product Page</a>
            </li>
            <li>
              <a href="#changelog">Changelog</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
          </ul>
        </SideBox>

        {/* Video Tutorials */}
        <SideBox title="Video Tutorials">
          <p className="note">
            <strong>Popular Tutorials:</strong>
            <br />
            • Getting Started
            <br />
            • Photo Editing Basics
            <br />
            • Video Editing Tips
            <br />
            • Advanced Color Grading
            <br />
            • Batch Processing
            <br />
            <br />
            <a href="#youtube">View on YouTube</a>
          </p>
        </SideBox>

        {/* System Requirements */}
        <SideBox title="System Requirements">
          <p className="note">
            <strong>Windows:</strong> 7 or later
            <br />
            <strong>macOS:</strong> 10.12 or later
            <br />
            <strong>Linux:</strong> Any modern distro
            <br />
            <br />
            <strong>RAM:</strong> 2GB minimum
            <br />
            <strong>Disk:</strong> 500MB free space
            <br />
            <br />
            <a href="#details">View Full Requirements</a>
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
