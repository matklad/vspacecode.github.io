(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=d(t),b=a,m=h["".concat(r,".").concat(b)]||h[b]||p[b]||o;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),o=(t(0),t(101)),r={id:"extra",title:"Extra"},c={unversionedId:"whichkey/extra",id:"whichkey/extra",isDocsHomePage:!1,title:"Extra",description:"This section config extra settings that pertain to both Standalone or With extension.",source:"@site/docs/whichkey/extra.md",slug:"/whichkey/extra",permalink:"/docs/whichkey/extra",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/whichkey/extra.md",version:"current",sidebar:"docs",previous:{title:"Usage",permalink:"/docs/whichkey"}},l=[{value:"Use non-character keys",id:"use-non-character-keys",children:[]},{value:"Display menu with a delay",id:"display-menu-with-a-delay",children:[]},{value:"Display menu items alphabetically",id:"display-menu-items-alphabetically",children:[]},{value:"Unclear selection",id:"unclear-selection",children:[]},{value:"Conditional bindings (experimental)",id:"conditional-bindings-experimental",children:[{value:"Overrides",id:"overrides",children:[]},{value:"when",id:"when",children:[]},{value:"languageId",id:"languageid",children:[]}]}],s={toc:l};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This section config extra settings that pertain to both Standalone or With extension."),Object(o.a)("h2",{id:"use-non-character-keys"},"Use non-character keys"),Object(o.a)("p",null,"This section describes a way to use non-character keys in which-key menu like ",Object(o.a)("inlineCode",{parentName:"p"},"<tab>")," or ",Object(o.a)("inlineCode",{parentName:"p"},"Control+D"),". ",Object(o.a)("inlineCode",{parentName:"p"},"<tab>")," is supported out of the box. Follow the following instruction to add support for keys other than ",Object(o.a)("inlineCode",{parentName:"p"},"<tab>"),"."),Object(o.a)("p",null,"Merge the following json to your ",Object(o.a)("inlineCode",{parentName:"p"},"keybindings.json"),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "ctrl+x",\n  "command": "whichkey.triggerKey",\n  "args": "C-x",\n  "when": "whichkeyActive"\n}\n')),Object(o.a)("p",null,"Once you've done that, you can use ",Object(o.a)("inlineCode",{parentName:"p"},"C-x")," in the ",Object(o.a)("inlineCode",{parentName:"p"},"key")," value of the which-key config. Effectively, the above keybinding will enter ",Object(o.a)("inlineCode",{parentName:"p"},"C-x")," in the QuickPick input box when ",Object(o.a)("inlineCode",{parentName:"p"},"ctrl+x")," is pressed when the which key is focused."),Object(o.a)("h2",{id:"display-menu-with-a-delay"},"Display menu with a delay"),Object(o.a)("p",null,"You can set ",Object(o.a)("inlineCode",{parentName:"p"},"whichkey.delay")," in ",Object(o.a)("inlineCode",{parentName:"p"},"settings.json")," to value in millisecond to delay the display of the menu."),Object(o.a)("h2",{id:"display-menu-items-alphabetically"},"Display menu items alphabetically"),Object(o.a)("p",null,"You can set ",Object(o.a)("inlineCode",{parentName:"p"},"whichkey.sortOrder")," in ",Object(o.a)("inlineCode",{parentName:"p"},"settings.json")," to ",Object(o.a)("inlineCode",{parentName:"p"},"alphabetically")," to always display the menu items alphabetically."),Object(o.a)("h2",{id:"unclear-selection"},"Unclear selection"),Object(o.a)("p",null,"Selected text can be hard to see when which-key menu is active. This could be due to the ",Object(o.a)("inlineCode",{parentName:"p"},"inactiveSelectionBackground")," config of your current theme. You can selectively override that color in your ",Object(o.a)("inlineCode",{parentName:"p"},"settings.json")," like the following example."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"workbench.colorCustomizations": {\n    "editor.inactiveSelectionBackground": "color that works better",\n},\n')),Object(o.a)("h2",{id:"conditional-bindings-experimental"},"Conditional bindings (experimental)"),Object(o.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.a)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.a)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"This feature is marked as experimental and the config is subject to change."))),Object(o.a)("p",null,"This allows conditional execution of bindings. Currently, it only supports conditions on the ",Object(o.a)("inlineCode",{parentName:"p"},"when")," passed from shortcut and ",Object(o.a)("inlineCode",{parentName:"p"},"languageId")," of the active editor."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"It reuses the similar structure to the ",Object(o.a)("inlineCode",{parentName:"li"},"bindings")," type."),Object(o.a)("li",{parentName:"ul"},"The property ",Object(o.a)("inlineCode",{parentName:"li"},"key")," in a binding item is reused to represent the condition."),Object(o.a)("li",{parentName:"ul"},"The condition can be thought of as a key-value pair serialized into a string.")),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"languageId:javascript;when:sideBarVisible")," is an example condition serialized into a string for the ",Object(o.a)("inlineCode",{parentName:"p"},"key")," that checks if the language id of the currently active editor is javascript and if the side bar is visible (see the ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#when"}),"when")," section for more details)."),Object(o.a)("p",null,"A concrete example of a binding with that condition is as follow:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindings": [\n    {\n      "key": "m",\n      "name": "Major...",\n      "type": "conditional",\n      "bindings": [\n        {\n          "key": "languageId:javascript;when:sideBarVisible",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "",\n          "name": "Buffers",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "b",\n              "name": "Show all buffers/editors",\n              "type": "command",\n              "command": "workbench.action.showAllEditors"\n            }\n          ]\n        },\n      ]\n    }\n  ]\n}\n')),Object(o.a)("p",null,"In this example, when ",Object(o.a)("inlineCode",{parentName:"p"},"m")," is pressed, it will find the first binding that matches the current condition.\nIf no configured key matches the current condition, a default item showing a buffer menu will be used.\nAny item that has an invalid key will be used as default item."),Object(o.a)("p",null,"Therefore, in this example, if the language is javascript and the sidebar is visible, ",Object(o.a)("inlineCode",{parentName:"p"},"m"),' will open\nthe file browser, otherwise it will show the "buffers" menu.'),Object(o.a)("h3",{id:"overrides"},"Overrides"),Object(o.a)("p",null,"This is again similar with the ",Object(o.a)("inlineCode",{parentName:"p"},"bindings")," type."),Object(o.a)("p",null,"For example, the following config will override the ",Object(o.a)("inlineCode",{parentName:"p"},"m")," binding completely:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": "m",\n      "name": "Major",\n      "type": "conditional",\n      "bindings": [\n        {\n          "key": "languageId:javascript",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.a)("p",null,"You can also choose to add or remove conditions to existing conditional bindings.\nFor example, the following will add a key of ",Object(o.a)("inlineCode",{parentName:"p"},"languageId:javascript")," to the conditional binding if ",Object(o.a)("inlineCode",{parentName:"p"},"languageId:javascript")," doesn't already exist."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": ["m", "languageId:javascript"],\n      "name": "Go to",\n      "type": "command",\n      "command": "workbench.action.gotoLine",\n    }\n  ]\n}\n')),Object(o.a)("p",null,"Negative ",Object(o.a)("inlineCode",{parentName:"p"},"position")," property can also be used to remove conditional bindings."),Object(o.a)("h3",{id:"when"},"when"),Object(o.a)("p",null,"Since VSCode doesn't allow reading of the context of a json field, we cannot read the condition used in the ",Object(o.a)("inlineCode",{parentName:"p"},"when")," in shortcuts.\nFor this reason, you will need to repeat every ",Object(o.a)("inlineCode",{parentName:"p"},"when")," condition used in conditional bindings, at least until ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/vscode/issues/10471"}),"vscode/#10471")," is implemented."),Object(o.a)("p",null,"For example, the following shortcut in ",Object(o.a)("inlineCode",{parentName:"p"},"keybindings.json")," will pass both ",Object(o.a)("inlineCode",{parentName:"p"},"key")," and ",Object(o.a)("inlineCode",{parentName:"p"},"when")," in the ",Object(o.a)("inlineCode",{parentName:"p"},"args")," to ",Object(o.a)("inlineCode",{parentName:"p"},"which-key"),". The outer ",Object(o.a)("inlineCode",{parentName:"p"},"when")," is the ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts"}),"condition clause")," for vscode to execute this key, and must contain ",Object(o.a)("inlineCode",{parentName:"p"},"whichKeyVisible")," which limits this shortcut to be only applicable when the which-key menu is visible. In this case, if a user presses key ",Object(o.a)("inlineCode",{parentName:"p"},"t")," when which-key, sidebar and explorer viewlet are visible, it will execute ",Object(o.a)("inlineCode",{parentName:"p"},"whichkey.triggerKey")," command and send the ",Object(o.a)("inlineCode",{parentName:"p"},"args")," (",Object(o.a)("inlineCode",{parentName:"p"},"key")," and ",Object(o.a)("inlineCode",{parentName:"p"},"when"),") to  ",Object(o.a)("inlineCode",{parentName:"p"},"which-key")),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "t",\n  "command": "whichkey.triggerKey",\n  "args": {\n    "key": "t",\n    "when": "sideBarVisible && explorerViewletVisible"\n  },\n  "when": "whichkeyVisible && sideBarVisible && explorerViewletVisible"\n}\n')),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"args.key")," and ",Object(o.a)("inlineCode",{parentName:"p"},"args.when")," that were sent to ",Object(o.a)("inlineCode",{parentName:"p"},"which-key")," are then used to find the a binding that matches the key ",Object(o.a)("inlineCode",{parentName:"p"},"t")," and any conditional binding that matches that condition. The following binding is an example that contains a conditional binding that matches the ",Object(o.a)("inlineCode",{parentName:"p"},"args"),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "t",\n  "name": "Show tree/explorer view",\n  "type": "conditional",\n  "bindings": [\n    {\n      "key": "",\n      "name": "default",\n      "type": "command",\n      "command": "workbench.view.explorer"\n    },\n    {\n      "key": "when:sideBarVisible && explorerViewletVisible",\n      "name": "Hide explorer",\n      "type": "command",\n      "command": "workbench.action.toggleSidebarVisibility"\n    }\n  ]\n}\n')),Object(o.a)("p",null,"Unfortunately, if you have another condition binding with a different ",Object(o.a)("inlineCode",{parentName:"p"},"key")," that want to match the same ",Object(o.a)("inlineCode",{parentName:"p"},"when")," condition as the ",Object(o.a)("inlineCode",{parentName:"p"},"t")," in the above example, you will need to setup another shortcut with that different ",Object(o.a)("inlineCode",{parentName:"p"},"key"),"."),Object(o.a)("h3",{id:"languageid"},"languageId"),Object(o.a)("p",null,"This is language id of the active editor. The language id can be found in language selection menu inside the parenthesis next to the language name."))}d.isMDXComponent=!0}}]);