# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

First of all you have to get installed NodeJS and Ionic, to do this, follow the next steps:

* Install node

MAC: Before install node, we need Homebrew, copy and paste this in terminal and press enter:
sudo ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

type your admin's password to give full access to you system files, so we make sure it installs properly.

After the installation, copy and paste the next command, an then sit and wait: 

sudo brew install node

Ok, now we should have node installated, we can check it by executing: node -v , if it returns a version number, it means that we have the latest version of node installed.

* Install Ionic
    Simply execute: npm install -g cordova ionic

* Set up project

    Once we have installed ionic and node, we have to clone the project in or computer. Then, we have to navigate with or Terminal or cmd, depending our OS, to the projects directori and execute:
    ionic serve

    It will compile our project and launch it in a browser. For sure probably it will not be displayed properly, since is a mobile app an not a web app. 

* Launch the project in a device:

    If we want to launch the project in our device, first of all we need to add the platform for which we want to launch. Use the next command:

    ionic cordova platform add [PLATFOMNAME]

    where [PLATFORNAME] could be any of the supported cordova platforms

    After that, we have to import the project in our ide (xCode for iOS and Android Studio for windows and linux), and start the app in our device.

    


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact