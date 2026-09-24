# Content and imagery review

Research reviewed September 23, 2026. Relationship descriptions, project roles, the Classic Divinity audience count, and the Yiruma sold-out outcome are supplied by Aaron Isaiah Liu. These are not presented as independently measured campaign results.

## Biography sources

- Sumi Jo: https://www.laphil.com/people/sumi-jo — South Korean coloratura soprano; international career; early work with Karajan at Salzburg. Dates and awards were deliberately omitted because no extra detail is needed.
- Xian Zhang: https://seattlesymphonypress.squarespace.com/pressreleases/2026/2/19/music-director-xian-zhang-and-the-seattle-symphony-announce-the-20262027-season — Seattle Symphony Music Director. https://xianzhangconductor.com/ provides additional symphonic and operatic context. The homepage’s older “designate” wording is superseded by the orchestra’s current announcement.
- Jasmine Choi: https://music.indiana.edu/faculty/new-faculty-resonance/new-faculty-profiles/choi-jasmine.html — Curtis and Juilliard education, former Vienna and Cincinnati orchestra roles, solo and teaching career.
- Hudson Zhang Studio: https://www.hudsonzhang.com/ and https://www.hudsonzhang.com/newsdetail?article_id=236 — golf landscape paintings, art/golf positioning, Harvard Club book launch context. No inferred studio achievements added.
- New York Star Artist Management: https://www.nystarmanage.com/ — confirms **Star**, not “Start”; arts management, representation, event production, and education.
- 401 Entertainment: reliable matching organizational background was not found. Only Aaron’s supplied relationship and concert description are included. Do not conflate this company with unrelated similarly named entertainment businesses. Further history and external links remain unfilled.
- Resend API implementation: https://resend.com/docs/api-reference/emails/send-email

## Supplied assets

All displayed photographs are user-supplied. `asset-manifest.json` maps original filenames to image IDs; `content/images.json` records captions, groups, dimensions, and optimized paths. Original files remain untouched in the parent folder. Duplicate suffixes such as `(2)` are ignored for grouping. Identities derive only from filenames. A photograph in the Gallery does not imply a consulting relationship.

Browser-ready JPEG intermediates were created with macOS image services, then WebP versions were produced with Sharp. HEIC decoding needed macOS image-service access to avoid black frames. All 28 images were inspected in a contact sheet; four are portraits and 24 are personal archive photographs. Two portraits are used in the current layout.

## External image candidates — not deployed

Official portraits were researched, but supplied photographs were chosen for the personal nature of this portfolio. No outside images are hotlinked or shipped; usage rights for these candidates remain unconfirmed.

- Sumi Jo: source https://www.koreanculture.org/performing-arts/2026/3/21/sumi-jo-soprano-40th-anniversary-concert
  - Image: https://images.squarespace-cdn.com/content/581ff5eef5e231b25f9c12db/62c44b32-4c2f-4b90-ade2-f0cdafdaa766/sumi%2Bjo.jpg?content-type=image%2Fjpeg&format=1500w
  - No photographer/reuse license stated.
- Xian Zhang: source https://xianzhangconductor.com/
  - Image: https://xianzhangconductor.com/wp-content/uploads/2024/01/088-col-hi-res-Xian-Zhang-15x15-c-B-Ealovega_header.jpg
  - Filename credits B. Ealovega. Site reserves rights.
- Jasmine Choi: source https://devriesartists.com/portfolio_page/jasmine-choi/
  - Image: https://devriesartists.com/wp-content/uploads/2025/04/Jasmine-Choi-2024-3-cStudioSW-scaled.jpg
  - Filename credits Studio SW. No explicit reuse license stated.

To replace a client image, update the artwork mapping in `components/site/shared.tsx` and add the approved file to `public/images`. Keep the source, photographer credit, and permission record here.

## September 2026 refinement

All supplied originals, including both New York Star logos, both Classic Divinity variants and the Korea Music Foundation mark, were visually inspected. Selected web assets retain original colors and aspect ratios:

