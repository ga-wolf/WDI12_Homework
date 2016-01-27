# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Planets.destroy_all

Ocean.create :name => 'Arctic', :location => "Somewhere", :facts => "Yea"
Ocean.create :name => 'Atlantic', :location => "Yep", :facts => "Whatever"
Ocean.create :name => 'Indian', :location => "Left.", :facts => "Hot"
Ocean.create :name => 'Pacific', :location => "To the right.", :facts => "Cold"
Ocean.create :name => 'Southern', :location => "Over there", :facts => "Big"
