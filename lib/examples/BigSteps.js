"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var index_1 = require("../src/index");
var STEP = 10;
var MIN = 5;
var MAX = 105;
var BigSteps = function (_a) {
    var rtl = _a.rtl;
    var _b = React.useState([55]), values = _b[0], setValues = _b[1];
    return (React.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        } },
        React.createElement(index_1.Range, { values: values, step: STEP, min: MIN, max: MAX, rtl: rtl, onChange: function (values) { return setValues(values); }, renderTrack: function (_a) {
                var props = _a.props, children = _a.children;
                return (React.createElement("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, style: __assign(__assign({}, props.style), { height: '36px', display: 'flex', width: '100%' }) },
                    React.createElement("div", { ref: props.ref, style: {
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: index_1.getTrackBackground({
                                values: values,
                                colors: ['#548BF4', '#ccc'],
                                min: MIN,
                                max: MAX,
                                rtl: rtl
                            }),
                            alignSelf: 'center'
                        } }, children)));
            }, renderThumb: function (_a) {
                var props = _a.props, isDragged = _a.isDragged;
                return (React.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { height: '42px', width: '42px', borderRadius: '4px', backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 2px 6px #AAA' }) }),
                    React.createElement("div", { style: {
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        } })));
            } }),
        React.createElement("output", { style: { marginTop: '30px' } }, values[0].toFixed(1))));
};
exports.default = BigSteps;
