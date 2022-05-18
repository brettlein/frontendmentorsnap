# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Coded and designed by Brett Lein.

## Table of contents:

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview:

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop](/Screenshots/Desktop.png)
![DesktopActive](/Screenshots/Desktopactive.png)
![Mobile](/Screenshots/Mobile.png)
![Mobilenav](/Screenshots/Mobilenavslide.png)
![Mobilenavdrop](/Screenshots/Mobilenavcollapse.png)

### Links

- Site Github Repo: [Github](https://github.com/brettlein/frontendmentorsnap.git)
- Live Site URL: [Snap: Make remote work](https://gilded-phoenix-5e8786.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass (SCSS)
- Mobile-in mind workflow
- Custom Java-script components

### What I learned

In this project, I learned and refined skills to building a responsive webpage. Through use of SASS(scss) I was able to format css code cleanly with minimal HTML classes. I also learned how to make two seperate navbars, one more desktop displays and one for mobile displays. This was probably the most challenging aspect of the project, but was able to provide great experience that can be used in the future.

The HTML was kept clean and minimal, and properly "ID'd" for Javascript:

```html
<!--NAVBAR MOBILE-->
<nav class="navmobile" id="myNavmobile">
<!--NAVBAR DESKTOP-->
<nav class="nav" id="myNav">
```
Custom buttons were made with Javascript properties aswell as utilizing icons.
```html
<li href="javascript:void(0);"" onclick="compdrop()">Company <img src="/images/icon-arrow-down.svg">
```
I learned how to nest with SASS(scss):
```css
//LEFT SIDE CONTAINER
.containerleft {
    float: left;
    margin-top: -25px;
    margin-left: -1rem;
    width: 47%;

        h1 {
        color:hsl(0, 0%, 8%);
        font-weight: 700;
        font-size: 65px;
        font-size: 5vw;
        padding-top: 10rem;
        padding-left: 11rem;
        }
```
Javascript was crucial for button function.
```js
//MOBILE MENU TOGGLE
function show() {
  var x = document.getElementById("myNavmobile");
  if (x.className === "navmobile") {
    x.className += "__active";
  } else {
    x.className = "navmobile";
  }
}
```
```js
//FEATURES TOGGLE
function featdrop() {
  var y = document.getElementById("myNavdropfeat");
  if (y.className === "navmobile__listitemdrop") {
    y.className += "__active";
  } else {
    y.className = "navmobile__listitemdrop";
  }
}
```

### Continued development

In the future I would like to focus on mobile first design, responsiveness will always be key and in my opinion it is crucial for a good quality web application to be accessible and properly formatted for all devices.

Aswell as learning more Javascript and refining those skills. I currently use minimal Javascript and try to focus on mainly HTML and CSS properties but I know my capabilities would increase greatly through Javascript implementation.

### Useful resources

- ["Dropdown Navigation Menu with Flexbox"](https://www.youtube.com/watch?v=nhlF3wRPkug&t=588s&ab_channel=AngelaDelise) - This youtube video by user "Angela Delise" helped guide me through navbar dropdowns. Although I've made navbars in the past, this was the first project that utilized dropdowns, so this video was crucial. It also introduced me to Scss and was the key decision maker in utilizing it for the whole project.

- ["w3schools Responsive Top Navigation"](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) - This documentation helped with the responsive nature of the navbar, in which the links disappear and an icon appears. This is where I referenced for media queries and Javascript for the toggle button.

## Author

- Brett Lein - [brettlein97@gmail.com](brettlein97@gmail.com)