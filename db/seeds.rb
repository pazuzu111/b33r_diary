# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#delete all from beer table
Beer.delete_all

#seed with ready data
Beer.create(name: "raging bitch", brewery: "flying dog", style: "belgian ipa", image_url:"http://flyingdogbrewery.com/wp-content/uploads/2011/01/RagingBitch_Bottle.png", abv:8.3)
Beer.create(name: "snake dog", brewery: "flying dog", style: "ipa", image_url:"http://flyingdogbrewery.com/wp-content/uploads/2011/02/Snake_Bottle.png", abv:7.1)
Beer.create(name: "bloodline", brewery: "flying dog", style: "blood orange ale", image_url:"http://flyingdogbrewery.com/wp-content/uploads/2014/04/Bloodline_bottle.png", abv:7)

#notify--> output to console
puts "3 beers added!!!"
