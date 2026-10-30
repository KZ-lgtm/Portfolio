# Portfolio
https://kz-lgtm.github.io/Portfolio/
Static portfolio site. Open `index.html` in a browser, or serve the folder with any static host (GitHub Pages works as is).

```
index.html                     home page with project cards
assets/site.css                shared tokens and layout (light + dark)
projects/pp-stacking/
  index.html                   case study page
  demo.html                    live Three.js simulation (self-contained)
  docs/risk-assessment-*.html  ISO 12100 risk assessment, EN / 繁中
  img/                         screenshots captured from the simulation
projects/logistics/              second case study, same layout (+ Excel risk assessment)
assets/i18n.js                 EN / 繁中 switch shared by all pages
```

To add a project, copy `projects/pp-stacking/` as a template and add a card to `index.html`.
