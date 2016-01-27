# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Author.destroy_all
Author.create(:name => 'J. R. R. Tolkien', :nationality => 'English', :dob => '1892/01/03', :genre => 'Fiction', :image => 'http://graphics8.nytimes.com/images/2012/12/18/sports/tennis/18tolkienpic/18tolkienpic-superJumbo.jpg')

Book.destroy_all
Book.create(:title => 'The Hobbit', :year => '1937', :genre => 'Fiction', :description => 'The Hobbit follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug.', :image => 'https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG')