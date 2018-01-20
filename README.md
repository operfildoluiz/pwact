# PWAct
Build PWA faster and get more productivity!

# Why?
PWAct provide useful CLI commands that increase time-gain and productivity!

Ex:

    pwact cache foo.html

This command will add foo.html to Local Cache Storage

# Install

In your (fresh) project, run

    npm install pwact

That's it. You'll be able to use :D

# Docs

## pwact init

Create a pwact.json file, which contains all settings for PWAct.

## pwact start

Create a service-worker.js, a pwa.js (which will register the worker), a manifest.json and a pretty simple index.html containing all meta tags required for a basic PWA functionality.

## pwact cache *foo.ext*

Adds the file in Local Cache Storage and register it in the service-worker.js. Plus, will update the cache version of the application.

## pwact icon *image.ext*

Given a PNG file (min. 512x512px), this will replicate and resize the image for appropriate icon files (based in Manifest.json specs)

NOTE: The icon must be under the project. Ex: pwact icon images/logo.png

## pwact manifest set:*foo* *bar

Set Manifest.json properties, like scope, name, display, author, etc.

Ex: pwact manifest set:display fullscreen

## pwact help [command]

List all available commands, parameters, example and usage.

Ex: pwact help icon
