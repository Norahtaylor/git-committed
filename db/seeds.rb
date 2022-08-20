# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# UserAccount.create([{
#     first_name: "norah", last_name:"taylor", username: "norahtay", pa
# },
# {
#     first_name: "em", last_name:"kramm", username: "emkramm", pa
# }])

# UserAccount.create(
#       username: "Lexi",
#       first_name: "Lexi", 
#       password: "1234",
#      age: 31,
#     birthdate: "12/07/1990",
#      gender: "female",
#      interested_in: "female", 
#      bio: "Bootcamp student single and ready to mingle",
#     education: "General Assembly Bootcamp",
#      hometown: "Ohio",
#      profile_photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
#      location: "New York City"
# )


UserAccount.create([{
      username: "Lexi",
      first_name: "Lexi", 
    password: "1234",
     age: 31,
    birthdate: "12/07/1990",
     gender: "female",
     interested_in: "female", 
     bio: "Bootcamp student single and ready to mingle",
    education: "General Assembly Bootcamp",
     hometown: "Ohio",
     profile_photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
     location: "New York City"
}, 
 { username: "Em",
      first_name: "Em",
     age: 26,
    password: "1234",
    birthdate: "",
     gender: "non-binary",
     interested_in: "female", 
     bio: "Happyily dating",
    education: "Flatiron Bootcamp",
     hometown: "",
     profile_photo:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
     location: "New York City"},
     {
        username: "Paully",
      first_name: "Paully",
    password: "1234",
     age: 26,
    birthdate: "February 08, 1996",
     gender: "female",
     interested_in: "female", 
     bio: "single and looking",
    education: "Florida State University",
     hometown: "Florida",
     profile_photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
     location: "Lower East Side"
     },
     {
        username: "Tony",
      first_name: "Tony",
    password: "1234",
     age: 30,
    birthdate: "February 08, 1989",
     gender: "male",
     interested_in: "female", 
     bio: "single",
    education: "Fordam University",
     hometown: "New York",
     profile_photo:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
     location: "East Village"

     }, {
     username: "Stephen",
      first_name: "Stephen",
    password: "1234",
     age: 31,
    birthdate: "February 02, 1989",
     gender: "male",
     interested_in: "male", 
     bio: "Outdoors loving coder looking for a husband",
    education: "New York University",
     hometown: "New York",
     profile_photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
     location: "West Village"},
        {
        username: "Trey",
      first_name: "Trey",
    password: "1234",
     age: 21,
    birthdate: "July 02, 1998",
     gender: "male",
     interested_in: "male", 
     bio: "Just moved to the city, show me around!",
    education: "Standford",
     hometown: "California",
     profile_photo:"https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
     location: "Hells Kitchen"
        },
        {
        username: "Melissa",
      first_name: "Melissa", 
    password: "1234",
     age: 21,
    birthdate: "June 02, 1998",
     gender: "female",
     interested_in: "everyone", 
     bio: "I love love",
    education: "Standford",
     hometown: "California",
     profile_photo:"https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
     location: "Bushwick"

        },
    {
    username: "James",
      first_name: "James", 
    password: "1234",
     age: 31,
    birthdate: "August 02, 1989",
     gender: "male",
     interested_in: "female", 
     bio: "I'd love to show you my favorite wine bar",
    education: "Flatiron Bootcamp",
     hometown: "New York",
     profile_photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
     location: "Lower Manhattan"
    },
    {
    username: "Travares",
      first_name: "Travares", 
    password: "1234",
     age: 23,
    birthdate: "June 02, 1998",
     gender: "male",
     interested_in: "male", 
     bio: "Developer who just moved to the city from Atlanta",
    education: "Computer Science Degree",
     hometown: "Georgia",
     profile_photo:"https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
     location: "Lower East Side"
    },
    {
    username: "Laverne",
      first_name: "Laverne", 
    password: "1234",
     age: 50,
    birthdate: "May 29, 1972",
     gender: "trans",
     interested_in: "male", 
     bio: "Heard there was a hot new inclusive dating app so I had to join",
    education: "Marymount Manhattan College",
     hometown: "Alabama",
     profile_photo:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/22/10/laverne-cox.jpg?width=1200",
     location: "Everywhere"
    }
   ])
     puts "i finished seeding"