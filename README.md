# Progressive Web Application

## Overview
J.A.T.E (Just Another Text Editor) is a versatile web-based text editor designed to empower users in creating and managing notes or code snippets seamlessly, whether connected to the internet or not. Leveraging the power of integrated service workers and Cache API, the application guarantees full functionality even in offline mode, ensuring users can reliably access their content at all times.

This text editor employs various data persistence options to safeguard user data. When launched, the application prioritizes indexedDB to populate the editor, seamlessly falling back to local storage if indexedDB access is unavailable. Furthermore, users can download the application to their desktop, allowing for offline usage as a standalone application.

Tailored for developers, J.A.T.E serves as a valuable tool for jotting down code snippets and coding ideas. The user-friendly interface and reliable offline access make it an ideal scratchpad for developers, providing a seamless experience for both online and offline scenarios.
## Usage

User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

Acceptance Criteria
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## Technologies Used 
JavaScript
NodeJS
Babel
Express
IndexedDB
Webpack+Workbox
Mini-CSS-Extract Plugin
Concurrently

## Installation and Use Instructions 
To run this project locally:

Clone or branch this repository.
Execute npm i to install all required dependencies.
Launch the application using npm run start.

## Heroku Link 
https://hidden-chamber-28255-b0cb90766dfb.herokuapp.com/

## License
This project is licensed under the MIT license.

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

For more information visit MIT Licensing.
