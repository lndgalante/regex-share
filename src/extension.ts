import * as vscode from 'vscode'
import isValidRegex from './utils'

const opn = require('opn')
const RandExp = require('randexp')

export function activate(context: vscode.ExtensionContext) {
  const disposableShareRegex = vscode.commands.registerCommand('extension.shareRegex', () => {
    // Destructure VSCode window and messages API
    const { window } = vscode
    const { showErrorMessage, showInformationMessage } = window

    // Get activeEditor and selection
    const editor = window.activeTextEditor
    const selection = editor.selection

    // Get text selected
    const textSelected = editor.document.getText(selection)
    const isRegex = isValidRegex(textSelected)

    // Check if regex is valid or not and display a message
    if (!isRegex) return showErrorMessage('Invalid regex selected')
    if (!/^\/(.*?)\//.test(textSelected)) return showErrorMessage('Your RegEx should include slashes, i.e /[0-9]/')
    if (!/^\/(.*?)\/((g|i|m|u|y)*?)$/.test(textSelected)) return showErrorMessage('Invalid RegEx flag found')

    // Get default RegEx Share config
    const { maxExampleCases, tool, engine } = vscode.workspace.getConfiguration('regexShare')

    // Generate example strings that matches the regex
    let [, regex, flags] = textSelected.split('/')
    if (!flags) flags = 'gm'
    const randexpRegex = Array.from({ length: maxExampleCases }, () => new RandExp(regex, flags).gen())
    const regexWithoutRepetitions = [...new Set(randexpRegex)]
    const matchingRegex = regexWithoutRepetitions.join('\n')

    // Generate url to be open
    const baseUrl = 'https://regexr.com'
    const url = `${baseUrl}/?expression=/${regex}/${flags}&text=${matchingRegex}&tool=${tool}&engine=${engine}`

    // Open url in user default browser and display a message
    opn(url)
    showInformationMessage('Sharing your RegEx in RegExr')
  })

  context.subscriptions.push(disposableShareRegex)
}

export function deactivate() {}
