# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
UserAccount.create([{
    first_name: "norah", last_name:"taylor", username: "norahtay", password_digest: 1234
},
{
    first_name: "em", last_name:"kramm", username: "emkramm", password_digest: 1234
}])

UserProfile.create([{
      user_account_id: 1,
      name: "Norah", 
     age: 28,
    birthdate: "11/07/1993",
     gender: "Female",
     interested_in: "Men and Women", 
     bio: "Bootcamp student single and ready to mingle",
    education: "Flatiron Bootcamp",
     hometown: "Dade City",
     profile_photo:"url",
     location: "New York City"
}, 
 {user_account_id: 2,
      name: "Em", 
     age: 26,
    birthdate: "",
     gender: "She/They",
     interested_in: "Women", 
     bio: "Happyily dating",
    education: "Flatiron Bootcamp",
     hometown: "",
     profile_photo:"url",
     location: "New York City"}])