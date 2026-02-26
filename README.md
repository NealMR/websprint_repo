# Neon Arena

**Neon Arena** is a highly stylized, retro-futuristic static web application built with HTML, CSS, and vanilla JavaScript. It features a heavy Synthwave / Cyberpunk aesthetic, complete with immersive visual effects like CRT scan lines, neon glows, dynamic 3D elements, and smooth animations.

## Live Demo
Run this project locally or host it directly on **GitHub Pages**! 
(_If hosted on GitHub Pages, insert your link here: `https://[username].github.io/websprint_repo/`_)

---

## Features & Pages

The application is structured as a **Multi-Page Application (MPA)** to ensure distinct, thematic styling for each major component of the platform.

### 1. The Enter Screen (`index.html`)
The gateway to the Arena.
*   **Immersive Video Background**: Uses a looping GIF background covering the entire viewport.
*   **CRT Overlay**: A subtle, scrolling scanline effect applied globally for a retro arcade feel.
*   **3D Chrome Typography**: The main title features a CSS-generated 3D chrome effect that scales dynamically on mobile devices.
*   **Neon Angled Buttons**: Custom polygon-clipped buttons leading to the other sections of the application, featuring a smooth "fill" animation on hover.

### 2. Game Mode Select (`games.html`)
The Trial selector interface.
*   **Unique Theme**: Deep Purple and Cyan neon aesthetics.
*   **3D Interactive Carousel**: A fully functional infinite-looping 3D card carousel built with vanilla JavaScript and CSS 3D transforms.
*   **Perspective Scaling**: Cards rotate and scale down based on their distance from the active center card.
*   **Hover Lighting**: Inactive cards light up and elevate upon user hover.
*   **Dynamic Data**: Visuals loaded via CSS Custom Properties (`--bg-url`) to keep HTML clean.

### 3. Top Survivors (`leaderboard.html`)
The global player ranking system.
*   **Unique Theme**: Crimson Red and Gold danger aesthetics.
*   **Tabular Data Display**: A retro "pixel table" displaying player ranks, IDs, scores, and life status.
*   **Interactive Rows**: Rows glow and scale up when hovered by the user.
*   **Scroll Animations**: The container smoothly fades and slides up as the page loads using CSS animations.

### 4. Registration (`register.html`)
New player onboarding terminal.
*   **Unique Theme**: Toxic Green terminal aesthetics.
*   **Angled Data Panels**: The main container features Cyberpunk-style cut corners using `clip-path`.
*   **Form Validation**: Dark, responsive input fields designed to look like a secure terminal prompt.
*   **Animated Messages**: CSS keyframe animations flash success/error messages upon submission attempts.

---

## Technical Details

*   **HTML5 Context Semantic**: Clean separation of headers, navigations, sections, and footers.
*   **Advanced CSS3**:
    *   `clip-path` for creating custom angled elements (buttons, panels).
    *   `clamp()` for fully responsive fluid typography without media-query bloat.
    *   `-webkit-background-clip: text` for rendering gradients over text layers.
    *   `transform-style: preserve-3d` for the carousel depth mechanics.
*   **Vanilla JavaScript (ES6)**:
    *   Intersection Observers for scroll animations.
    *   Modulo math logic for generating the infinite-loop behavior inside the carousel.

## Development

To modify or run the project locally:
1. Clone the repository: `git clone https://github.com/NealMR/websprint_repo.git`
2. Open `index.html` in any modern web browser. 
3. No build tools or Node.js are required!

## Credits
* Fonts: `Orbitron`, `Share Tech Mono`, `Mr Dafoe` via Google Fonts.
* Icons: Font Awesome.
* Images: Unsplash.
