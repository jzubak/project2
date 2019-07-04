# Hygge At Home
https://evening-wave-34109.herokuapp.com/

<img width="846" alt="Screen Shot 2019-07-04 at 2 17 16 AM" src="https://user-images.githubusercontent.com/46004362/60643690-ea071780-9e01-11e9-8ec9-ad97b13bfcc3.png">
Hygge At Home is a 'style-box' style app that allows our users to log in, take a short test, and discover the perfect furniture for their homes.  Hygge At Home utilizes the following technologies: MySQL, Sequelize, bCrypt, Passport.js, Express, Express Sessions, Node.js, and Handlebars.

The experience begins when you select to Signin or Signup on the landing page.

<img width="1141" alt="Screen Shot 2019-07-04 at 2 21 45 AM" src="https://user-images.githubusercontent.com/46004362/60643878-7addf300-9e02-11e9-8845-ce5f41a921ca.png">

When the user enters their information into the fields and clicks signup, the password is encrypted using `bCrypt` and saved into our `Users` table.  This table comes into play later in our app when we need to assosciate results from the tests with a specific user, and for pulling that information up in our members section.

<img width="282" alt="Screen Shot 2019-07-04 at 2 20 47 AM" src="https://user-images.githubusercontent.com/46004362/60643826-54b85300-9e02-11e9-85ee-98379cdbd9a5.png">

`Passport.js` then authenticates the user with a local strategy, and brings them to the beginning of our test. 
<img width="1140" alt="Screen Shot 2019-07-04 at 2 25 13 AM" src="https://user-images.githubusercontent.com/46004362/60644042-f2138700-9e02-11e9-9def-3720742c868d.png">

At this point our user is asked 8 questions. For each question we provide 4 answers that can be chosen from, each with a different numerical value.  The images are always presented in a different order thanks to this shuffle function. 
<img width="341" alt="Screen Shot 2019-07-04 at 2 29 47 AM" src="https://user-images.githubusercontent.com/46004362/60644275-94336f00-9e03-11e9-9a64-6be5743848e7.png">

At the end of the test the numeric values from the 8 answers are stored in another table, and we use a short bit of logic to determine which style furniture best fits your style 

<img width="448" alt="Screen Shot 2019-07-04 at 2 31 31 AM" src="https://user-images.githubusercontent.com/46004362/60644393-fc825080-9e03-11e9-8413-629e6fe65e3f.png">

At this point an API call is made to `Etsy` with the style selected from the test and we use jQuerey to display the results.

<img width="792" alt="Screen Shot 2019-07-04 at 2 35 19 AM" src="https://user-images.githubusercontent.com/46004362/60644566-83372d80-9e04-11e9-929d-1c8546322ab6.png">

In addition to telling you the style we matched with you, 12 items with images, descriptions, and prices are displayed on the page.  Each one of these pictures is also a clickable link that will bring you to the Etsy product page.

<img width="905" alt="Screen Shot 2019-07-04 at 2 38 14 AM" src="https://user-images.githubusercontent.com/46004362/60644651-c2657e80-9e04-11e9-8deb-0acd6fde4fd8.png">

At this point the url for both the images, and the product postings are saved in a seperate table.  If you click on your name in the `navbar` you're taken to a members page where you can review the results from previously taken quizzes.  You can also click on `Take Another Quiz` in the top right corner to try again, and get matched with new products for your home! 

<img width="867" alt="Screen Shot 2019-07-04 at 2 44 49 AM" src="https://user-images.githubusercontent.com/46004362/60645091-c776fd80-9e05-11e9-8691-559d452e7e26.png">

