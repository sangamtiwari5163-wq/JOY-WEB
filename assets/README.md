# Assets Folder Structure

## images/
Page content images:
- air-freight.jpg
- sea-freight.jpg
- project-cargo.jpg
- custom-clearance.jpg
- local-transport.jpg
- household-goods.jpg
- delivery-services.jpg
- welcome-banner.jpg
- certificate.jpg
- hero-poster.jpg       ← Video fallback poster for index.html hero section

## logos/
Brand and client logos:
- logo.png              ← Main company logo
- favicon.png           ← Browser tab icon
- cli1.jpg ... cli14.jpg ← Client logos for marquee slider
- cli2.gif, cli5.gif, cli8.gif ← Animated client logos

## videos/
- hero-bg.mp4           ← Homepage hero background video (desktop, widescreen/landscape)
- hero-bg-mobile.mp4    ← Homepage hero background video (mobile, vertical/portrait) — ADD THIS FILE

## Path Usage
From index.html (root):     assets/images/file.jpg
From pages/*.html:          ../assets/images/file.jpg
