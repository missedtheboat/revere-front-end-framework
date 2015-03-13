# revere-front-end-framework
SASS (&amp; HTML examples) for the Revere Suite.


## Body Classes

Design for specific apps is defined by the body class. Each app must contain the following body classes, 

* `.revere`
* `.app` or `.dashboard` - These classes create two different contexts for the UI. Each class applies default styles to the Primary content area based on whether the context is for _app style functionality_ or _dashboard style functionality_. This is most noticeable when comparing the dark grey color palette of dashboard against the light grey palette on Revere Direction or Exchange
* Appname (`.calling`, `.direction`, `.exchange`, `.mobile`, `.social`) - This class is used to override any default styles and apply app specific styles required by the particular app, including logo, form element appearance, etc.

Basic page structure should appear as follows:

```html
    <header>
      <h1 class="logo">Revere AppName</h1>
      <div class="user">
        User info
      </div>
    </header>
    <nav class="v">
      <ul>
        <li>
          <a href="#">Nav Item</a>
          <ul>
            <li><a href="#">Nav Item</a></li>
            <li><a href="#">Nav Item</a></li>
          </ul>
        </li>
        <li><a href="#">Nav Item</a></li>
      </ul>
    </nav>
    <section class="primary">
      <header>
        <h2 class="logo">Section Header If needed</h2>
      </header>
    </section>
    <footer>
    </footer>
```  
## Page Structure

All Revere products consist of four main components as direct children of the body. For basic Revere styling, no additional classes or id's should be necessary 

* header - The header at minimum will contain `h1.logo` with the app name and `div.user` which will contain user specific content such as username, avatar, logout link, and other account information
* nav - The highest level nav element contains the top-level navigation for the app. All apps will contain links to the Revere Suite with one unified UI. 
* section - This top level section is referred to as the _canvas_. This is the main area of interaction on each app.
* footer - The top-level footer contains links to privacy policy, terms of use and any other content abstractly related to the Revere Suite. 

## Logotype Handling

Logos are generated as data URI's in `_header.scss`. Each logo should be placed in an h1 tag classed with `.logo` and the app name spelled out. The logo is generated by the h1.logo and the body class for the specific app.

## Navigation Handling

All structured navigation should consist of nested unordered lists inside of the `nav` element. Apps within the Revere Suite are built on a variety of platforms, and because of this, CSS for the top-level navigation should be applied to the elements themselves and not to additional classes or id's that may not be available across all platforms. If icons are required see additional notes regarding icons

## Icon handling

All icon art should be exported as SVGs with no fill or stroke applied. This is so that we can control those and others filters via CSS. SVGs should be saved in to 'images/svg-icons'. When new icons have been saved to this folder, it will be necessary to re-generate the SVG sprite. Run 'gulp svgstore'. This will create a new SVG sprite file called svg-icons.svg in 'images/'. All of the SVG icons will be saved with the ID of the file name of which they were saved.

The default style for all icons can be found in "sass/revere-front-end-framework/_icons.scss". You may also use this file to change the CSS attributes of specific icons.

Markup:

```html
    <svg class="icon icon-name">
      <use xlink:href="#icon-name"></use>
    </svg>
```    
  
* to do: Automate inclusion of markup to display icons in icons.php include

## Patterns

* **Modals:** The Modal design pattern can be found in `_defaults.scss`. Modal elements consist of `.modal` block-level element with two children, `.activate` and `.content`. Modal Animation is created through `_animations.scss`. 












