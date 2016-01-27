require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
  erb:home
end

#Index page for all dinosaurs --READ
get '/dinosaurs' do
  @dinosaurs = query_db 'SELECT * FROM dinosaurs'
  erb :dinosaurs_index
end

#Form to add a new dinosaur
get '/dinosaurs/new' do
  erb :dinosaurs_new
end

# INSERT a new dinosaur into the database --CREATE
post '/dinosaurs' do
  query = "INSERT INTO dinosaurs (name, eon, era, period, extent, duration,  image) VALUES ('#{ params[:name] }', '#{ params[:eon] }', '#{ params[:era] }', '#{ params[:period] }', '#{ params[:extent] }', '#{ params[:duration] }', '#{ params[:image] }')"

  query_db(query)

  redirect to('/dinosaurs')
end

#Show page for a dinosaur --READ
get '/dinosaurs/:id' do
  dinosaurs = query_db "SELECT * FROM dinosaurs WHERE id=#{ params[:id] }"

  @dinosaurs = dinosaurs.first #Strip off the array.

  erb :dinosaurs_show
end

#DELETE a dinosaur from the database --DELETE
get '/dinosaurs/:id/delete' do
  query_db "DELETE FROM dinosaurs WHERE id=#{ params[:id] }"
  redirect to('/dinosaurs')
end

#Form to edit an existing dinosaur
get '/dinosaurs/:id/edit' do
  dinosaurs = query_db "SELECT * FROM dinosaurs WHERE id=#{ params[:id] }"
  @dinosaurs = dinosaurs.first #STrip off the array.

  erb :dinosaurs_edit
end

#Amend a butterfly in the datatbase --UPDATE
post '/dinosaurs/:id' do
  query = "UPDATE dinosaurs SET name='#{ params[:name] }', eon='#{ params[:eon] }', era='#{ params[:era] }', period='#{ params[:period] }', extent='#{ params[:extent] }', duration='#{ params[:duration] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/dinosaurs/#{ params[:id] }")
end

def query_db(sql)
  db = SQLite3::Database.new 'dinosaurs.db'
  db.results_as_hash = true

  puts sql 
  # Shows in the terminal what sql is run

  result = db.execute(sql)
  result
end