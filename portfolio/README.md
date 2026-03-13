# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.17.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment

This project is configured for easy deployment on Vercel with Server-Side Rendering (SSR) support.

### Deploying to Vercel

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your Git repository

2. **Vercel will automatically detect the Angular project** and use the configuration in `vercel.json`

3. **Build settings (should be auto-detected):**
   - Build Command: `ng build --configuration production`
   - Output Directory: `dist/portfolio`
   - Node.js Version: 18.x or later

4. **Deploy:** Click "Deploy" and Vercel will build and deploy your portfolio

### Manual Deployment (using Vercel CLI)

If you prefer using the command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

The `vercel.json` file in the root directory contains the necessary configuration for SSR deployment.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
