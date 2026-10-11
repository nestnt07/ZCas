import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AutoMaster B: DRPCIV Romania & Tactical Chess Driver Academy',
  description: 'Comprehensive DRPCIV Category B Romania driver license exam platform combining official DGPCI question formats, interactive priority intersections, CIA accelerated learning protocols (Gateway Process & Locus retention), and Chess Grandmaster tactical cognitive drills.',
  openGraph: {
    title: 'AutoMaster B: DRPCIV Romania & Tactical Chess Driver Academy',
    description: 'Comprehensive DRPCIV Category B Romania driver license exam platform combining official DGPCI question formats, interactive priority intersections, CIA accelerated learning protocols (Gateway Process & Locus retention), and Chess Grandmaster tactical cognitive drills.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoMaster B: DRPCIV Romania & Tactical Chess Driver Academy',
    description: 'Comprehensive DRPCIV Category B Romania driver license exam platform combining official DGPCI question formats, interactive priority intersections, CIA accelerated learning protocols (Gateway Process & Locus retention), and Chess Grandmaster tactical cognitive drills.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
