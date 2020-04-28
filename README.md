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

With npm

```bsh
npm install react-floating-button
```

With yarn

```bsh
yarn add react-floating-button
```

#### Usage

```javascript
import { FloatingButton, Item } from "react-floating-button";
import downloadIcon from "./assets/DOWNLOAD.svg";
import forwardIcon from "./assets/FORWARD.svg";

<FloatingButton>
  <Item
    imgSrc={downloadIcon}
    onClick={() => {
      console.log("callback function here");
    }}
  />
  <Item
    imgSrc={forwardIcon}
    onClick={() => {
      console.log("callback function here");
    }}
  />
</FloatingButton>;
```

## Options

### FloatingButton

| Property        | Description                                                                          | Type    | Default   |
| --------------- | ------------------------------------------------------------------------------------ | ------- | --------- |
| right           | Specify if the button should be on the right if false the button will be at the left | boolean | `true`    |
| top             | Specify if the button should be on the right if false the button will be at the left | boolean | `false`   |
| size            | The size used for the buttons                                                        | number  | `60`      |
| backgroundColor | The backgroundColor for the main button                                              | string  | `#8f1d30` |
| color           | The color for the burger icon                                                        | string  | `#dbdbdb` |

### Item

| Property        | Description                      | Type   | Default   |
| --------------- | -------------------------------- | ------ | --------- |
| imgSrc          | The icon to use on given button  | string | -         |
| backgroundColor | The backgroundColor for the Item | string | `#dbdbdb` |
| onClick         | Called when an item is clicked   | func   | -         |

## Attribution

- React Pose powered by [Popmotion](https://popmotion.io/pose/)
- Built & Developed from [React JS](https://reactjs.org/)

## Contributing to The Project

Contributing to the project is a piece of :cake:, read the [contributing guidelines](https://github.com/na6im/awsome-floating-button/blob/master/.github/CONTRIBUTING.md). You can discuss the project using the [issues section](https://github.com/na6im/awsome-floating-button/issues/new). To add a line create an issue and send a pull request, see [how to send a pull request](https://github.com/na6im/awsome-floating-button/blob/master/.github/CONTRIBUTING.md).

## License

The code is available under the [MIT](https://github.com/na6im/awsome-floating-button/blob/master/LICENSE) license.

<p align="center">
 <b>WuuD® - in code we trust -
</p>
