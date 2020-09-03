<p align="center">
  <a href="https://t.me/bsba_group">
    <img src="src/.vuepress/public/assets/header-logo.png" width="180" height="180">
  </a>
  <h1 align="center">Chisel</h1>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/chisel/deploys">
    <img src="https://api.netlify.com/api/v1/badges/a2c63836-f73a-4159-9276-69bf54368787/deploy-status">
  </a>
</p>

**Chisel** is written in Node JS with _Vue JS_. A website that can serve as a guide book for developers.

## Preliminaries

Currently this application runs in Netlify and it's still in beta phase! If you want to become collaborator, PM with one
of the BSBA's Admins and get Contributor status for the repository.

## Test & Deploy

In order to startup the project, make sure that you have Yarn and NodeJS installed on your PC! You can use NPM, however
yarn is likely recommended for this app. After installation process, open terminal / powershell and run those commands
below:

```bash
// Clone the project
git clone https://github.com/sakhib-orzklv/chisel.git ./chisel

// Enter the project root folder
cd chisel

// Install required modules
yarn install

// Start development session
yarn run docs:dev

// Start building session
yarn run docs:build && mv docs/.vuepress/dist ./dist
```

> The web page is still in beta phase so feel free to [open issues](https://github.com/genemators/chisel/issues/new) and give me some suggestions.

---

> Important Note: Under the MIT license, if you're running your own instance, you should add a link to the source [(this repository)](https://github.com/genemators/chisel) in your websites bio. If you're modifying this source and making your own bot, you should link to the source of your own version of the bot according to the MIT license. Check [LICENSE](LICENSE) for more info.

`Chisel` icon is created by [Genemator](https://t.me/genemator/) (Sokhibjon Orzikulov).
