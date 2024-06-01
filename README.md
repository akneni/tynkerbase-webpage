# TynkerBase Web Page Repository

This repository contains the source code and assets for the TynkerBase website. The website serves as the main portal for users to download our client and agent applications, onboard new users, collect feedback, and access documentation and tutorials. This README is intended for the developers maintaining this repository.

## Project Overview

TynkerBase is a service that allows users to self-host common cloud services on their own hardware. Our website plays a critical role in facilitating this process by providing downloads, onboarding, feedback collection, and comprehensive documentation.

## Features

- **Download Center**: Provides users with links and instructions to download the client and agent applications.
- **User Onboarding**: Guides and tutorials to help users get started with TynkerBase.
- **Feedback Collection**: Forms for submitting feature requests and bug reports.
- **Documentation and Tutorials**: Detailed information to help users understand and use TynkerBase.

## Technologies Used

- **React**: For building the front-end user interface.
- **HTML/CSS**: For structuring and styling the web pages.
- **JavaScript**: For interactive elements and functionality.
- **Node.js**: For managing dependencies and running development scripts.

## Repository Structure

- **/public**: Static assets and the HTML template.
- **/src**: Source code for the website.
  - **/components**: React components.
  - **/pages**: Page components.
  - **/styles**: CSS and style files.
  - **/utils**: Utility functions.
- **package.json**: Project configuration and dependencies.
- **README.md**: This file.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/tynkerbase-webpage.git
   cd tynkerbase-webpage
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

### Running the Project

To start the development server, run:

```sh
npm start
```

This will launch the website locally. You can view it in your browser at `http://localhost:3000`.

### Code Style
- Include comments in your code
- Use meaningful commit messages.
- Keep pull requests focused on a single issue or feature.
