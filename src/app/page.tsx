use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutFloatingOverlay
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" },
        ]}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={40}
        buttonText="Join MemeVerse"
        onButtonClick={() => console.log('CTA Clicked!')}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24" style={{ background: 'linear-gradient(135deg, #FF5A7A 0%, #F472B6 40%, #4DDEFF 100%)' }}>
        <SplitHero
          title="Welcome to MemeVerse"
          subtitle="Your go-to platform for all things memes!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => alert('Getting Started!')}
          onSecondaryButtonClick={() => alert('Learn more!')}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24" style={{ background: 'white' }}>
        <SplitAbout
          description="MemeVerse is the ultimate destination to explore, create, and share memes with the community." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24" style={{ background: 'white' }}>
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Visit our website.", image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: "Step 2", description: "Create an account.", image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: "Step 3", description: "Purchase your memes.", image: '/images/placeholder3.avif', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24" style={{ background: 'white' }}>
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Here's how our tokenomics work..."
          cardItems={[
            { id: 1, title: "Supply", description: "1 Million Tokens" },
            { id: 2, title: "Liquidity", description: "300K allocated" },
            { id: 3, title: "Ownership", description: "Community owned" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24" style={{ background: 'white' }}>
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeVerse Logo"
          logoText="MemeVerse"
          className="footer"
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }] },
            { title: "Support", items: [{ label: "FAQ", onClick: () => {} }, { label: "Contact", onClick: () => {} }] },
            { title: "Social", items: [{ label: "Twitter", onClick: () => {} }, { label: "Discord", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 MemeVerse. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy')} />
      </div>
    </SiteThemeProvider>
  );
}
