# Em-tipping

- Forside
    - Live-update
    - Resultater
- Kamper
    - Resultat
    - Tipping
    - Poeng gitt
- Resultater
    - Per spiller
- Spillere
- Regler

## Deploy

- dev
- Main

blir deployet

## Regler

- Spørsmål om resultat gir 1 poeng for riktig tippetegn + 2 poeng for riktig resultat
- Ved tilfeller hvor det kan være 2 rette på et spørsmål får man poeng på begge to (for eksempel dersom 2 stk blir toppscorere)
- Mål scoret ved straffespark-konkurranse teller ikke ved spørsmål om hvem eller hvilket land som scorer mest / slipper inn mest.
- Spørsmål 1-64 skal besvares før mesterskapet er startet
- Spørsmål 65-79 besvarer når det er klart hvem som spiller kampene i sluttspillet
- Siden hvem som møtes i sluttspillet ikke er klart for etter gruppespillet og så videre vil det være forskjellige frister.
- Spørsmål 1-64 må tippes før mesterskapets start, spørsmål 65-79 har frister ut fra når kampene er klare.

## Frister

- Åpner 7 juni: Når alle troppene skal være klare
- Spørsmål 1-64:  Må være besvart innen 14. Juni kl. 15:00
- Spørsmål 65-72: Må være besvart innen 29. Juni kl. 15:00
- Spørsmål 73-76: Må være besvart innen 5. Juli kl. 15:00
- Spørsmål 77-78: Må være besvart innen 9. Juli kl. 15:00
- Spørsmål 79: Må være besvart innen 14. Juli kl. 15:00

Api: 
[https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=2014-06-14](https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=2014-06-14)
[https://www.football-data.org/documentation/quickstart](https://www.football-data.org/documentation/quickstart)
[https://www.thesportsdb.com/](https://www.thesportsdb.com/)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


[link](https://dev.to/mursalfk/effortless-data-management-connecting-google-sheets-to-your-reactjs-project-n96)
