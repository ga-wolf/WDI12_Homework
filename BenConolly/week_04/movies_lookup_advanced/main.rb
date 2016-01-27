require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'movies.db'
  )

class Movie < ActiveRecord::Base
end


after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @movies = Movie.all
  erb :home
end

get '/pry' do
  binding.pry
end


get '/movies' do
  @movies = Movie.all
  erb :movie_index
end

get '/movie/:id' do
  @movie = Movie.find params[:id]
  erb :movie_view
end


get '/findfilm' do

  movieposs = Movie.find_by title: params[:title]
  unless @movie
    @movie_title = params[:title]
    redirect to('/') if @movie_title == ''
    movie_url = "http://www.omdbapi.com/?t=#{ @movie_title }";
    movie_info = HTTParty.get movie_url;
    redirect to('/') unless movie_info["Response"] == "True"

  # Change from here
    newmovie = Movie.new
    newmovie.title = movie_info['Title']
    newmovie.year = movie_info['Year'].to_i
    newmovie.runtime = movie_info['Runtime']
    newmovie.genre = movie_info['Genre']
    newmovie.director = movie_info['Director']
    newmovie.writer = movie_info['Writer']
    newmovie.awards = movie_info['Awards']
    newmovie.metascore = movie_info['Metascore']
    newmovie.poster = movie_info['Poster']
    newmovie.save
    @movie = Movie.find_by title: params[:title]
  else 
    @movie = movieposs
  end

  erb :movie_view
end


#params[:symbol].upcase



# movie_title = params[:title]
# movie_info = HTTParty.get 'http://www.omdbapi.com/?t=#{ movie_title }';
# movie_info["Poster"]
# movie_info (anything else you want to include)



# movie_url = 'http://www.omdbapi.com/?t=#{ movie_title }';


# solve for garbage strings for nonexistent movies