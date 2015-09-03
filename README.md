square file icons
================

install with bower or npm
------------------

`bower install --save square-file-icons`

`npm install --save square-file-icons`


don't want to download?
------------------------

use [rawgit.com CDN][2] this way you don't need to download anything just add link tag to head of html

that points to latest version

```html
<link href="https://cdn.rawgit.com/thecotne/square-file-icons/master/dist/css/square-file.min.css" rel="stylesheet">
```

or link with tag of version

```html
<link href="https://cdn.rawgit.com/thecotne/square-file-icons/<version number>/dist/css/square-file.min.css" rel="stylesheet">
```

this is a free service, so there are no [uptime or support guarantees.][3]

how to use
----------

make `span` or `i` tag

add class `sf` and another class to specify icon like this
```html
<span class="sf sf-pdf"></span>
```

you can change icon color from css `color` property like this
```html
<span class="sf sf-5x sf-pdf" style="color: #EA4C3A"></span>
```

or use `sf-colorful` class
```html
<span class="sf sf-5x sf-colorful sf-pdf"></span>
```

you can also toggle class with `sf-hover` see [html example][1] for end result

list of icons
-------------

| File Type              | Preview                                                                                            | Class Name             | Preview                                                                                          | Class Name             |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ | ---------------------- |
| Excel                  | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/excel-o.svg" width="60">      | sf-excel-o             | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/excel.svg" width="60">      | sf-excel               |
| Image                  | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/image-o.svg" width="60">      | sf-image-o             | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/image.svg" width="60">      | sf-image               |
| PDF                    | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/pdf-o.svg" width="60">        | sf-pdf-o               | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/pdf.svg" width="60">        | sf-pdf                 |
| PowerPoint             | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/powerpoint-o.svg" width="60"> | sf-powerpoint-o        | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/powerpoint.svg" width="60"> | sf-powerpoint          |
| Text                   | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/text-o.svg" width="60">       | sf-text-o              | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/text.svg" width="60">       | sf-text                |
| Word                   | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/word-o.svg" width="60">       | sf-word-o              | <img src="https://rawgit.com/thecotne/square-file-icons/master/icons/word.svg" width="60">       | sf-word                |

find bug?
---------

[submit issue][2]

[1]: https://rawgit.com/thecotne/square-file-icons/master/example.html "usage example"
[2]: https://github.com/thecotne/square-file-icons/issues/new "New Issue · thecotne/square-file-icons"
[3]: https://rawgit.com/faq#no-uptime-guarantee "no uptime or support guarantees"
