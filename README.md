# zmUI
基于 Vue.js 的移动端 UI 组件库

## Install
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
this.$toast.show('This is message');
````

#### Options
configure the display duration, for example 2 seconds:
```javascript
this.$toast.show('This is message', 2000);
````
The default duration is 3 seconds (3000ms), You can use constants defined in the component:
- LENGTH_SHORT - 1 second
- LENGTH_NORMAL - 3 seconds
- LENGTH_LONG - 5 seconds
```javascript
import { Toast } from 'zmui';
this.$toast.show('This is message', Toast.LENGTH_SHORT);
````

## Changelog
### v0.1.1 (2017-10-29)
- Add component `Toast`
### v0.1.0 (2017-10-29)
- Add component `Header`
