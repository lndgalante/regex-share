// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

const opn = require('opn')
const RandExp = require('randexp')

const isValidRegex = (string: string) => {
  let isValid = true

  try {
    new RegExp(string)
  } catch (error) {
    isValid = false
  }

  return isValid
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "regex-share" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.shareRegex', () => {
    // The code you place here will be executed every time your command is executed

    const editor = vscode.window.activeTextEditor
    const selection = editor.selection

    const textSelected = editor.document.getText(selection)
    const isRegex = isValidRegex(textSelected)

    if (!isRegex) {
      vscode.window.showInformationMessage('Invalid regex selected')
      return
    }

    vscode.window.showInformationMessage('Opening in RegExr')

    const [, regex, flags] = textSelected.split('/')
    const stringMatchingRegex = Array.from({ length: 6 }, () => new RandExp(regex, flags).gen()).join('\n')

    const baseUrl = 'https://regexr.com'
    const url = `${baseUrl}/?expression=${textSelected}&text=${stringMatchingRegex}&tool=explain`

    opn(url)
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
