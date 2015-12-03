require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  erb :home
end

get '/pry' do
  binding.pry
end


get '/games' do
  @games = query_db 'SELECT * FROM games'
  erb :games_index
end



get '/games/new' do
  erb :games_new
end




post '/games' do
  query = "INSERT INTO games (name, studio, cover, genre, score) VALUES ( '#{params[:name]}', '#{params[:studio]}', '#{params[:cover]}', '#{params[:genre]}', '#{params[:score]}' )"
  query_db(query)
  redirect to ('/games')
end




get '/games/:id' do
  games = query_db "SELECT * FROM games WHERE id=#{ params[:id] }"
  @game = games.first
  erb :game_show
end




get '/games/:id/delete' do
  @games = query_db 'SELECT * FROM games'
  erb :games_index
end




get '/games/:id/edit' do
  games = query_db "SELECT * FROM games WHERE id=#{ params[:id] }"
  @game = games.first
  erb :games_edit
end




post '/games/:id' do
  games = query_db "UPDATE games SET name='#{ params[:name] }', studio='#{ params[:studio] }', cover='#{ params[:cover] }', genre='#{ params[:genre] }', score='#{ params[:score] }' WHERE id=#{ params[:id] }"
  query_db games
  # redirect to ("/games/#{ params[:id] }")
  redirect to ('/games')
end

def query_db (sql)
  db = SQLite3::Database.new 'games.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  result
end



