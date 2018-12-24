"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const opn = require('opn');
const RandExp = require('randexp');
// Utils
const isValidRegex = (string) => {
    let isValid = true;
    try {
        new RegExp(string);
    }
    catch (error) {
        isValid = false;
    }
    return isValid;
};
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.shareRegex', () => {
        const editor = vscode.window.activeTextEditor;
        const selection = editor.selection;
        // Get text selected
        const textSelected = editor.document.getText(selection);
        const isRegex = isValidRegex(textSelected);
        // Check if regex is valid or not and display a message
        if (!isRegex)
            return vscode.window.showErrorMessage('Invalid regex selected');
        vscode.window.showInformationMessage('Sharing your RegEx in RegExr');
        // These constants will come from a default configuration
        const engine = 'js';
        const tool = 'explain';
        const maxExampleCases = 6;
        // Generate example strings that matches the regex
        const [, regex, flags = ''] = textSelected.split('/');
        const randexpRegex = Array.from({ length: maxExampleCases }, () => new RandExp(regex, flags).gen());
        const matchingRegex = randexpRegex.join('\n');
        // Generate url to open
        const baseUrl = 'https://regexr.com';
        const url = `${baseUrl}/?expression=${textSelected}&text=${matchingRegex}&tool=${tool}&engine=${engine}`;
        // Open url in user default browser
        opn(url);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map