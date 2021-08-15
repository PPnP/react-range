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
var SuperSimple = function (_a) {
    var rtl = _a.rtl;
    var _b = React.useState([50]), values = _b[0], setValues = _b[1];
    return (React.createElement(index_1.Range, { step: 0.1, min: 0, max: 100, rtl: rtl, values: values, onChange: function (values) { return setValues(values); }, renderTrack: function (_a) {
            var props = _a.props, children = _a.children;
            return (React.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { height: '6px', width: '100%', backgroundColor: '#ccc' }) }), children));
        }, renderThumb: function (_a) {
            var props = _a.props;
            return (React.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { height: '42px', width: '42px', backgroundColor: '#999' }) })));
        } }));
};
exports.default = SuperSimple;
