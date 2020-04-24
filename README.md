## STS-Integrated-System

[STS Clover](#STS-Clover)

[Description](#description)

[Basics](#basics)

[Code Repository](#code-repository)

[Code Security](#code-security)

[Architecture](#architecture)

[Model View Controller](#model-view-controller)

[Set up instructions](#set-up-instructions)

[Maintenance Instructions](#maintenance-instructions)

[Change the time of scheduler task](#change-the-time-of-scheduler-task)
## Description
## Basics
#### Code Repository
The code for the official STS Clover is at https://github.com/STS-Emory/STS-Clover. It is managed by the github accounts: STS-Emory  and tuyiskevin. This is a public repository which means that some configurations files are not available to the public for security purposes but would have be to created when you decide to run the instance. 

### Code Security
Since the repository is public, everyone on web can view the contents pushed to repo. Once you run your instance, It is important not to push things like credentials (for email server or database) up to the github, this repo has already have a gitignore file set up to filter these files when uploading. One safe procedure is to only add additional credentials in the files in gitignore.
## Architecture
### Model View Controller
This project follows a MVC design. Understanding this design pattern will help in finding the files containing the logic you might be interested in updating.
#### image
Model in this project is identified by “.model.js”, these files use a Object Oriented layout to define each of the database templates. 

Views are identified by “view.html” defines the layout of a page on front-end.  They usually appears in pairs with client controllers (abc.client.controller.js usually details the logic in abc.client.view.html).  

There are generally two types of controllers in this project: client (front-end controllers) and server (backend controllers). 

The prior (identified by “client.controller.js”) is js code that is going to be executed on the user’s machine so when writing them keep in mind they should be lightweight (for user experience improvement). The security measures taken in these files is only auxiliary and cannot guarantee full security (meaning whatever security logic you have here need to be implemented by some counterpart in backend too).

The later (identified by “server.controller.js”) is js code that is going to executed on backend (server). These functions are usually mapped to an interface by “.routes.js” files. These are the backend logic needed to be done, all of the database options happens here too. The workflow of the whole application can be expressed as:
##### image
### Set up instructions
Use git clone to download the code from github
```
git clone https://github.com/STS-Emory/STS-Clover.git
```
#### Install Node: 
Click [here]()

#### Install MongoDB: 
Click [here]()
#### Install Bower:
```
npm install -g bower
```
#### Install Grunt:
```
npm install
```
```
npm install -g grunt-cli
```
#### Install dependencies:
```
npm install --save --save-dev
```
```
bower install --allow-root
```

> This Clover version is a rebase from henryYHC/STS-Integrated-System
