# My E-commerce Store

A modern e-commerce platform built with React, featuring a responsive design, product catalog and product pages, shopping cart, and contact.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v6.0.0 or higher)

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/RJHarvest/my-ecommerce
```

2. Navigate into the folder

```bash
cd my-ecommerce
```

3. Install the project modules

```bash
npm install
```

4. Run the local development server

```bash
npm run start
```

## Deployment
Follow the instructions below to deploy your own version of the e-commerce website on your own Github page.

1. First rename the **homepage** value in your package.json file.

```json
// package.json

{
  "homepage": "https://<your-github-username>.github.io/my-ecommerce"
}
```

2. Save and commit the code.

```bash
git commit -am 'chore: Change homepage URL'
```

3. Go to your Github account and create a new repository.
4. Give it a name and then follow the instructions set out by Github.
5. Once the codebase is pushed to the **main** branch, a Github action will trigger automatically to deploy your website.
6. After it's done, navigate to *https://\<your-github-username\>.github.io/my-ecommerce* to view it.
