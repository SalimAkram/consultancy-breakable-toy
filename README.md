# Consultancy Breakable Toy

## Introduction

Welcome to _Squid Game_! In this project, you'll be creating a squid-themed breakable toy app to level up on the tools and practices we use in the Consulting operation.

## Project Learning Goals

### Technical

- Gain basic proficiency with
  - Express
  - Jest
  - Objection and Knex
  - React >= 16
  - React Query
  - TailwindCSS and Block Element Modifier CSS organization

### Professional

- Develop the communication skills necessary to collaborate effectively with other developers and project managers
- Become efficient in strategizing and researching around unfamiliar concepts and tools

## Project Setup

1. Install the following tools:

- [Fork](https://git-fork.com): Git GUI
- [DBeaver](https://dbeaver.io): Our go-to database GUI, supporting a wide range of databases
- [Loom](https://www.loom.com): For recording screencasts
- Tuple: Our favorite pairing tool; ask a team member for an invite. (only for Mac -- if you have Windows you'll use Zoom to pair instead)
- VSCode: Code editor

2. Fork this repo; you make make your repo public or private as long as you give your manager access
3. Ask to be invited to the [Consultancy Breakable Toy Shortcut project](https://app.shortcut.com/consultancybreakabletoy)

## CI and Tests

We use GitHub Actions to run our CI (continuous integration) suite, which includes running our test suite and running some linting checks to ensure that your code adheres to particular style guidelines.

To set up GitHub Actions:

1. Rename `.github/workflows/main.yml.example` to `.github/workflows/main.yml`
2. Merge the change into main. GitHub Actions should now run automatically whenever you create a pull request or merge into `main`.

We use the Jest testing framework (and `react-hooks-testing-library` where necessary). We aspire to incorporate Cypress for more end-to-end TDD, but we're not there yet :) As a result, our test suite focuses on unit tests for methods and functions and includes React custom hook unit tests where beneficial.

## Resources

Learning materials referenced in stories can be found [here](./learningResources/index.md).
