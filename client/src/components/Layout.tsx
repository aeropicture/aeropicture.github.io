import { ReactNode } from "react";
import { Link } from "wouter";

interface LayoutProps {
  children: ReactNode;
  activePage?: string;
}

export function Layout({ children, activePage = "home" }: LayoutProps) {
  return (
    <div id="wrap">
      {/* Top Bar */}
      <div id="topbar">
        <a href="https://aeropic.com">About Aeropic</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy</a>
      </div>

      {/* Masthead */}
      <div id="masthead">
        <div id="logo">
          Aero<span>pic</span>
        </div>
        <div id="tagline">Software for Everyone</div>
      </div>

      {/* Navigation Bar */}
      <div id="navbar">
        <ul>
          <li className={activePage === "home" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={activePage === "about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={activePage === "products" ? "active" : ""}>
            <Link href="/products">Products</Link>
          </li>
          <li className={activePage === "pricing" ? "active" : ""}>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className={activePage === "support" ? "active" : ""}>
            <Link href="/support">Support</Link>
          </li>
          <li className={activePage === "download" ? "active" : ""}>
            <Link href="/download">Download</Link>
          </li>
        </ul>
      </div>

      {/* Breadcrumb */}
      <div id="crumb">
        <Link href="/">Home</Link> &gt; {activePage}
      </div>

      {/* Main Content */}
      <div id="content">{children}</div>

      {/* Footer */}
      <div id="footer">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
        <br />
        <small>&copy; 2026 Aeropic. All rights reserved.</small>
      </div>
    </div>
  );
}

export function MainContent({ children }: { children: ReactNode }) {
  return <div id="main">{children}</div>;
}

export function Sidebar({ children }: { children: ReactNode }) {
  return <div id="side">{children}</div>;
}

export function HeroPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export function FeatureBox({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="feat-box">
      {icon && <div className="icn"></div>}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function SideBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="side-box">
      <h4>{title}</h4>
      <div className="inner">{children}</div>
    </div>
  );
}

export function Box({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <div className="inner">{children}</div>
    </div>
  );
}
