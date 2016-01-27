# == Schema Information
#
# Table name: oceans
#
#  id                      :integer          primary key
#  name                    :text
#  area                    :integer
#  depth                   :integer
#  greatest_depth          :integer
#  place_of_greatest_depth :text
#

class Ocean < ActiveRecord::Base
end
