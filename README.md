# Angularjs - Version 12

# LEC-1

- frontend development Framework
- Developed by google || react - Facebook
- For developing single page application (pura ka pura page reload nahi hoga)


- MVC Framework (model view controller)

- Angular and angular.js are differnet
- Angular.js is old and not in use now Angular (after version 2)

# Lec - 2
- install angular cli --> npm install -g @angular/cli (-g for globally)

1.ng new project-name
2.npm i
3.ng serve --> start server

# how to install specific version of angular
- m-1 pakage.js my version change kardo then run npm i
- m-2 npm install -g @angular/cli@10.0

# can we use two versions of two npm

yes by using {NVM} - Node version manager

# Lec - 3
- Important file and folder for beginners
    > package.json --> isme project ki saari details rahti hai
    > node_modules --> isme saari library rahti hai
    > app
    > assets
    > environments
    > index.html
    > main.js
    > style.css

- for Advance use
    > package-lock.json --> jitne bhi package rahte hai unki detail my information rakhti hai
    > angular.json --> applicaiton ki configuration files hoti hai
    > tsconfig files
    > karma.config.js
    > polyfills.ts

*** interview question 
1.package.json ko delete kar denge to project nahi chllega but package-lock delete karne ky baad chllega

# lec 4

- title ka code src/index.htlm my millega
- baki ka code hume app.component my likhna hai bina **boilerplatecode ke**

# lec - 5 interpolation

- interpolation --> html vale page py dynamic{componets.ts ka} data ko show karne ky liye
- kya nahi kar skte 
        -- html vale page sy increment / decrement nahi kar skte
        -- html sy .ts my change nahi kar skte

# lec - 6 angular Cli && important commands
- npm install -g @angular/cli --> install
- ng help --> all basic commands
- ng serve --> build and serve app
- ng generate --> bhut saari chize genrate kar skte hai
                - ng generate component component-name --> app vale folder my banega
                - same command short form ng g c component-name
                - ng g m module-name --> module create karne ky liye
                - ng g c user-auth/sign-in --> module ky ander component banae ky liye
- ng build --> project build karne ky liye