# Hogwarts

## Setup
After cloning down the project:

Run `npm install` in your terminal and then, run `npm start`. This will open your backend on port 4000 and your React app on port 3000. The `json-server` is reading from the `db.json` file and the data about our wizards can be accessed from port 4000 using RESTful routes.

## Endpoints

The base URL for your backend is: `http://localhost:4000`

These are the endpoints you might need:

* `GET /wizards`
* `POST /wizards`
* `DELETE /wizards/:id`

## What You Already Have

The `App` Component has two children - `Header` and `Hogwarts`. And within `Hogwarts`, there is the `GreatHall`, the `SortingHat` and the `MaraudersMap`. The `GreatHall` will hold all the `Wizard`s attending Hogwarts and the `SortingHat` will decide which houses the new wizards entering Hogwarts for the first time will go. The `MaraudersMap` will be responsible for keeping track of which `Wizard`s are entering the `GreatHall`.

In other words: the `GreatHall` is going to be the container containing the `Wizard` components, the `SortingHat` will be a form that the user fills out to render a new `Wizard` component within the `GreatHall` container and the `MaraudersMap` is a component responsible for filtering the `Wizard`s being rendered.

All of the code to style the page has been written for you, meaning that your primary focus should be building out the functionality of this application. If your finished product has some styling issues, don't worry too much about it.

## Deliverables

    As a user, I should be able to:
    * Render a list of wizards from the `json-server` backend onto our React frontend, using the given `Wizard` component. The `Wizard` component should display the wizard's name, wand core and the house they are in. By default, Image 1 of the wizard should be shown.
    * Change the picture of a `Wizard` when I click on the image. Like most pictures in Hogwarts, these wizarding cards should also move around and when we click on the image, it should toggle back and forth between Image 1 and Image 2. Keep in mind that each picture should behave independent of one another.
    * Log a new `Wizard` through the use of the `SortingHat`. When the form within the `SortingHat` is submitted, a new wizard should be persisted to the backend with the information that was filled out in the form. The new `Wizard` should also be rendered out on the frontend when the form submits, without the page needing to refresh.
* Filter out the wizards by their houses. `MaraudersMap` is the component that will decide whether all the wizards in the database is rendered or only wizards from a specific house is rendered. As an option is selected, the wizards being shown on the React frontend should change without the page needing to refresh.
    * Graduate a `Wizard` from Hogwarts. When the Graduate button is clicked, the `Wizard` should be deleted from the backend and the corresponding component should be removed from the page without the page refreshing. 

image1: https://i.pinimg.com/originals/9a/e7/04/9ae704c8102b5caebb624948cde341de.jpg
image2: https://pm1.narvii.com/6393/9436da38c61302026fc63eed3bd1f56f255da864_hq.jpg

wand: Yew Wood

image1: https://comicvine1.cbsistatic.com/uploads/scale_medium/11/111746/4296088-neville%20longbottom.jpg
 
image 2: https://pm1.narvii.com/6895/8a8a34915b9cd6da5f4f8c5a6d5ea4d365525541r1-610-427v2_uhq.jpg

wand: Cherry and Unicorn Hair