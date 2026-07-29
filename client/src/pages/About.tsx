import {
  Layout,
  MainContent,
  Sidebar,
  HeroPanel,
  SideBox,
  Box,
} from "@/components/Layout";

export default function About() {
  return (
    <Layout activePage="about">
      <MainContent>
        {/* Hero Section */}
        <HeroPanel title="About Aeropic">
          <p>
            Aeropic is a software company founded with a simple mission: to
            create powerful, accessible tools for everyone. We believe that
            professional-grade software shouldn't be expensive or complicated.
          </p>
        </HeroPanel>

        {/* Our Story */}
        <Box title="Our Story">
          <p>
            Founded in 2024, Aeropic started as a small team of passionate
            developers and designers who were frustrated with expensive,
            bloated software. We decided to create something different.
          </p>
          <p style={{ marginTop: "10px" }}>
            Today, Aeropic is a growing community of creators, developers, and
            users who share our vision of free, open, and powerful software.
          </p>
        </Box>

        {/* Our Mission */}
        <Box title="Our Mission">
          <p>
            <strong>Make professional software free and accessible to everyone.</strong>
          </p>
          <p style={{ marginTop: "10px" }}>
            We believe that:
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
            <li>Software should be free, not locked behind paywalls</li>
            <li>Tools should be intuitive, not complicated</li>
            <li>Communities should drive development, not corporations</li>
            <li>Privacy and security should be fundamental rights</li>
            <li>Everyone deserves access to professional tools</li>
          </ul>
        </Box>

        {/* Our Values */}
        <Box title="Our Values">
          <table className="spec">
            <tbody>
              <tr>
                <td className="k">Accessibility</td>
                <td>
                  We design for everyone, regardless of skill level or budget.
                </td>
              </tr>
              <tr>
                <td className="k">Transparency</td>
                <td>
                  Open source code and honest communication with our community.
                </td>
              </tr>
              <tr>
                <td className="k">Quality</td>
                <td>
                  Professional-grade features without compromising simplicity.
                </td>
              </tr>
              <tr>
                <td className="k">Community</td>
                <td>
                  Built by and for our users. Your feedback shapes our products.
                </td>
              </tr>
              <tr>
                <td className="k">Innovation</td>
                <td>
                  Constantly improving and adding new features based on user
                  needs.
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Team */}
        <Box title="Our Team">
          <p>
            Aeropic is built by a dedicated team of developers, designers, and
            community members from around the world. We're passionate about
            creating software that makes a difference.
          </p>
          <p style={{ marginTop: "10px" }}>
            We're always looking for talented people to join us. If you're
            interested in contributing to Aeropic, please reach out!
          </p>
        </Box>
      </MainContent>

      <Sidebar>
        {/* Quick Facts */}
        <SideBox title="Quick Facts">
          <p className="note">
            <strong>Founded:</strong> 2024
            <br />
            <strong>Headquarters:</strong> Global
            <br />
            <strong>Team Size:</strong> Growing
            <br />
            <strong>Products:</strong> 1+
            <br />
            <strong>Users:</strong> Thousands
          </p>
        </SideBox>

        {/* Get Involved */}
        <SideBox title="Get Involved">
          <ul>
            <li>
              <a href="#github">GitHub</a>
            </li>
            <li>
              <a href="#forum">Community Forum</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
            <li>
              <a href="#donate">Donate</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </SideBox>

        {/* Contact */}
        <SideBox title="Contact">
          <p className="note">
            <strong>Email:</strong>
            <br />
            hello@aeropic.com
            <br />
            <br />
            <strong>Website:</strong>
            <br />
            aeropic.com
            <br />
            <br />
            <strong>Follow Us:</strong>
            <br />
            Twitter • GitHub • Discord
          </p>
        </SideBox>
      </Sidebar>
    </Layout>
  );
}
