# zmUI

A Mobile UI Components Library based on Vue.js

![](https://raw.githubusercontent.com/mengchen129/zmUI/master/src/assets/icon.png)

## Demo
[View Demo](https://mengchen129.github.io/zmui/)

## Install
```
npm install zmui --save
```
```javascript
import zmUI from 'zmui';
Vue.use(zmUI);
```

## Components

### `Header`
A header component 
##### Example
```xml
<zm-header>This is Header</zm-header>
```
##### Options

### `Toast`
A toast component
#### Example
Mount `zm-toast` on the root vue instance:
```xml
<zm-toast></zm-toast>
```
Invoke `$toast.show` on any vue instance:
```javascript
this.$toast().show('This is message');
````

#### Options
configure the display duration, for example 2 seconds:
```javascript
this.$toast().show('This is message', 2000);
````
The default duration is 3 seconds (3000ms), You can use constants defined in the component:
- LENGTH_SHORT - 1 second
- LENGTH_NORMAL - 3 seconds
- LENGTH_LONG - 5 seconds
```javascript
import { Toast } from 'zmui';
this.$toast().show('This is message', Toast.LENGTH_SHORT);
````

### `Slider`
A image slider component
#### Example
```xml
<zm-slider :list="list" :auto="3000"></zm-slider>
```
```javascript 
{
    list: [{
        url: 'http://www.image.domain/image1.png',
        href: 'http://www.example1.com/',
    }, {
        url: 'http://www.image.domain/image2.png',
        href: 'http://www.example2.com/',
    }]
}
```

#### Props
##### list 
The image data list. For each item, `url` for load image, `href` for navigation address. 

If `href` is not defined, then it will emit an event `slider-click` with the current item as the parameter.
##### auto
The autoplay interval (ms), set 0 (default) for disable autoplay

### `Loading`
A loading icon displayed on the screen center
#### Example
Mount `zm-loading` on the root vue instance:
```xml
<zm-loading></zm-loading>
```
Invoke `$loading.show` or `$loading.hide` on any vue instance:
```javascript
this.$loading().show('Loading...');
this.$loading().hide();
```

#### Options
You can pass the second parameter to `show` to set the loading icon be modal or not (Not modal by default).
```javascript
this.$loading().show('Loading...', true);
````

### `NumberKeyboard`
Open a numeric keyboard
#### Example
```html
<zm-number-keyboard @input="onNumberInput" @ok="setNumber">
    <div>Your input: {{ numberInput }}</div>
</zm-number-keyboard>
```
```javascript
export default {
    data() {
        return {
            numberInput: '',
            number: '',
        }  
    },
    methods: {
        onNumberInput(number) {
            this.numberInput = number;
        },
        setNumber(number) {
            this.number = number;
        }
    }
}
```

#### Events
##### input
Trigger when keyboard keys clicked, contains the realtime result
##### ok
Trigger when ok button clicked, contains the final result



## Changelog
### v0.4.3 (2017-11-20)
- Move `vue` from `dependencies` to `devDependencies`
### v0.4.2 (2017-11-20)
- Add Fallback.js for low android versions on css transitions
### v0.4.1 (2017-11-13)
- Remove explicit dependency of vue
- Modify the API of `Toast` and `Loading`
### v0.3.3 (2017-11-09)
- Add component `DistrictSelect`
- Add back handling on modal-like components
### v0.3.0 (2017-11-07)
- Support Theme customized
- Adjust directory structure
### v0.2.0 (2017-11-02)
- Add component `NumberKeyboard`
- Add component `SingleSelect` and `MultipleSelect`
- Add demo pages
- Extract transition styles
- Other optimization
### v0.1.3 (2017-10-31)
- Add component `Loading`
### v0.1.2 (2017-10-30)
- Add component `Slider`
### v0.1.1 (2017-10-29)
- Add component `Toast`
### v0.1.0 (2017-10-29)
- Add component `Header`
