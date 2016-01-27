require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get "/" do
    erb :home
end

get '/dogs' do
    @dogs = query_db "SELECT * FROM dogs ORDER BY breed ASC"
    erb :dogs_index
end

get "/dogs/new" do
    erb :dogs_new
end

post "/dogs" do
    query = "INSERT INTO dogs (breed, image) VALUES ('#{params[:breed]}', '#{params[:image]}')"
    query_db(query)

    redirect to("/dogs")
end

get "/dogs/:id" do

    dogs = query_db "SELECT * FROM dogs WHERE id=#{params[:id]}"
    @dog = dogs.first

    previous = query_db "SELECT * FROM dogs WHERE id < #{params[:id]} ORDER BY id DESC LIMIT 1"
    @previous_dog = 0
    @previous_dog = previous.first["id"] unless previous == []
        
    next_id = query_db "SELECT * FROM dogs WHERE id > #{params[:id]} ORDER BY id LIMIT 1"
    @next_dog = 0
    @next_dog = next_id.first["id"] unless next_id == []

    erb :dogs_show
end

get "/dogs/:id/delete" do
    query_db "DELETE FROM dogs WHERE id=#{params[:id]}"
    redirect to("/dogs")
end

get "/dogs/:id/edit" do
    dogs = query_db "SELECT * FROM dogs WHERE id=#{params[:id]}"
    @dog = dogs.first

    erb :dogs_edit
end

post "/dogs/:id" do
    query = "UPDATE dogs SET breed='#{params[:breed]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    query_db query

    redirect to("/dogs/#{params[:id]}")
end

def query_db sql
    db = SQLite3::Database.new "dogs.db"
    db.results_as_hash = true

    puts sql

    result = db.execute sql
    result
end