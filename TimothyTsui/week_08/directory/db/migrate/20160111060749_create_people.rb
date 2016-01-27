class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.text :name
      t.bigint :phone
      t.text :email
      t.text :address
      t.text :city

      t.timestamps null: false
    end
  end
end
