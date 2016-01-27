# == Schema Information
#
# Table name: oceans
#
#  id                  :integer          primary key
#  name                :text
#  image               :text
#  location            :text
#  bordering_countries :text
#  facts               :text
#

class Ocean < ActiveRecord::Base
end

