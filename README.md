# Consultancy Breakable Toy

## Introduction

Welcome to _Squid Game_! In this project, you'll be creating a squid-themed breakable toy app to level up on the tools and practices we use in the Consulting operation.

## Project Learning Goals

### Technical

Gain basic proficiency with

- Express
- Jest
- Objection and Knex
- React >= 16
- React Query
- TailwindCSS and Block Element Modifier CSS organization

### Professional

- Develop the communication skills necessary to collaborate effectively with other developers and project managers
- Become efficient in strategizing and researching around unfamiliar concepts and tools
- Adopt a deliverables-focused approach to coding, focusing on producing high-quality, reusable code within a tight deadline

## Project Setup

1. Install the following tools:

- [Fork](https://git-fork.com): Git GUI
- [DBeaver](https://dbeaver.io): Our go-to database GUI, supporting a wide range of databases
- [Loom](https://www.loom.com): For recording screencasts
- Tuple: Our favorite pairing tool; ask a team member for an invite. (only for Mac -- if you have Windows you'll use Zoom to pair instead)
- VSCode: Code editor
- Node, preferably using `nvm` to manage versions. Quick tip: once in your project dir, running `nvm use` will switch you to the correct Node version or prompt you to install it.

2. Fork this repo; you make make your repo public or private as long as you give your manager access
3. Ask to be invited to the [Consultancy Breakable Toy Shortcut project](https://app.shortcut.com/consultancybreakabletoy)

## CI and Tests

We use GitHub Actions to run our CI (continuous integration) suite, which includes running our test suite and running some linting checks to ensure that your code adheres to particular style guidelines.

To set up GitHub Actions:

1. Rename `.github/workflows/main.yml.example` to `.github/workflows/main.yml`
2. Merge the change into main. GitHub Actions should now run automatically whenever you create a pull request or merge into `main`.

We use the Jest testing framework (and `react-hooks-testing-library` where necessary). We aspire to incorporate Cypress for more end-to-end TDD, but we're not there yet :) As a result, our test suite focuses on unit tests for methods and functions and includes React custom hook unit tests where beneficial.

## Story Workflow

1. You'll be assigned a story by your mentor
2. Dive in! If you have any questions, post them in the appropriate Slack channels
3. When you're about ready to submit a PR, double-check...
   a. Have you written tests where appropriate?
   b. Does your test suite pass and does your code comply with style guidelines? (Check this easily by running the test, lint, and lint:style commands in your `package.json` files)
4. Then...
   a. Follow our squash/rebase approach to consolidate your work into a single commit (see resources)
   b. Push your work to GitHub and create a PR
   c. Create a Loom video demoing your feature for your mentor
   d. Tag your mentor in Shortcut with the link to the URL video, move your story into the RFR column, and then start on your next story!

## Resources

Learning materials referenced in stories can be found [here](./learningResources/index.md).
