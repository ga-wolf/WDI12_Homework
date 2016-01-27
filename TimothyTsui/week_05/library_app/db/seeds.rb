# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Author.create(:name => 'Orson Scott Card', :nationality => 'American', :style => 'science fiction', :dob => '1951-08-24', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Orson_Scott_Card_at_BYU_Symposium_20080216_closeup.jpg')
Author.create(:name => 'Ernest Hemingway', :nationality => 'American', :style => 'Contemporary prose', :dob => '1899-07-21', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/440px-ErnestHemingway.jpg')
Author.create(:name => 'George Orwell', :nationality => 'English', :style => 'dystopia', :dob => '1903-06-25', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg')

