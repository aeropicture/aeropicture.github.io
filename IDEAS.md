# Aeropic Website Design Guide

## Design Philosophy: Frutiger Aero + Skeuomorphism (2000s Era)

This website embodies the **Frutiger Aero** movement and **Skeuomorphism** aesthetic of the mid-2000s, capturing the optimistic, glossy, and tactile design language of that era.

### Core Design Principles

1. **Glossy Gradients**: All interactive elements feature smooth, multi-stop gradients that simulate glass and plastic surfaces
2. **Aqua Color Theme**: Dominant use of light cyan/turquoise (#6fd0e8, #1ea8c9, #0a7f9e) with radial highlights
3. **Dimensional Depth**: Inset shadows, drop shadows, and layered effects create tactile depth
4. **Rounded Corners**: Generous border-radius on buttons and containers (999px for pills, 8-10px for boxes)
5. **Light Reflections**: Pseudo-elements (::before, ::after) create shine and light reflection effects
6. **2000s Typography**: Trebuchet MS, Verdana, Tahoma as primary fonts
7. **Organic Layouts**: Asymmetric, flowing layouts rather than rigid grids

### Color Palette

| Usage | Color | Hex |
|-------|-------|-----|
| Primary Gradient Top | Bright Aqua | #6fd0e8 |
| Primary Gradient Mid | Medium Aqua | #1ea8c9 |
| Primary Gradient Bottom | Dark Aqua | #0a7f9e |
| Accent (Links) | Teal | #0080a0 |
| Success Button | Bright Green | #a9f0b7 → #268a3d |
| Warning/Price | Golden Yellow | #fff6b0 → #d99900 |
| Background | Off-White | #ffffff |
| Light Background | Very Light Blue | #f7fdff |
| Border | Light Teal | #bfdde5 |
| Text | Dark Gray | #333333 |
| Muted Text | Medium Gray | #5f8590 |

### Typography System

- **Display**: Trebuchet MS, bold, 28-30px (headers, masthead)
- **Heading 1**: Trebuchet MS, bold, 19px (page titles)
- **Heading 2**: System font, bold, 12px (section headers)
- **Body**: Verdana, 11px (default text)
- **Small**: Verdana, 10px (metadata, captions)
- **Tiny**: Verdana, 9px (fine print)

### Component Styles

#### Buttons
- **Primary (CTA)**: Green gradient with glossy shine, rounded pill shape
- **Secondary**: Light blue gradient with hover effect
- **Navigation**: Tabs with active state underline (orange #ff8800)

#### Boxes & Containers
- **Hero Panel**: Light blue gradient background with inset white highlight
- **Feature Box**: White background with subtle border and inset shadow
- **Side Box**: Dark teal header with white content area
- **Spec Table**: Alternating row backgrounds (#f4fbfc / white)

#### Special Effects
- **Shine Effect**: Linear gradient overlay from top (rgba(255,255,255,0.8) → transparent)
- **Glow Effect**: Radial gradient at 35% 30% creating light reflection
- **Inset Shadow**: Creates depth on buttons and containers
- **Drop Shadow**: 0 2px 4px rgba(0,0,0,0.25) for floating elements

### Layout Structure

- **Fixed Width**: 950px maximum width (desktop)
- **Responsive Breakpoints**: 
  - Desktop: 950px+
  - Tablet: 641px - 1024px
  - Mobile: 640px and below
- **Spacing**: 12-14px padding, 10px margins between sections
- **Main + Sidebar**: 670px main (left) + 230px sidebar (right)

### Page Structure

```
┌─────────────────────────────────────┐
│  Top Bar (Links)                    │
├─────────────────────────────────────┤
│  Masthead (Logo + Tagline)          │
├─────────────────────────────────────┤
│  Navigation Bar (Tabs)              │
├─────────────────────────────────────┤
│  Breadcrumb                         │
├──────────────────┬──────────────────┤
│  Main Content    │  Sidebar         │
│  (670px)         │  (230px)         │
├──────────────────┴──────────────────┤
│  Footer                             │
└─────────────────────────────────────┘
```

### Pages to Build

1. **Home** (`/`) - Hero section, features overview, CTA
2. **About** (`/about`) - Company story, mission, team
3. **Products** (`/products`) - Product listing/grid
4. **Product: Aqua Migrate** (`/product/aqua`) - Detailed product page
5. **Pricing** (`/pricing`) - Pricing tiers and comparison
6. **Support** (`/support`) - FAQ, documentation links
7. **Download** (`/download`) - Download options and system requirements

### Brand Identity

- **Brand Name**: Aeropic
- **Tagline**: "Software for Everyone"
- **Essence**: Accessible, optimistic, reliable software tools
- **Personality**: Friendly, professional, innovative
- **Voice**: Clear, helpful, encouraging (no corporate jargon)

### Animation Guidelines

- **Transitions**: 150-200ms ease-out for hover states
- **Button Press**: scale(0.97) on active
- **Hover Effects**: Subtle background gradient shift
- **No excessive motion**: Respect the 2000s aesthetic without modern over-animation

---

## Implementation Notes

- Use CSS-in-JS or Tailwind with custom theme for color consistency
- Maintain 2000s aesthetic while ensuring modern accessibility
- Test on multiple screen sizes (mobile, tablet, desktop)
- Preserve the nostalgic yet functional feel throughout
