# git-committed

Inclusive dating app for people in the tech industry. 

## General info 

Git Committed is a Tinder-style dating app that lets users swipe through users based on dating preferences.
![Screenshot 2023-02-13 at 5 07 40 PM](https://user-images.githubusercontent.com/99750599/218585935-b0b660d1-456c-44b8-b10b-317e4d24962e.png)
![Screenshot 2023-02-13 at 5 07 21 PM](https://user-images.githubusercontent.com/99750599/218585943-b8557e81-b50f-47a8-936c-a1566df31e9c.png)


## Project Video 
[Click to view](https://www.loom.com/share/7ea02fff965e40519cdc32b7ed4f9bc4)

## Swipe Page
![Screenshot 2023-02-13 at 5 26 02 PM](https://user-images.githubusercontent.com/99750599/218588894-a54960c7-28b4-49fa-bc78-fa1401e16bd6.png)

## Profile Page
![Screenshot 2023-02-13 at 5 26 37 PM](https://user-images.githubusercontent.com/99750599/218588912-c0a625ea-e806-42aa-b871-5b332c58a5e4.png)


## Code Examples 
### JavaScript/React.js
![Screenshot 2023-02-13 at 5 22 19 PM](https://user-images.githubusercontent.com/99750599/218588401-4b7f0da8-ab60-41d9-b904-aea8aba2263a.png)
![Screenshot 2023-02-13 at 5 22 11 PM](https://user-images.githubusercontent.com/99750599/218588763-a0b222b8-2b55-4856-b5c2-b4dd0664ba81.png)


### Ruby/Rails 
The logic for Tinder-style swipe page

    def show_interested
        user = UserAccount.find_by(id: session[:user_id])

        # Gay Men 
         if (user.interested_in === "male" && user.gender === "male")
            accounts = UserAccount.where(gender:"male", interested_in: "male").or(UserAccount.where(gender: "male", interested_in: "everyone"))
            # filter accounts user has already swiped on 
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Lesbians  
         elsif (user.interested_in === "female" && user.gender === "female")
            accounts = UserAccount.where(gender:"female", interested_in: "female").or(UserAccount.where(gender: "non-binary", interested_in: "female")).or(UserAccount.where(gender: "female", interested_in: "everyone"))
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
         
        # Straight Men 
         elsif (user.interested_in === "female" && user.gender === "male")
            accounts = UserAccount.where(gender:"female", interested_in: "male")
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Straight Women 
         elsif (user.interested_in === "male" && user.gender === "female")
            accounts = UserAccount.where(gender:"male", interested_in: "female")
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

      #  ....etc 

> > 

## Features 
* Single-page dating app that allows users to connect with people in the tech industry.
* Created multiple client-side routes using React Router so that users can navigate between the
* Tinder-style swipe page, the user’s profile page, their matches page, and their matches profile.
* Styled with custom CSS, React Bootstrap, and Material UI.
* Implemented authentication/authorization with password protection to keep users logged in via ID in the
 session hash.
* Users can add profile information and edit their profile

