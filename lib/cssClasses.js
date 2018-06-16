'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    CAROUSEL: function CAROUSEL(classNamePrefix, isSlider) {
        var _classNames;

        return (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classNamePrefix + 'carousel', true), _defineProperty(_classNames, classNamePrefix + 'carousel-slider', isSlider), _classNames));
    },

    WRAPPER: function WRAPPER(classNamePrefix, isSlider, axis) {
        var _classNames2;

        return (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classNamePrefix + 'thumbs-wrapper', !isSlider), _defineProperty(_classNames2, classNamePrefix + 'slider-wrapper', isSlider), _defineProperty(_classNames2, classNamePrefix + 'axis-horizontal', axis === 'horizontal'), _defineProperty(_classNames2, classNamePrefix + 'axis-vertical', axis !== 'horizontal'), _classNames2));
    },

    SLIDER: function SLIDER(classNamePrefix, isSlider, isSwiping) {
        var _classNames3;

        return (0, _classnames2.default)((_classNames3 = {}, _defineProperty(_classNames3, classNamePrefix + 'thumbs', !isSlider), _defineProperty(_classNames3, classNamePrefix + 'slider', isSlider), _defineProperty(_classNames3, classNamePrefix + 'animated', !isSwiping), _classNames3));
    },

    ITEM: function ITEM(classNamePrefix, isSlider, selected) {
        var _classNames4;

        return (0, _classnames2.default)((_classNames4 = {}, _defineProperty(_classNames4, classNamePrefix + 'thumb', !isSlider), _defineProperty(_classNames4, classNamePrefix + 'slide', isSlider), _defineProperty(_classNames4, classNamePrefix + 'selected', selected), _classNames4));
    },

    ARROW_PREV: function ARROW_PREV(classNamePrefix, disabled) {
        var _classNames5;

        return (0, _classnames2.default)((_classNames5 = {}, _defineProperty(_classNames5, classNamePrefix + 'control-arrow control-prev', true), _defineProperty(_classNames5, classNamePrefix + 'control-disabled', disabled), _classNames5));
    },

    ARROW_NEXT: function ARROW_NEXT(classNamePrefix, disabled) {
        var _classNames6;

        return (0, _classnames2.default)((_classNames6 = {}, _defineProperty(_classNames6, classNamePrefix + 'control-arrow control-next', true), _defineProperty(_classNames6, classNamePrefix + 'control-disabled', disabled), _classNames6));
    },

    DOT: function DOT(classNamePrefix, selected) {
        var _classNames7;

        return (0, _classnames2.default)((_classNames7 = {}, _defineProperty(_classNames7, classNamePrefix + 'dot', true), _defineProperty(_classNames7, classNamePrefix + 'selected', selected), _classNames7));
    }
};