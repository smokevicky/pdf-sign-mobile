
# PDF Sign Mobile Web App

This is a mobile-friendly web app that allows users to upload a PDF, send it to a mock server for signing, and view the signed PDF directly on their device.

## Features

### 1. PDF Upload
- Users can upload a PDF file from their mobile device.

### 2. Mock Server for Signing
- The uploaded PDF is sent to a mock server that simulates signing and returns a signed version of the PDF.

### 3. View Signed PDF
- The signed PDF is displayed directly on the mobile device using an integrated PDF viewer.

### 4. Responsive Design
- The app is fully mobile-responsive and provides a smooth experience on both phones and tablets.

## Getting Started

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser or mobile device.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## Technologies Used
- React 18
- TypeScript
- Material UI
- CRACO (for custom configuration)

## How It Works
1. Upload a PDF using the upload button.
2. The app sends the PDF to a mock server endpoint.
3. The mock server returns a signed PDF.
4. The signed PDF is displayed in a PDF viewer within the app.

## License
MIT
