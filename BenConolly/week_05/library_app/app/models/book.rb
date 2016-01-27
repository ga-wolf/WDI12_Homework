# == Schema Information
#
# Table name: books
#
#  id        :integer          not null, primary key
#  name      :text
#  year      :text
#  cover     :text
#  genre     :text
#  author_id :integer
#

class Book < ActiveRecord::Base
  belongs_to :author
end
