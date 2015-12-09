# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Book.create(:name => 'The Socratic Dialogues', :year => '350BC', :cover => 'http://ecx.images-amazon.com/images/I/51wrCZ0y-8L._SY344_BO1,204,203,200_.jpg', :genre => 'philosophy')


Book.create(:name => 'On Liberty', :year => '1859', :cover => 'https://upload.wikimedia.org/wikipedia/commons/7/72/On_Liberty_%28first_edition_title_page_via_facsimile%29.jpg', :genre => 'philosophy')

Author.create(:name => 'John Stuart Mill', :dob => '20 May 1806', :nationality => 'English')

Author.create(:name => 'Plato', :dob => '426BC', :nationality => 'Athenian')
