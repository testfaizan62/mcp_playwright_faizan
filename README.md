GreenKart Store E2E Automation with MCP Playwright & LLM

This repository demonstrates end-to-end (E2E) testing of the GreenKart Store using Playwright integrated with MCP (Model Context Protocol) for AI-assisted workflows. It leverages a Large Language Model (LLM) through GitHub Copilot Chat within Visual Studio Code Insiders, enabling seamless collaboration between automated testing and AI guidance.

📌 Objectives

```Automate critical user journeys of the GreenKart Store.
Validate both positive and negative test flows.
Demonstrate the use of MCP + Playwright in a real-world test automation setup.
Showcase AI-assisted QA practices using GitHub Copilot Chat inside VS Code Insiders.

⚙️ Prerequisites

Ensure the following are installed and configured:
Node.js (v18+)
Playwright (@playwright/test)
VS Code Insiders with GitHub Copilot Chat enabled
MCP (Model Context Protocol) configured in settings.json
Git Bash (if working on Windows, for smooth CLI navigation)

📂 Project Structure

``` GREENKART STORE/
│── tests/
│   └── greenkart.e2e.spec.js     # End-to-End test file
│── .vscode/
│   └── settings.json             # MCP Playwright configuration
│── package.json
│── README.md

🔧 MCP Configuration

```{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
This allows GitHub Copilot Chat to leverage Playwright’s MCP server for test suggestions, debugging assistance, and inline code completions.

🧪 Testing Flow

```Navigate to GreenKart Store main URL.
Search and add three random vegetables to the cart.
Perform a negative test by searching for a non-existing vegetable.
Open the cart and verify that all added vegetables are listed correctly.
Proceed to checkout from the cart modal.
Verify that the checkout table displays all added items correctly.

🚀 Running the Tests

```Clone the repository: git clone <repository name>
Install dependencies: npm install
Run the tests: npx playwright test

🤖 Using LLM + Copilot Chat

```Open the repo in VS Code Insiders.
Use GitHub Copilot Chat (Ctrl+I) to:
Ask for Playwright test optimizations.
Generate additional negative/edge test scenarios.
Debug failing assertions interactively.
Extend the suite with AI-suggested test flows.

This creates a hybrid QA workflow: Playwright executes deterministic tests, while the LLM assists with test authoring, edge case discovery, and debugging.
