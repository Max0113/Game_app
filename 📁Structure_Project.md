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
└── 📁 src/
    ├── 📁 app/
    │   ├── 📄 layout.js
    │   ├── 📄 loading.js
    │   ├── 📄 globals.css
    │   │
    │   ├── 📁 (pages)/
    │   │   ├── 📄 layout.js
    │   │   ├── 📄 page.js
    │   │   │
    │   │   └── 📁 games/
    │   │       ├── 📄 page.js
    │   │       └── 📁 [pages-games]/
    │   │           └── 📄 page.js
    │   │
    │   └── 📁 Login/
    │       └── ...
    │
    ├── 📁 Components/
    │   ├── 📁 navigation/
    │   │   ├── 📁 sidebar/
    │   │   │   └── 📄 Sidebar.js
    │   │   │
    │   │   └── 📁 top-bar/
    │   │       ├── 📄 TopBar.js
    │   │       ├── 📄 Search.js
    │   │       └── 📄 ResultSearch.js
    │   │
    │   ├── 📁 home/
    │   │   ├── 📁 hero/
    │   │   │   ├── 📄 HeroCarousel.js
    │   │   │   └── 📄 HeroCarouselSlides.js
    │   │   │
    │   │   ├── 📁 top-games/
    │   │   │   ├── 📄 TopGames.js
    │   │   │   └── 📄 SlideGames.js
    │   │   │
    │   │   └── 📁 playstation-exclusives/
    │   │       ├── 📄 PlaystationExclusives.js
    │   │       └── 📄 SlidePlaystationExclusives.js
    │   │   
    │   └── 📁 Games/
    │       └── 📁 pages-games/
    │           ├──📄 HeroCarousel.js
    │           └──📁 similar-games/
    │               ├── 📄 SimilarGames.js
    │               └── 📄 SlideSimilar.js 
    │
    ├── 📁 features/
    │   └── ...
    │
    └── 📁 lib/
        ├── 📄 api.js
        └── 📄 api-key.js


## Naming Rules

