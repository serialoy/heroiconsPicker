"use strict";(self.webpackChunkheroicons_picker=self.webpackChunkheroicons_picker||[]).push([[90039],{"./src/components/icons/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Outline:()=>Outline,Solid:()=>Solid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_stories});var react=__webpack_require__("./node_modules/react/index.js"),picker_icons=__webpack_require__("./src/components/icons/picker.icons.ts");let icons_icon=function(param){var name,type,size,Icon,icon1=param.icon,fallback=param.fallback;return react.createElement(react.Fragment,null,(name=icon1.name,type=icon1.type,size=icon1.size,Icon=("solid"===type?picker_icons.M:picker_icons.o)[name],react.createElement(react.Suspense,{fallback:null!=fallback?fallback:react.createElement("div",null,"Loading...")},react.createElement(Icon,{height:size,width:size}))))};try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconObj"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/icons/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let icon_stories={component:icons_icon,title:"HeroIcons/Icon",argTypes:{}};var Outline=function(args){return react.createElement(icons_icon,_object_spread({"data-testId":"InputField-id"},args))};Outline.args={icon:{name:"AcademicCapIcon",type:"outline",size:"24"},fallback:react.createElement("div",null,"Loading...")};var Solid=function(args){return react.createElement(icons_icon,_object_spread({"data-testId":"InputField-id"},args))};Solid.args={icon:{name:"AcademicCapIcon",type:"solid",size:"24"},fallback:react.createElement("div",null,"Loading...")},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'(args: any) => <Icon data-testId="InputField-id" {...args} />',...Outline.parameters?.docs?.source}}},Solid.parameters={...Solid.parameters,docs:{...Solid.parameters?.docs,source:{originalSource:'(args: any) => <Icon data-testId="InputField-id" {...args} />',...Solid.parameters?.docs?.source}}};let __namedExportsOrder=["Outline","Solid"]}}]);