class BooksAndAuthors < ActiveRecord::Migration
  def change
    create_table :books do |b|
      b.text :name
      b.text :year
      b.text :cover
      b.text :genre
      b.integer :author_id
    end

    create_table :authors do |a|
      a.text :name
      a.text :dob
      a.text :nationality
      a.text :image
    end
  end
end
