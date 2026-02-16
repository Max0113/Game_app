# Project Structure :

game_app/
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 next.config.mjs
├── 📄 eslint.config.mjs
├── 📄 postcss.config.mjs
├── 📄 jsconfig.json
├── 📄 README.md
│
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 logos/
│   │   │   ├── 📄 logo1.webp
│   │   │   ├── 📄 logo2.webp
│   │   │   ├── 📄 logo3.webp
│   │   │   └── 📄 logo4.webp
│   │   │
│   │   ├── 📁 games/
│   │   │   ├── 📄 image1.webp
│   │   │   ├── 📄 image2.webp
│   │   │   ├── 📄 image3.webp
│   │   │   └── 📄 image4.webp
│   │   │
│   │   └── 📁 (outher)/
│   │       ├── 📄 background.jpg
│   │       └── 📄 bg-2.jpg
│   │
│   └── 📁 videos/
│       ├── 📄 background-1.mp4
│       ├── 📄 background-2.mp4
│       ├── 📄 background-3.mp4
│       └── 📄 background-4.mp4
│
└── src/
    ├── 📁 Components
    │   ├── 📁 games/
    │   │   ├──📁 SlideGames.js
    │   │   └──📁 pages-games/
    │   │       ├── 📄 ImgeSlide.js
    │   │       └── similar-games
    │   │           ├── 📄 SimilarGames.js
    │   │           └── 📄 Slide_Similar.js
    │   ├──📁 home/
    │   │   ├──📁 hero/
    │   │   │   ├── 📄 HeroCarousel.js
    │   │   │   └── 📄 HeroCarouselSlides.js
    │   │   ├──📁 playstation-exclusives/
    │   │   │   ├── 📄 PlaystationExclusives.js
    │   │   │   └── 📄 SlidePlaystationExclusives.js
    │   │   └──📁 top-games/
    │   │       ├── 📄 SlideGames.js
    │   │       └── 📄 TopGames.js
    │   └──📁 navigation/
    │       ├──📁 sidebar/
    │       │   └── 📄 Sidebar.js
    │       └──📁 top-bar/
    │           ├── 📄 ResultSearch.js
    │           ├── 📄 Search.js
    │           └── 📄 TopBar.js
    ├──📁 app/
    │   ├──📁 (pages)/
    │   │   ├──📁 games/
    │   │   │   ├──📁 [Page_Games]/
    │   │   │   │   └── 📄 page.js
    │   │   │   └──📁 page.js
    │   │   ├── 📄 layout.js
    │   │   ├── 📄 page.js
    │   │   └──📁 wlshlist/
    │   │       └── 📄 page.js
    │   ├── 📄 globals.css
    │   ├── 📄 layout.js
    │   └── 📄 loading.js
    └──📁 lib/
        └── api.js
