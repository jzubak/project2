# Hygge At Home
<img width="846" alt="Screen Shot 2019-07-04 at 2 17 16 AM" src="https://user-images.githubusercontent.com/46004362/60643690-ea071780-9e01-11e9-8ec9-ad97b13bfcc3.png">
Hygge at home is a 'style-box' style app that allows our users to log in, take a short test, and discover the perfect furniture for their homes.  
The experience begins when you select to Signin or Signup on the landing page.

A page displaying our simple form appears:
<img width="1141" alt="Screen Shot 2019-07-04 at 2 21 45 AM" src="https://user-images.githubusercontent.com/46004362/60643878-7addf300-9e02-11e9-8845-ce5f41a921ca.png">

When the user enters their information into the fields and clicks signup, the password is encrypted using `bCrypt` and saved into our `Users` table 

<img width="282" alt="Screen Shot 2019-07-04 at 2 20 47 AM" src="https://user-images.githubusercontent.com/46004362/60643826-54b85300-9e02-11e9-85ee-98379cdbd9a5.png">

`Passport.js` then authenticates the user with a local strategy, and brings them to the beginning of our test. 
<img width="1140" alt="Screen Shot 2019-07-04 at 2 25 13 AM" src="https://user-images.githubusercontent.com/46004362/60644042-f2138700-9e02-11e9-9def-3720742c868d.png">

At this point our user is asked 8 questions. For each question we provide 4 answers that can be chosen from, each with a different numerical value.  The images are always presented in a different order thanks to this shuffle function. 
<img width="341" alt="Screen Shot 2019-07-04 at 2 29 47 AM" src="https://user-images.githubusercontent.com/46004362/60644275-94336f00-9e03-11e9-9a64-6be5743848e7.png">



