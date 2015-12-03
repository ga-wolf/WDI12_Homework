require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/characters' do
  query = 'SELECT * FROM characters'
  @characters = query_db(query)
  # @characters = result.first
  # binding.pry
  erb :characters
end

get '/characters/:id' do
  query = "SELECT * FROM characters WHERE id=#{ params[:id] }"
  @character = query_db(query).first
  erb :character_show
end

def query_db(sql)
  db = SQLite3::Database.new('characters.db')
  db.results_as_hash = true
  puts(sql)
  result = db.execute(sql)
end