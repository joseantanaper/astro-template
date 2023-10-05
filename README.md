# 🚀 Astro Landing base project

## ⌨ Setup

Install astro

```sh
npm install astro
```

> WARNING: DON'T install globally (DON'T use -g parameter).

## ⌨ Create project

Run Setup Wizard:

```sh
npm create astro@latest
```

Start Astro:

```shell
npm run dev
```

## ⌨ OPTIONAL: TypeScript (included in Astro setup)

```sh
npm install typescript@latest -g
tsc --init
```

    - F1: Restart TS server

## ⌨ ESLint support

```sh
npm install --save-dev eslint eslint-plugin-astro
npm install --save-dev @typescript-eslint/parser
[npm install --save-dev eslint-plugin-jsx-a11y]
npx eslint --init

```

## ⌨ Prettier support

```sh
npm i --save-dev prettier-plugin-astro prettier
```

.prettierrc

```json
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "endOfLine": "crlf",
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": ["*.astro"],
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

## ⌨ UI Framework

```sh
npm install bootstrap@latest
npm install -g sass
src/styles/bootstrap-custom.scss
`@import "/node_modules/bootstrap/scss/bootstrap";`
src/layouts/Layout.astro
`import '/styles/bootstrap-custom.css';`
```

## Nanostores: share state between components

```sh
npm install nanostores
```

# Deploy from private repo to public GitHub pages

1. Build the project:

```
npm run build
```

2. Copy the "dist" folder content manually to github.io repo.
3. Commit the upload in the upload finish window.
4. View "Actions" to see when deploy is finished.

---

