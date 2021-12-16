"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
const prettier = require("prettier");
const DEFAULT_OPTIONS = { parser: "glimmer" };
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        vscode.languages.registerDocumentFormattingEditProvider({ scheme: "file", language: "handlebars" }, new PrettierHandlebarsFormatter());
        vscode.languages.registerDocumentRangeFormattingEditProvider({ scheme: "file", language: "handlebars" }, new PrettierHandlebarsFormatter());
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
function fullDocumentRange(document) {
    const lastLineId = document.lineCount - 1;
    return new vscode_1.Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}
class PrettierHandlebarsFormatter {
    provideDocumentRangeFormattingEdits(document, range, _options, _token) {
        const text = document.getText(range);
        const prettierOptions = this.getPrettierOptions(document.uri.fsPath);
        // Argument of type '{ parser: string; }' is not assignable to parameter of type 'Options'.ts(2345)
        // @ts-ignore 'glimmer' is not a released parser for prettier so this fails the type check
        const formatted = prettier.format(text, prettierOptions);
        return [vscode_1.TextEdit.replace(range, formatted)];
    }
    provideDocumentFormattingEdits(document, _options, _token) {
        const { activeTextEditor } = vscode.window;
        if (activeTextEditor &&
            activeTextEditor.document.languageId === "handlebars") {
            const text = document.getText();
            const prettierOptions = this.getPrettierOptions(document.uri.fsPath);
            // Argument of type '{ parser: string; }' is not assignable to parameter of type 'Options'.ts(2345)
            // @ts-ignore 'glimmer' is not a released parser for prettier so this fails the type check
            const formatted = prettier.format(text, prettierOptions);
            const range = fullDocumentRange(document);
            return [vscode_1.TextEdit.replace(range, formatted)];
        }
    }
    getPrettierOptions(path) {
        let options = DEFAULT_OPTIONS;
        const configFile = prettier.resolveConfig.sync(path);
        if (configFile) {
            return Object.assign(configFile, DEFAULT_OPTIONS);
        }
        return options;
    }
}
//# sourceMappingURL=extension.js.map