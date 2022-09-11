# PET.GAME

Web Application that provides learning modules for students in a game like format. Has a login System for both Students and Teachers. Teachers are able to add, remove and modify classes, students, and exams through their dashboard. Students are  automatically enrolled in classes and they are options for self enrollment. Each learning module is timed with certain amount of questions and their progression is shown through a game.

Future Plans :

Technologies used : [DataBase - MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&adgroup=115749704103&gclid=CjwKCAjwi8iXBhBeEiwAKbUofV6GukgkQwaNyInTaCBzoimDXBTBpEP_9pNihp4-9huY-GrLHUeUOBoCXJgQAvD_BwE), [Middleware - Express](https://expressjs.com/), [Clientside - React](https://reactjs.org/), [Backend - Node.JS](https://nodejs.org/en/), [Styling - TailWindCSS](https://tailwindcss.com/docs/width), [HTTPS Request - Axios](https://axios-http.com/docs/intro)

Built By : **Alan Huang, Kahui Wong**

## Installing and Running the Web Application

1. Install Node JS - [NodeJS Download](https://nodejs.org/en/download/)
2. Clone This Repository
3. Installing Dependencies
   - `npm install`
   - `cd backend && npm install`
   - `cd main && npm install`

4. Scripts
   - `npm run dev` (localhost:5000 for epxress server and local host:3000 for client side)
   - `cd backend && npm start` (runs application on localhost:5000)
   - `cd main && npm start` (runs client side code only)
   - `cd main && build` (build the client code for static usage)

5. Hosting on Heroku Server
    - `heroku login`
    - `heroku create {projet name}`
    - `cd main && npm build` -> move react build directory into backend public directory  
Everything below needs to be ran in backend directoryy
    - `git init`
    - `heroku git:remote -a {project name}`
    - `git add .`
    - `git commit -m "{changes made}"`
    - `git push heroku master`

6. View Database in JSON format
   - localhost:5000/api/teachers
   - localhost:5000/api/students

## How to Use the Web Application

1. Acessing Web Application
   - `npm run dev` frontend{localhost:3000}, backend{localhost:5000}
   - `cd backend && npm start` {localhost:5000}
   - `cd main && npm start` {localhost:3000} <- frontend only
   - `{projectname}.herokuapp.com` <- hosted on heroku
2. Teacher Login
    - All login information for teachers can be modified on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=1217adtest_pmcopy_control&utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&adgroup=115749704063&gclid=CjwKCAjwi8iXBhBeEiwAKbUofZHtfAFMnS9rSjgBZI-bq8N6gU7H6kfiu5sILBzYKo4obmuC2gLNvhoC21UQAvD_BwE) by an Admin. Use your own MongoDb database by changing the URI in `cd backend && .env`
3. Teacher Dashboard
   - Teacher are able to manage their students though the dashboard. The tabs on the left side renders different components that have functions which allow them to add student, remove student, create classes, remove classes, create exams, remove exams, modify exams, and view class statistics
4. Student Login
    - Student logins are created by their teacher,  the username is their name and the code is the last 6 values of their ID
5. Student Dashboard
   - Students are able to view classes they are enrolled in and take exams for their classes. They are also able to self enroll them selves in certain classses. During the exam there will be a game like feature. Being the top of the class in terms of score will give them a trophy on the main page.
