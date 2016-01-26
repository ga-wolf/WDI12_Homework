class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
        t.text :title
        t.text :cover_image
        t.text :genre
        t.text :publisher
        t.date :publish_date
        t.integer :num_pages
        t.timestamps
    end
  end
end
