'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.FabTag = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n  background-color: #3b88c3;\n  color: #FFF;\n  border: 0;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 26px;\n  outline: 0;\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n'], ['\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n  background-color: #3b88c3;\n  color: #FFF;\n  border: 0;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 26px;\n  outline: 0;\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  &:after {\n    content: "";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transform: scale(10,10);\n    opacity: 0;\n    transition: transform .5s, opacity 1s;\n  }\n  &:active:after {\n    transform: scale(0,0);\n    opacity: .2;\n    transition: 0s;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n'], ['\n  display: block;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FabTag = exports.FabTag = _styledComponents2.default.button(_templateObject);

var Text = exports.Text = _styledComponents2.default.span(_templateObject2);