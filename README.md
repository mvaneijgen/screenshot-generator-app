# Screenshot Generator

An app that will generate screenshots of all pages of a website on multiple devices

[![https://i.imgur.com/pTSFKqk.png](https://i.imgur.com/pTSFKqk.png)](https://i.imgur.com/pTSFKqk.png)

## Getting Started

The app has a build in list of devcies of which you can select the once you want screenshots of. After that you can add a sitemap.xml of the site you want to generate a screenshot of. This can be h

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Built With](#built-with)
- [Todo list](#todo-list)
- [FAQ](#faq)
- [Authors](#Authors)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Installation

Download the latest version from the [Github Releases tab](https://github.com/mvaneijgen/screenshot-generator-app/releases)

### Want to edit the project?
#### Build Setup

``` bash
# install dependencies
yarn install
# or 
npm install

# serve with hot reload at localhost:9080
yarn run dev
# or 
npm run dev

# build electron application for production
yarn run build
#or
npm run build
```

## Todo list 

- [x] User interface
- [ ] App icon
- [ ] Node.js Puppeteer child process 
- [ ] Create a loading animation while node script is running

## Built With

* [electron-vue](electron-vue) - The boilerplate for making electron applications built with vue
* [Puppeteer](https://github.com/puppeteer/puppeteer) - Puppeteer is a controllable Chrome browser this is what generates the screenshots 
* [Streamline Icons](https://streamlineicons.com) - Icon set 

## FAQ

- **Does this project work?**
    - Nope. Sadly it is stuck on running a Node.js Puppeteer script from Electron-vue. If that is fixed it will work like a charm.

## Authors
| [mvaneijgen](https://github.com/mvaneijgen) | 
| :---: |
| [![mvaneijgen](https://avatars1.githubusercontent.com/u/3217544?v=4&s=200)](http://fvcproductions.com)    |
| <a href="http://github.com/mvaneijgen" target="_blank">`github.com/mvaneijgen`</a> |
| Design & Development |

See also the list of [contributors](https://github.com/mvaneijgen/screenshot-generator-app/contributors) who participated in this project.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - see the [LICENSE.md](LICENSE.md) file for details


---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

