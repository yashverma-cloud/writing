# Post images

The image spec for a LinkedIn post drafted from a note, so a drafting task needs only this
repository. Copied from the main site's `brand/README.md` ("Brand section for automated post
drafting") at commit `ca48d55`; it is not synced.

Paste this into any task that drafts post images, as its brand section. It includes the
font-install step a fresh sandbox needs.

```text
Brand: Altitude (matches https://yashverma.cloud). Every post image is 1080x1350 (4:5).
FONTS (download once, then fc-cache -f):
  Archivo variable: https://raw.githubusercontent.com/google/fonts/main/ofl/archivo/Archivo%5Bwdth,wght%5D.ttf
  B612 Mono: https://raw.githubusercontent.com/google/fonts/main/ofl/b612mono/B612Mono-Regular.ttf
  Render with Chromium (HTML/CSS) so the width axis works: font-stretch maps to Archivo's wdth.
COLOURS: ground #040C1F everywhere. Text #EEF3F6. Secondary text #B8C7D7. Hairlines and edges #5F82AB.
  Linework #EAF1F4. Code panel #0B1D3E. Amber #F5A524 ONLY for a failure or waste state the post itself
  describes (a pod that cannot be placed, idle capacity); most images use none. No other colours.
THE HORIZON (every image): a 2px #5F82AB line across the full width at y=1010; under it a dawn wash,
  linear-gradient(#E29060 at 20% opacity, transparent) over 160px, on #040C1F.
LAYOUT (px; margins 80 left and right):
  Label: x80 y96, Archivo 36px weight 480, #B8C7D7, sentence case (e.g. "Autoscaling").
  Title (diagram, snippet): 36px under the label, Archivo 72px (snippet 60px), weight 340, font-stretch 112%,
    line-height 1.04, letter-spacing -0.02em, #EEF3F6, max-width 18ch, balanced lines.
  Statement (insight): 132px under the label, Archivo 84px, weight 340, font-stretch 112%, line-height 1.06.
  Diagram: white linework standing ON the horizon (bottom at y~1000), centred, between y430 and y1000.
    Axonometric 30 degrees. Strokes 3px (2.2px for surrounding parts), round caps. Faces get a 4-7% white
    wash. Something that does not exist yet: 2px amber dashed outline. The stuck thing: a small solid amber block.
  Code (snippet): B612 Mono 36px, line-height 1.42, #EAF1F4 on #0B1D3E, 2px #5F82AB border, padding 36px 40px.
  Caption or source: under the horizon at y1046, Archivo 36px, #B8C7D7, line-height 1.32.
  Signature: bottom-left (x80, 72px from the bottom): the monogram 84x84 in #EEF3F6, 26px gap, then
    "Yash Verma" (Archivo 40px weight 380, font-stretch 125%, #EEF3F6) over "yashverma.cloud" (36px #B8C7D7).
MONOGRAM SVG: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" stroke="#EEF3F6" stroke-width="2.75" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="12"><polyline points="2.5,5 16,28.5 29.5,5"/><polyline points="11.2,5 16,13.2 20.8,5"/><polyline points="16,13.2 16,19.8"/></g></svg>
RULES: nothing smaller than 36px; 35 words max on diagram and insight cards; sentence case; no ALL-CAPS,
  emoji, hashtags, photos, stock art, icons, glow, drop shadows or rounded boxes; no gradient except the dawn
  wash. Facts only from the post and https://yashverma.cloud; numbers exactly as published.
```
