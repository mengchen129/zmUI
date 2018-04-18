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
import 'zmui/src/styles/index.scss';
```

## Components

### `Header`
A header component 
#### Example
```html
<zm-header>This is Header</zm-header>
```
#### Props
##### back
Determine if exists a back btn on the left, it can be set to `true` or a normal string (default `undefined`), set `true` to execute `history.back()` and a string stands for the event name for custom behavior.
```html
<zm-header :back="true">Header</zm-header>
```
```html
<zm-header back="myback" @myback="mybackHandle">Header</zm-header>
```

##### inline
A Boolean value to control the `position` attribute of the header to `fixed` (set `false`, default) or `relative` (set `true`).

##### btn
A object value to determine if exists a text button of the right, and the event name for emitting.
```html
<zm-header :btn="{text: 'Save', emit: 'save'}" @save="saveInfo"></zm-header>
```

##### leftBtn
Same to `btn`, but on the left.

### `Toast`
A toast component
#### Example
Mount `zm-toast` on the root vue instance:
```html
<zm-toast></zm-toast>
```
Invoke `$toast().show` on any vue instance or Vue itself:
```javascript
this.$toast().show('This is message');
Vue.$toast().show('This is message');
````

#### Arguments
##### duration
The second argument can configure the display duration, for example 2 seconds:
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

##### withIcon
The third argument can configure if to display a icon with exclamation mark over the text.
```javascript
this.$toast().show('This is a toast with icon', 1000, true);
```

### `Carousel`
A carousel component for images. It works well on both PC (mouse events) and mobile browsers (touch events).
#### Example
```html
<zm-carousel :list="list" :auto="3000"></zm-carousel>
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

If `href` is not defined, then it will emit an event `carousel-click` with the current item as the parameter.
##### auto
The autoplay interval (ms), set 0 (default) for disable autoplay

### `Loading`
A loading icon displayed on the screen center
#### Example
Mount `zm-loading` on the root vue instance:
```html
<zm-loading></zm-loading>
```
Invoke `$loading.show` or `$loading.hide` on any vue instance or Vue itself:
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

### `SingleSelect`
A select component for single choosing.

#### Example
```html
<zm-single-select ref="jobSelect" :options="jobList" v-model="job"></zm-single-select>
```
```javascript 
data: {
    jobList: [
        'Junior Engineer', 'Engineer', 
        'Senior Engineer', 'Architect', 
        'Senior Architect', 'CTO'
    ],
    job: ''
}
```
```javascript 
methods: {
    openJobChoose() {
        this.$refs.jobSelect.open();
    }
}
```

#### Options
Not only String, the option type can be an object with keys (a value key and a text key). The name of text key can be configured with `text-key` props for displaying.
```html
<zm-single-select 
    ref="genderSelect" 
    :options="genderList"
    text-key="text"
></zm-single-select>
```
```javascript 
data: {
    genderList: [
        { value: 1, text: 'Male' },
        { value: 2, text: 'Female'},
    ],
    gender: null,
}
```
```javascript 
methods: {
    openGenderChoose() {
        this.$refs.genderSelect.open();
    }
}
```

The `SingleSelect` can be used together with `Input` component. View `Input` for detail.

### `MultipleSelect`
To be continued.

### `DistrictSelect`
To be continued.

### `Navigation`
To be continued.

### `Modal`
To be continued.

### `PullDown`
To be continued.

### `ScrollLoading`
To be continued.

### `Input`
To be continued.

### `Progress`
To be continued.

## Changelog
### v0.6.5 (2018-04-18)
- \[bugfix\] repair undefined error on `Carousel`
### v0.6.4 (2018-04-16)
- Add seamless scrolling feature on `Carousel`
### v0.6.3 (2018-01-20)
- Add component `Progress`
### v0.6.2 (2017-12-26)
- Add component `Suggestion`
### v0.6.1 (2017-12-18)
- Add component `Input`
- Add `v-model` binding to `SingleSelect`
### v0.6.0 (2017-12-08)
- Add components `PullDown` and `ScrollLoading`
### v0.5.6 (2017-12-01)
- Add hardware acceleration on transition elements
### v0.5.5 (2017-11-28)
- Add icon option on `Toast` component
### v0.5.4 (2017-11-28)
- Assign extended objects to Vue itself as well as Vue.prototype
### v0.5.3 (2017-11-28)
- Optimize the click event triggering of `Carousel` 
### v0.5.0 (2017-11-21)
- Add component `Navigation` and `Modal`
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
- Add component `Slider` (later renamed to `Carousel`)
### v0.1.1 (2017-10-29)
- Add component `Toast`
### v0.1.0 (2017-10-29)
- Add component `Header`
