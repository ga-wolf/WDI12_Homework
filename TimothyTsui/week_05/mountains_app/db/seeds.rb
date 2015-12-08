# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Mountain.destroy_all
Mountain.create :name => 'Everest', :image => 'http://cdn.images.express.co.uk/img/dynamic/128/590x/Everest-575683.jpg', :location => 'Nepal', :first_ascent => 1953, :death_rate => 5.7, :altitude => 8848
Mountain.create :name => 'Shisha Pangma', :image => 'http://www.sevensummittreks.com/images/maps/map-shishapangma.jpg', :location => 'China', :first_ascent => 1964, :death_rate => 8.39, :altitude => 8027
Mountain.create :name => 'Gasherbrum I', :image => 'http://polishwinterhimalaism.pl/media/Brax_HighSlide_Gallery_gallery/main383.jpg', :location => 'China', :first_ascent => 1958, :death_rate => 9.43, :altitude => 8080
Mountain.create :name => 'Makalu', :image => 'http://static.7summits.ru/media/max/1/4134.jpg', :location => 'Nepal/China', :first_ascent => 1955, :death_rate => 11.11, :altitude => 8485