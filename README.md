# PWAct
[![npm](https://img.shields.io/npm/dy/localeval.svg)](npmjs.com/package/pwact) 
[![GitHub package version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/lhcgoncalves/pwact)

Build PWA faster and get more productivity!

# Why?

PWAct provide useful CLI commands that increase time-gain and productivity!

Ex:

    pwact cache foo.html

This command will add foo.html to Local Cache Storage

# Install

PWAct is available at [NPM](https://www.npmjs.com/package/pwact). In your (fresh) project, run

    npm install pwact

That's it. You'll be able to use =D

## Others ways to use

Yarn

    yarn add pwact

Using CDNs

- [unpkg](https://unpkg.com/pwact/)
- [bundle.run](https://bundle.run/pwact)
- [jsDelivr](https://cdn.jsdelivr.net/npm/pwact/)

# Docs and usage

## pwact init (1st)

Create a pwact.json file, which contains all settings for PWAct. After this, you **must** run the next command: `pwact start`

Before you run next command, you can change PWAct.json options, like the path of icons, version, etc.

## pwact start (2nd)

Create a service-worker file, a simple JS file (which will register the worker), a Manifest.json and a pretty simple index.html (optional) containing all meta tags required for a basic PWA functionality.

## pwact cache *foo.ext* or *--reset*

Adds the file in Local Cache Storage and register it in the service-worker. Plus, will update the cache version of the application.

If you choose pass --reset option instead a file, PWAct will update the worker with the files set in pwact.json file.

## pwact icon *image.ext*

Given a PNG file (recommended 512x512px), this will replicate and resize the image for appropriate icon files (based in Manifest.json specs)

NOTE: The icon must be under the project. 

Ex: `pwact icon logo.png`

## pwact manifest set:*foo* *bar*

Set Manifest.json properties, like scope, name, display, author, etc.

Ex: `pwact manifest set:display fullscreen`

## pwact related_apps

Often, PWAs have other "official" applications. You can list them in Manifest.json. You can set if you want to prorize them (or not) and set some info, like platform and URL.

Ex: `pwact related_apps`

> Prefer related apps? (yes/no): yes
>
> Platform (e.g.: play): play
>
> URL (e.g.: https://play.google.com/store/apps/details?id=com.example.app1): ...
>
> ID of the app  (e.g.: com.example.app1): com.example.pwa1


## pwact help [command]

List all available commands, parameters, example and usage.

Ex: `pwact help icon`

# Milestone

We're planning a lot of features to develop:

- Template support for React, Vue, Ember, Angular or PWAct itself
- Push notifications support
- Better icon options
- Electron interface