- `sumi-jo.webp`: Sumi Jo Studio Shot (credit- Yeongjun Kim).jpg — credit retained on profile.
- `xian-zhang.webp`: Xian Zhang Studio Shot (Credit- Carlin Ma).jpg — credit retained on profile.
- `jasmine-choi.webp`: Jasmine Choi Studio Shot (Credit- Studio1207).jpg — credit retained on profile.
- `hudson-zhang-studio.webp`: Hudson Zhang Studio logo.JPEG.
- `new-york-star.webp`: New York Star Artist Management logo 2.PNG (dark version).
- `401-entertainment.webp`: 401 Entertainment logo.jpg.
- `classic-divinity.webp`: Classic Divinity logo without text.PNG.
- Homepage `photo-04.webp` derives from Aaron Isaiah Liu portrait 1.heic; original square composition, cropped within the retained hero geometry.

Gallery professional titles live separately in `content/gallery-titles.json` so regenerating image derivatives preserves them. Titles are transcribed from supplied filenames and the refinement brief. Cai Guo-Qiang's “Visual artist” title is supported by his [official biography](https://caiguoqiang.com/about-the-artist/). Group captions identify individual roles without inferring titles for unnamed team members.

Yiruma is retained only as an example within the New York Star relationship. The former standalone project has been removed from navigation, content and sitemap; its old URL returns the site's not-found page.


## Second refinement — September 24, 2026

- Added two direct clients and user-supplied figures: Sumi Jo International Singing Competition (500+ applications / 55 countries) and Opera Italiana is in the Air (approximately 3,000–5,000 attendees). Figures describe event scale, not attributed conversions or audited campaign results.
- `sumi-jo-competition.webp` uses the supplied `Sumi Jo International Singing Competition logo.jpg` (a portrait-format official promotional artwork, displayed complete).
- `opera-italiana.webp` uses `Opera Italiana is in the Air logo.webp`, maintaining its transparent wide aspect ratio on white.
- `competition-event.webp` uses `Sumi jo international singing competition footage (credit- Alterego).jpg`.
- `opera-event.webp` uses `Opera Italiana is in the Air (concert footage) - credit- STUDIOP23.webp`.
- All new still images and the contents of `Opera Italiana is in the Air logo 2.mhtml` were inspected. The MHTML is a saved social webpage; the dedicated supplied logo was used instead. The additional Washington LaPresse image and uncredited competition venue image were inspected but not needed in the final selection. No video was supplied.
- Hudson logo is encoded losslessly and displayed without secondary optimization; surrounding green exactly matches its source background, RGB(1, 65, 38). Classic Divinity also uses lossless encoding and matched burgundy.
- Group caption rows are defined explicitly in `components/site/gallery.tsx`, retaining the verified roles from the prior pass. Quinn Kelsey is limited to 280px on desktop and in the lightbox, and smaller in the mobile grid.

## Final personal wordmark — September 24, 2026

`public/images/aaron-isaiah-liu-logo-final.png` is a byte-for-byte copy of the user’s `Aaron Isaiah Liu logo final.png`. SHA-256: `e976e798094312cbfee12ba8edf29006fb8b91a2c35744de7ea6514d8097ec2a`.

The 1672 × 941 PNG is served unoptimized, without recoloring, filters, blend modes, resampling, or destructive cropping. `PersonalLogo` uses a CSS viewing window corresponding to source x=180..1500 and y=354..566, retaining every letter, the neutral Liu tone, underline, and subtitle. Header/footer use a compatible #fefdf9 light surface to avoid an image-background rectangle. Original image remains untouched.

The navigation and footer use the logo. The large homepage name treatment, biographies, metadata, structured data, copyright and accessibility labels remain semantic text. Georgia display serif is retained with slightly more open heading tracking; the shared UI font stack starts with Helvetica Neue and retains Arial/Helvetica fallbacks. Mobile header spacing gives the full logo its own row.
