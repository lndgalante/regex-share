import * as vscode from 'vscode'
import isValidRegex from './utils'

const opn = require('opn')
const RandExp = require('randexp')

export function activate(context: vscode.ExtensionContext) {
  const disposableShareRegex = vscode.commands.registerCommand('extension.shareRegex', () => {
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
    showInformationMessage('Sharing your RegEx in RegExr')

    // These constants will come from a default configuration
    const engine = 'js'
    const tool = 'explain'
    const maxExampleCases = 12

    // Generate example strings that matches the regex
    const [, regex, flags = ''] = textSelected.split('/')
    const randexpRegex = Array.from({ length: maxExampleCases }, () => new RandExp(regex, flags).gen())
    const regexWithoutRepetitions = [...new Set(randexpRegex)]
    const matchingRegex = regexWithoutRepetitions.join('\n')
    console.log('matchingRegex: ', matchingRegex)

    // Generate url to open
    const baseUrl = 'https://regexr.com'
    const url = `${baseUrl}/?expression=${textSelected}&text=${matchingRegex}&tool=${tool}&engine=${engine}`

    // Open url in user default browser
    opn(url)
  })

  const disposableSetMaxExampleCases = vscode.commands.registerCommand('extension.setMaxExampleCases', () => {
    vscode.window.showInformationMessage('Setting max example cases')
  })

  const disposableSetRegExrTool = vscode.commands.registerCommand('extension.setRegExrTool', () => {
    vscode.window.showInformationMessage('Setting RegExr tool')
  })

  const disposableSetRegExrEngine = vscode.commands.registerCommand('extension.setRegExrEngine', () => {
    vscode.window.showInformationMessage('Setting RegExr engine')
  })

  context.subscriptions.push(
    disposableShareRegex,
    disposableSetMaxExampleCases,
    disposableSetRegExrTool,
    disposableSetRegExrEngine
  )
}

export function deactivate() {}
