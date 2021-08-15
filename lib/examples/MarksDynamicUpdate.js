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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var index_1 = require("../src/index");
var UpdatingMarks = function (_a) {
    var rtl = _a.rtl;
    var _b = react_1.default.useState([50]), values = _b[0], setValues = _b[1];
    var _c = react_1.useState(100), selectedMax = _c[0], setSelectedMax = _c[1];
    var maxOptions = react_1.useState([100, 150, 200, 250, 300])[0];
    var _d = react_1.useState(0), selectedMin = _d[0], setSelectedMin = _d[1];
    var minOptions = react_1.useState([0, 15, 20, 25, 30])[0];
    var _e = react_1.useState(1), selectedStep = _e[0], setSelectedStep = _e[1];
    var stepOptions = react_1.useState([0.5, 1, 5, 10, 20])[0];
    react_1.useEffect(function () {
        var valuesCopy = __spreadArrays(values).map(function (value) {
            return index_1.checkValuesAgainstBoundaries(value, selectedMin, selectedMax);
        });
        setValues(valuesCopy);
    }, [selectedMin, selectedMax, selectedStep]);
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        } },
        react_1.default.createElement(index_1.Range, { values: values, step: selectedStep, min: selectedMin, max: selectedMax, rtl: rtl, onChange: function (values) { return setValues(values); }, renderMark: function (_a) {
                var props = _a.props, index = _a.index;
                return (react_1.default.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { height: '16px', width: '2px', backgroundColor: index * selectedStep + selectedMin < values[0]
                            ? '#548BF4'
                            : '#ccc' }) })));
            }, renderTrack: function (_a) {
                var props = _a.props, children = _a.children;
                return (react_1.default.createElement("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, style: __assign(__assign({}, props.style), { height: '36px', display: 'flex', width: '100%' }) },
                    react_1.default.createElement("div", { ref: props.ref, style: {
                            height: '3px',
                            width: '100%',
                            borderRadius: '4px',
                            background: index_1.getTrackBackground({
                                values: values,
                                colors: ['#548BF4', '#ccc'],
                                min: selectedMin,
                                max: selectedMax,
                                rtl: rtl
                            }),
                            alignSelf: 'center'
                        } }, children)));
            }, renderThumb: function (_a) {
                var props = _a.props, isDragged = _a.isDragged;
                return (react_1.default.createElement("div", __assign({}, props, { style: __assign(__assign({}, props.style), { height: '52px', width: '22px', borderRadius: '4px', backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 2px 6px #AAA' }) }),
                    react_1.default.createElement("div", { style: {
                            height: '16px',
                            width: '3px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        } })));
            } }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("output", { style: {
                    display: 'flex',
                    justifyContent: 'center',
                    top: '30px',
                    position: 'relative'
                } }, values[0].toFixed(1)),
            react_1.default.createElement("div", { style: {
                    top: '30px',
                    position: 'relative'
                } },
                react_1.default.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    react_1.default.createElement("p", null, "Select range max:"),
                    react_1.default.createElement("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, minmax(10px, 1fr))',
                            gridGap: '10px'
                        } }, maxOptions.map(function (val, idx) { return (react_1.default.createElement("button", { key: idx + "-" + val, id: "_" + idx + "-" + val, "data-max": val, style: {
                            backgroundColor: val === selectedMax ? '#548bf4' : '#fff',
                            color: val === selectedMax ? '#fff' : '#000',
                            padding: '5px 10px',
                            border: val === selectedMax
                                ? '1px solid #548bf4'
                                : '1px solid #000',
                            fontSize: '15px',
                            fontWeight: val === selectedMax ? 600 : 400,
                            boxShadow: '0px 2px 8px -3px #4f4f4f'
                        }, onClick: function (e) {
                            var el = e.target;
                            var newMax = el.dataset;
                            setSelectedMax(function (prev) {
                                return newMax !== undefined && newMax.max !== undefined
                                    ? +newMax.max
                                    : prev;
                            });
                        } }, val)); }))),
                react_1.default.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    react_1.default.createElement("p", null, "Select range min:"),
                    react_1.default.createElement("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, minmax(10px, 1fr))',
                            gridGap: '10px'
                        } }, minOptions.map(function (val, idx) { return (react_1.default.createElement("button", { key: idx + "-" + val, id: "_" + idx + "-" + val, "data-min": val, style: {
                            backgroundColor: val === selectedMin ? '#548bf4' : '#fff',
                            color: val === selectedMin ? '#fff' : '#000',
                            padding: '5px 10px',
                            border: val === selectedMin
                                ? '1px solid #548bf4'
                                : '1px solid #000',
                            fontSize: '15px',
                            fontWeight: val === selectedMin ? 600 : 400,
                            boxShadow: '0px 2px 8px -3px #4f4f4f'
                        }, onClick: function (e) {
                            var el = e.target;
                            var newMin = el.dataset;
                            setSelectedMin(function (prev) {
                                return newMin !== undefined && newMin.min !== undefined
                                    ? +newMin.min
                                    : prev;
                            });
                        } }, val)); }))),
                react_1.default.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    react_1.default.createElement("p", null, "Select step:"),
                    react_1.default.createElement("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, minmax(10px, 1fr))',
                            gridGap: '10px'
                        } }, stepOptions.map(function (val, idx) { return (react_1.default.createElement("button", { key: idx + "-" + val, id: "_" + idx + "-" + val, "data-step": val, style: {
                            backgroundColor: val === selectedStep ? '#548bf4' : '#fff',
                            color: val === selectedStep ? '#fff' : '#000',
                            padding: '5px 10px',
                            border: val === selectedStep
                                ? '1px solid #548bf4'
                                : '1px solid #000',
                            fontSize: '15px',
                            fontWeight: val === selectedStep ? 600 : 400,
                            boxShadow: '0px 2px 8px -3px #4f4f4f'
                        }, onClick: function (e) {
                            var el = e.target;
                            var newStep = el.dataset;
                            setSelectedStep(function (prev) {
                                return newStep !== undefined && newStep.step !== undefined
                                    ? +newStep.step
                                    : prev;
                            });
                        } }, val)); })))))));
};
exports.default = UpdatingMarks;
