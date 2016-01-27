# == Schema Information
#
# Table name: oceans
#
#  id            :integer          primary key
#  name          :text
#  location      :text
#  deepest_point :float
#  average_depth :float
#  fact          :text
#

class Ocean < ActiveRecord::Base
end
