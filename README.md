# AMAZIM WEBSITE

#

5. List Products
   a. create products array
   b. add products images
   c. render products
   d. style products

6. Router Dom
   a. npm i react-router-dom // installation
   b.creat router for home screen
   c,create router for product screen
   // we use <LINK> to ignore refresh in single page

7. Create Node.js Server
   a.run npm init in root folder
   b.update package.json set type:module
   c.add .js to imports
   d.npm install express
   e.create server.js
   f.add start command as node backend/server.js
   7.require express
   8.create roout for / return backend is ready
   9.move product.js from front to back
   10.create rout for /api/products
   11.return products
   12.run npm start

8. fetch product from Backend
   1.set proxy in package.json
   2.npm install axios
   3.use state hook
   4.use effect hook
   5.use reduce hook

9. manage state by reducer Hook

   1. define reducer
   2. update fetch data 12. get state from reducer

10. add Bootstrap UI Framework

    1. npm install react-bootstrap bootstrap
    2. update app.js
    3. npm install react-router-bootstrap to use linkContainer

11. babel-jest & jest was deleted from power/node_modules

12. create product and rating component
    1. create rating component
    2. create product component
    3. use raating componenet in product component
13. product details screen

    1. fetch product from backend
    2. create 3 columns for image , info and action

14. create loading and message component

    1. create loading component
    2. use spinner component
    3. create msg component
    4. create utils.js to define getError function

15. Add to Cart

    1. create react context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler

15.1. C. add to cart 1. check exist item in the cart 2. check count in stock in backend

16. create cart screen
    1. create 2 columns
    2. display item list
    3. create action column
17. Complete CS
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. create signin screen UI
    1. create signin form
    2. add email and password
    3. add signin button
19. Connect to MongoDB
20. seed sample data
    1. create product model
    2. create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. seed sample users
    1. create user model
    2. seed simple users
    3. create user routes
22. create signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
23. C signin screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
