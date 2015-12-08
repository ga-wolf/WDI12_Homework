# == Schema Information
#
# Table name: mountains
#
#  id           :integer          primary key
#  image        :text
#  location     :text
#  first_ascent :integer
#  death_rate   :float
#  altitude     :integer
#

class Mountain < ActiveRecord::Base

end
