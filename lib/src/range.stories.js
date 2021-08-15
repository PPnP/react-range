"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpDirection = exports.TwoThumbsWithDraggableTrackAndDownDirection = exports.TwoThumbsWithDraggableTrack = exports.TwoThumbs = exports.SuperSimple = exports.OnFinalChangeEvent = exports.MultipleThumbsWithDraggableTrack = exports.MultipleThumbs = exports.MergingLabelsSkinny = exports.MergingLabelsCustom = exports.MergingLabels = exports.MarksVertical = exports.MarksDynamic = exports.Marks = exports.LeftDirection = exports.LabeledTwoThumbs = exports.Labeled = exports.DownDirection = exports.Disabled = exports.BigSteps = exports.BasicWithBorder = exports.WithLimit = exports.Basic = exports.AnimatingContainer = exports.AllowOverlap = void 0;
var React = __importStar(require("react"));
var AllowOverlap_1 = __importDefault(require("../examples/AllowOverlap"));
var AnimatingContainer_1 = __importDefault(require("../examples/AnimatingContainer"));
var Basic_1 = __importDefault(require("../examples/Basic"));
var BasicWithBorder_1 = __importDefault(require("../examples/BasicWithBorder"));
var BigSteps_1 = __importDefault(require("../examples/BigSteps"));
var Disabled_1 = __importDefault(require("../examples/Disabled"));
var DownDirection_1 = __importDefault(require("../examples/DownDirection"));
var FinalChangeEvent_1 = __importDefault(require("../examples/FinalChangeEvent"));
var Labeled_1 = __importDefault(require("../examples/Labeled"));
var LabeledMerge_1 = __importDefault(require("../examples/LabeledMerge"));
var LabeledMergeSkinny_1 = __importDefault(require("../examples/LabeledMergeSkinny"));
var LabeledMergeCustom_1 = __importDefault(require("../examples/LabeledMergeCustom"));
var LabeledTwoThumbs_1 = __importDefault(require("../examples/LabeledTwoThumbs"));
var LeftDirection_1 = __importDefault(require("../examples/LeftDirection"));
var MarksDynamicUpdate_1 = __importDefault(require("../examples/MarksDynamicUpdate"));
var Marks_1 = __importDefault(require("../examples/Marks"));
var MarksVertical_1 = __importDefault(require("../examples/MarksVertical"));
var MultipleThumbsDraggableTrack_1 = __importDefault(require("../examples/MultipleThumbsDraggableTrack"));
var MultipleThumbs_1 = __importDefault(require("../examples/MultipleThumbs"));
var SuperSimple_1 = __importDefault(require("../examples/SuperSimple"));
var TwoThumbs_1 = __importDefault(require("../examples/TwoThumbs"));
var TwoThumbsDraggableTrack_1 = __importDefault(require("../examples/TwoThumbsDraggableTrack"));
var TwoThumbsDraggableTrackDownDirection_1 = __importDefault(require("../examples/TwoThumbsDraggableTrackDownDirection"));
var UpDirection_1 = __importDefault(require("../examples/UpDirection"));
var WithLimit_1 = __importDefault(require("../examples/WithLimit"));
var AllowOverlap = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(AllowOverlap_1.default, { rtl: globalState.rtl }));
};
exports.AllowOverlap = AllowOverlap;
var AnimatingContainer = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(AnimatingContainer_1.default, { rtl: globalState.rtl }));
};
exports.AnimatingContainer = AnimatingContainer;
var Basic = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(Basic_1.default, { rtl: globalState.rtl }));
};
exports.Basic = Basic;
var WithLimit = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(WithLimit_1.default, { rtl: globalState.rtl }));
};
exports.WithLimit = WithLimit;
var BasicWithBorder = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(BasicWithBorder_1.default, { rtl: globalState.rtl }));
};
exports.BasicWithBorder = BasicWithBorder;
var BigSteps = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(BigSteps_1.default, { rtl: globalState.rtl }));
};
exports.BigSteps = BigSteps;
var Disabled = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(Disabled_1.default, { rtl: globalState.rtl }));
};
exports.Disabled = Disabled;
var DownDirection = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(DownDirection_1.default, { rtl: globalState.rtl }));
};
exports.DownDirection = DownDirection;
var Labeled = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(Labeled_1.default, { rtl: globalState.rtl }));
};
exports.Labeled = Labeled;
var LabeledTwoThumbs = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(LabeledTwoThumbs_1.default, { rtl: globalState.rtl }));
};
exports.LabeledTwoThumbs = LabeledTwoThumbs;
var LeftDirection = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(LeftDirection_1.default, { rtl: globalState.rtl }));
};
exports.LeftDirection = LeftDirection;
var Marks = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(Marks_1.default, { rtl: globalState.rtl }));
};
exports.Marks = Marks;
var MarksDynamic = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(MarksDynamicUpdate_1.default, { rtl: globalState.rtl }));
};
exports.MarksDynamic = MarksDynamic;
var MarksVertical = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(MarksVertical_1.default, { rtl: globalState.rtl }));
};
exports.MarksVertical = MarksVertical;
var MergingLabels = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(LabeledMerge_1.default, { rtl: globalState.rtl }));
};
exports.MergingLabels = MergingLabels;
var MergingLabelsCustom = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(LabeledMergeCustom_1.default, { rtl: globalState.rtl }));
};
exports.MergingLabelsCustom = MergingLabelsCustom;
var MergingLabelsSkinny = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(LabeledMergeSkinny_1.default, { rtl: globalState.rtl }));
};
exports.MergingLabelsSkinny = MergingLabelsSkinny;
var MultipleThumbs = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(MultipleThumbs_1.default, { rtl: globalState.rtl }));
};
exports.MultipleThumbs = MultipleThumbs;
var MultipleThumbsWithDraggableTrack = function (_a) {
    var globalState = _a.globalState;
    return React.createElement(MultipleThumbsDraggableTrack_1.default, { rtl: globalState.rtl });
};
exports.MultipleThumbsWithDraggableTrack = MultipleThumbsWithDraggableTrack;
var OnFinalChangeEvent = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(FinalChangeEvent_1.default, { rtl: globalState.rtl }));
};
exports.OnFinalChangeEvent = OnFinalChangeEvent;
var SuperSimple = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(SuperSimple_1.default, { rtl: globalState.rtl }));
};
exports.SuperSimple = SuperSimple;
var TwoThumbs = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(TwoThumbs_1.default, { rtl: globalState.rtl }));
};
exports.TwoThumbs = TwoThumbs;
var TwoThumbsWithDraggableTrack = function (_a) {
    var globalState = _a.globalState;
    return React.createElement(TwoThumbsDraggableTrack_1.default, { rtl: globalState.rtl });
};
exports.TwoThumbsWithDraggableTrack = TwoThumbsWithDraggableTrack;
var TwoThumbsWithDraggableTrackAndDownDirection = function (_a) {
    var globalState = _a.globalState;
    return React.createElement(TwoThumbsDraggableTrackDownDirection_1.default, { rtl: globalState.rtl });
};
exports.TwoThumbsWithDraggableTrackAndDownDirection = TwoThumbsWithDraggableTrackAndDownDirection;
var UpDirection = function (_a) {
    var globalState = _a.globalState;
    return (React.createElement(UpDirection_1.default, { rtl: globalState.rtl }));
};
exports.UpDirection = UpDirection;
