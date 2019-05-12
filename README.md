# SportsStoreAdmin

## Description
  To complete the SportsStore application, I am going to create an application that will alow the administrator to manage the content of the product catalog and the order queue. This will allow us to see how AngularJS can be used to perform create, read, update and delete (CRUD) operations and reinforce the use of some key feature from the main SportsStore application ( link: https://github.com/Moise97/SportsStore )
  
## Prerequisites
  First of all, we need to making changes to the database in something that only administrators should be able to do do. In short, the administrator should be able to perform any operation an any collection. The normal user should be able to read (but not modify) the products collection and create new objects in the orders collections. To do that create a new collection in Deployd /users and enter the properties listened in the following table:
  
| Name          | Type     | Required? |
| :-----------: |:--------:| :--------:|
| username      | string   | yes       |
| password      | string   | yes       |

  One of the feature that I like about Deployd is that it defines a simple JavaScript API that can be used to implement server-side functionality, a series of events that are triggered when operations are performed on a collection. In order to securing the collections we need to add the following JavaScript code to the Events tab of the collections defined in the following tabel:
```
if(me === undefined || me.username != "admin"){
  cancel("No authorization", 401);
}
```

| Collection    |     Description           |               
| :-----------: |:-------------------------:|               
| products      | On Put, On Delete         |
| orders        | On Get, On Put, On Delete |
| users         | none                      |


## Directory Structure
* angularjs
  * controllers
    * adminControllers.js
    * adminProductController.js
  * ngmodules
    * angular-resource.js(*)
    * angular-route.js(*)
  * views
    * adminLogin.html
    * adminMain.html
    * adminOrders.html
    * adminProducts.html
  * angular.js(*)
  * bootstrap.css(*)
  * bootstrap-theme.css(*)
  * app.html
* node_modules
* .gitignore
* package-lock.json
* package.json
* Readme.md
* server.js


## Installing the AngularJS and Bootstrap Files
In order for application to work, you'll need to download all the files marked with (*) and paste them in the right place based on directory structure. After that you need to install Node.js and from the SportStoreAdmin directory , run the following commands:
```
npm install
node server.js
```
