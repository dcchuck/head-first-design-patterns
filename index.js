"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var patterns_1 = __importDefault(require("./patterns"));
var patternNames = Object.keys(patterns_1.default);
function listAllPatterns() {
    patternNames.forEach(function (pattern) { console.log(pattern); });
}
function runPattern(k) {
    if (patternNames.filter(function (n) { return n === k; }).length !== 1) {
        console.log('Pattern not found. Patterns include:');
        listAllPatterns();
        return;
    }
    function runAll(obj) {
        Object.keys(obj).forEach(function (key) {
            obj[key]();
        });
    }
    var ok = patterns_1.default[k];
    runAll(ok);
}
commander_1.default
    .option('-a, --all', 'run all examples')
    .option('-p, --pattern <name>', 'run specific example')
    .option('-l, --list', 'list available examples');
commander_1.default.parse(process.argv);
var executed = false;
if (commander_1.default.list) {
    executed = true;
    listAllPatterns();
}
if (commander_1.default.pattern) {
    executed = true;
    runPattern(commander_1.default.pattern);
}
if (commander_1.default.all) {
    executed = true;
    patternNames.forEach(function (pattern) {
        runPattern(pattern);
    });
}
if (!executed) {
    commander_1.default.outputHelp();
}
