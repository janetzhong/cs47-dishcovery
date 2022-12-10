# CS47 Dishcovery


Fall quarter 2022 CS147 project by Amrita, Defne, Kyla, Janet


## What is Dishcovery and When Would You Use It?

Dishcovery is a mobile app that helps users **identify, learn about, and cook** with foreign ingredients.

Using an image recognition API within the app’s central **scan** function, it can identify ingredients that users cannot yet recognise. A user can leverage the “scan” button in the navigation bar to scan an ingredient they would like to learn more about. 

Upon scanning an ingredient, the user will be able to view information about the ingredient’s origins, its flavour profile, its cultural context, and its health benefits. They can also access recipes using that ingredient and request recipes should they find that they cannot see a recipe they would like to use.

Some additional use cases for the app are: searching for dishes or recipes, searching by cuisine, manually searching by the name of an ingredient, and saving recipes they like for later use.

We anticipate that individuals may leverage this app in the grocery store or farmer’s market when they encounter an ingredient that they are unfamiliar with in order to learn more about it. We also support the use case of exploring new foreign foods to cook, both through keyword and filter search as well as based on an ingredient that they have scanned.

## Demo Video / Screenshots

See the course website here: https://web.stanford.edu/class/cs147/projects/KeepingCultureAlive/Dishcovery/
See demo video here: https://www.youtube.com/watch?v=DagL9r_Kp08

<img src="https://user-images.githubusercontent.com/91340575/206837532-1a584855-9c58-4649-be38-848d5eba4ee3.png" width=25% height=25%>  <img src="https://user-images.githubusercontent.com/91340575/206837538-bd2536ed-774f-40c1-8ca6-b070f5e05de3.png" width=25% height=25%>  <img src="https://user-images.githubusercontent.com/91340575/206837539-aade6105-9afb-4c84-a541-3c3006281a30.png" width=25% height=25%> <img src="https://user-images.githubusercontent.com/91340575/206837540-2ebc0b91-9390-416d-9611-f38322b9576d.png" width=25% height=25%> <img src="https://user-images.githubusercontent.com/91340575/206837542-e1a7b489-7f85-4bfd-b323-1fc3c5b99f07.png" width=25% height=25%> <img src="https://user-images.githubusercontent.com/91340575/206837546-bb71e86c-2ffb-4629-ac8c-ef963af8150d.png" width=25% height=25%>

## Limitations/ Hard-coded features

This is a hi-fi prototype and not all features are complete. 
* The list of recipes are hard-coded
* The cultural context for the ingredients is manually sourced
* The liked feature is not yet functional
* Not all recipe information has been added
* The image recognition is fully functional with Clarifai AI's food recognition library (~500 food items) but we have limited the results to those available in our cultural context dictionary for demo purposes. Ideally one could train a model specifically for ethnic ingredients
* The dietary preferences in the profile, filter and search features are not yet functional

## Tutorials used

https://medium.com/@danielsimandl/easy-object-detection-with-react-native-7c2e3f1b56a6 
https://www.youtube.com/watch?v=W-Oqe8Ph_eM 
https://github.com/instamobile/recipes-app-react-native

## Try it on the Expo Go app

<img src="https://user-images.githubusercontent.com/91340575/206837958-316c8849-38a9-4499-8266-2d3b75fdd8b9.png" width=25% height=25%> 


