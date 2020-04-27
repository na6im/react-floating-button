<h1 align="center">React Awesome Floating Button</h1>

<p align="center">
	<a href="https://wuud.net">
		<img width="160" height="169" src="https://github.com/WuuD-Team/WuuD-Website/blob/master/favicon.ico?raw=true" alt="wuud">
	<img width="300" height="200" src="https://media1.giphy.com/media/iFmw13LV1hHhViPPWz/source.gif" alt="react">
	</a>
</p>
<br>
<br>

### <h1 align="center">An Awesome & Unique Customizable Floating Button</h1>

<p align="center">
    Powered by The WuuD Team
</p>


## Build & Run

#### Demo

Live demo: https://floating-button.namokrane.works/

#### Screenshots
<p align="center">
   <img width="160" height="169" src="https://github.com/na6im/react-floating-button/blob/master/screenshots/Floating%20Button%201.gif?raw=true" alt="screenshot1">
   <img height="169" src="https://github.com/na6im/react-floating-button/blob/master/screenshots/Floating%20Button%202.gif?raw=true" alt="screenshot2">
   <img height="169" src="https://github.com/na6im/react-floating-button/blob/master/screenshots/Floating%20Button%203.gif?raw=true" alt="screenshot3">
   <img height="169" src="https://github.com/na6im/react-floating-button/blob/master/screenshots/Floating%20Button%204.gif?raw=true" alt="screenshot4">
</p>

#### Install

```bsh
$ npm install react-floating-button
$ yarn add react-floating-button
```

#### Usage

```javascript
import FloatingButton from "react-floating-button";
import Item from "react-floating-button";
import downloadIcon from "./assets/DOWNLOAD.svg";
import forwardIcon from "./assets/FORWARD.svg";

<FloatingButton 
// specify if the button should be on the right if false the button will be at the left
// not required
        right={true}
// specify if the button should be on the top if false the button will be at the bottom
// not required
        top={true} 
// the height and width of the buttons, not required
        height={60}
// the backgroundColor for the main button, not required
        backgroundColor={"magenta"}
// the color for the main button, not required
        color={"black"}>
    <Item
// the icon to use on given button, not required
        imgSrc={downloadIcon}
// the callback function call onClick not required
        onClick={() => { console.log("callback function here");}}
// the backgroundColor for the Item, not required
        color={'red'}
    />
    <Item
        imgSrc={forwardIcon}
        onClick={() => {
        console.log("callback function here");
       }}
    />
</FloatingButton>
```
## Attribution

-   React Pose powered by [Popmotion](https://popmotion.io/pose/)
-   Built & Developed from [React JS](https://reactjs.org/)

## Contributing to The Project

Contributing to the project is a piece of :cake:, read the [contributing guidelines](https://github.com/na6im/awsome-floating-button/blob/master/.github/CONTRIBUTING.md). You can discuss the project using the [issues section](https://github.com/na6im/awsome-floating-button/issues/new). To add a line create an issue and send a pull request, see [how to send a pull request](https://github.com/na6im/awsome-floating-button/blob/master/.github/CONTRIBUTING.md).

## License

The code is available under the [MIT](https://github.com/na6im/awsome-floating-button/blob/master/LICENSE) license.

<p align="center">
 <b>WuuD® - in code we trust -
</p>
