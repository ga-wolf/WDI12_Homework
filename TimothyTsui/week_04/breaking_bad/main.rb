require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# show the add character form
get '/characters/add' do
  erb :character_add
end

# add character to database
post '/characters/add' do
  query = "INSERT INTO characters (first_name, last_name, age, gender, occupation, aliases, image) VALUES ('#{ params[:first_name] }', '#{ params[:last_name] }', #{ params[:age] }, '#{ params[:gender] }', '#{ params[:occupation] }', '#{ params[:aliases] }', '#{ params[:image] }')"
  query_db(query)
  redirect to('/characters')
end

# get all characters
get '/characters' do
  query = 'SELECT * FROM characters'
  @characters = query_db(query)
  # @characters = result.first
  # binding.pry
  erb :characters
end

# get a character
get '/characters/:id' do
  query = "SELECT * FROM characters WHERE id=#{ params[:id] }"
  @character = query_db(query).first
  erb :character_show
end

# delete a record from the database
get '/characters/:id/delete' do
  query = "DELETE FROM characters WHERE id=#{ params[:id] }"
  query_db(query)
  redirect to('/characters')
end

# show edit form
get '/characters/:id/edit' do
  query = "SELECT * FROM characters WHERE id=#{ params[:id] }"
  result = query_db(query)
  @character = result.first
  erb :character_edit
end

post '/characters/:id' do
  query = "UPDATE characters SET first_name='#{ params[:first_name] }', last_name='#{ params[:last_name] }', age=#{ params[:age] }, gender='#{ params[:gender] }', occupation='#{ params[:occupation] }', aliases='#{ params[:aliases] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db(query)
  redirect to("/characters/#{ params[:id] }")
end

def query_db(sql)
  db = SQLite3::Database.new('characters.db')
  db.results_as_hash = true
  puts(sql)
  result = db.execute(sql)
end