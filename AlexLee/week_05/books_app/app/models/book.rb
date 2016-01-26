# == Schema Information
#
# Table name: books
#
#  id           :integer          not null, primary key
#  title        :text
#  cover_image  :text
#  genre        :text
#  publisher    :text
#  publish_date :time
#  num_pages    :integer
#  author_id    :integer
#  created_at   :datetime
#  updated_at   :datetime
#

class Book < ActiveRecord::Base
    belongs_to :author
end
