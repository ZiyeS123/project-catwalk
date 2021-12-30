# project-catwalk

## Table of Content
- [Overview](#Overview)
- [Tech Stack](#Tech-Stack)
- [Module Description](#Module-Description)
- [Product Demo](#Product-Demo)
- [Installation](#Installation)
- [Team Members](#Team-Members)
- [Engineering Journal](https://gist.github.com/ZiyeS123/65e925e9690ccb0591cc5a888dd88d57)

## Overview
Project catwalk is Front End Capstone project for HackReactor. This project comprises a complete redesign of the retail portal designed to address the concern of an outdated UI. The requirements provided in the given Business Requirement Documentation define the new user interface required for customers to browse items in our retail catalog.


## Tech Stack
### Front-End Development
<img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"> <img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png">

### Back-End Development
 <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"><img width="15%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">

### Compiler
 <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"><img width="15%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">

### Code Formatter
<img width="15%" src="https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg"> <img width="15%" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png">

### Testing
 <img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg">

### Project Management
 <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">

### Deployment
<img width="15%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg">


---

## Module Description

### Related Product & Outfit List
Developed by [Ziye Song](https://github.com/ZiyeS123)

The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’.  
My goal was to design the UI and complete all functionalities for related product and outfit list. Detailed features indlude:
#### Related Products
- Custom navigation arrow buttons to scroll individual cards left or right. Automatically appears when there are scrollable items and reflects user window screen size.
- Action button for related item product cards, brings up a comparison modal for comparing the features of current product displayed and it's related products.
- Product Cards are clickable to navigate to the selected product detail page.
- Star rating score displayed in linear gradient.
#### Outfit Lists
- Custom navigation arrow buttons to scroll individual cards left or right. Automatically appears when there are scrollable items and reflects user window screen size.
- Add to outfit button for add product to outfit collection. Sticks while scrolling.
- Action button for outfit cards to delete individual product from collection.
- Outfit collection should persist for each user.
- Star rating score displayed in linear gradient.

## Product Demo

https://user-images.githubusercontent.com/88356949/147788360-a7710a37-4a7f-402f-8520-dd09fa4fe637.mov

## Lighthouse Report
<img src="https://user-images.githubusercontent.com/88356949/141605638-132940e7-c7e0-4ea9-a392-c54b482e54ff.png">


## Installation
Fork the repo and clone to your local machine. After completion, follow these steps to install.

1. Make a copy of the file `server/config/config.example.js` and rename to `config.js`
2. Assign the `API_KEY` variable to your GitHub token. You can read more about API token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
3. Install dependencies

    ```bash
    npm install
    ```

4. In one terminal, build the webpack bundle

    ```bash
    npm run react-dev
    ```

5. In another terminal, start the server

    ```bash
    npm run server-dev
    ```

6. Visit [localhost:3000](http://localhost:3000) in the browser


## Team Members 
- Kyle Hahn
- Ziye Song
- Guillermo Martinez
- John Hwang




