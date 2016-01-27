# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :text
#  year        :text
#  genre       :text
#  description :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Book < ActiveRecord::Base
  belongs_to :author
end 
