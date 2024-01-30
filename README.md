# The Village
## Capstone Project
Being a parent is wonderful but it is also extremely difficult. Every child is different and needs something special. We need each other to learn and give our best to our children. Come make a connection with other parents, get answers to questions, and help other parents

I wanted a place where you could meet with other parents and ask questions. THis website is setup to do just that. 

### Details
This project is set up with react frontend and is sent nested data from a ruby on rails backend program. It has multiple navlinks to different pages. Allow create and read capabilities to all components. As well as full CRUD capabilities to the join table. All the nested data is connected together in a many to many relationship. There are users with many reviews to many car seats. It has Get, Post, Patch, and Delete requests on the question and answer components. I uses data Get and Post on the User and topic models. This code uses a lot of mapping and filtering to access the nested data and allow you to change the deeper aspects of the data.

### Features
This website allows you to view questions under specific topics, create an new question, Anwer and view other answers on different questions, edit and delete  your own questions. It also allows you to see all questions and your questions. 
### How to Use
First you need to login or signup at the begining. You are able to add a question by clicking on a topic. If you don't see your topic you can add a new one. It will then place your question under that topic. You may then answer, view answers, edit or delete your questions. If you decide to answer it, you just input your answer and send it in. 

### Installation Instructions
To get this app up and running you need to by forking and then cloning this on github and running npm install --prefix client and npm start --prefix client. This will bring up the website. To get the website to work you must also get the back end up and running. To do this you put in the terminal rails db:migrate and rails s.

### Contributions
If you would like to make contributions to this website contact the creator at cosettetshibanda@gmail.com

### Blog
https://medium.com/@cosettetshibanda/debugging-larger-applications-afff1a14714c