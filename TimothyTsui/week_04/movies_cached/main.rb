require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'movies.db'
)

class Movie < ActiveRecord::Base
end

# update the movie poster with a 'no movie poster' picture
# movie - hash from omdb query
def replace_empty_poster(movie)
  if movie['Poster'] == 'N/A'
    movie['Poster'] = 'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg'
  end
end

# update db
# aMovie - hash from omdb query
# returns the movie relation object
def update_db(aMovie)
  movie = Movie.new
  movie.title = aMovie['Title']
  replace_empty_poster(aMovie)
  movie.image = aMovie['Poster']
  movie.save
  movie
end

after do
  ActiveRecord::Base.connection.close
end

# show the movie search form
get '/' do
  erb :movies_search
end

# title - movie title string
# returns ActiveRecord::relation (keys are symbols/strings) or nil
def get_movie_in_db(title)
  result = Movie.find_by(['title LIKE ?', '%' + params[:movie_input] + '%'])
end

# title - movie title string
# returns hash (keys are capitalised strings) or nil
def get_movie_in_omdb(title)
  # retrieve movies matching 'title' from omdb
  result = HTTParty.get("http://www.omdbapi.com/?s=#{ title }&type=movie")['Search']
  unless result.nil?
    result.first
  end
end

# get movie info from db, else fallback to omdb.
# shows movie info
get '/search_movies' do
  @movie = get_movie_in_db(params[:movie_input])
  if @movie.nil?
    puts "+++++++++ MOVIE NOT IN DB!"
    movie_in_omdb = get_movie_in_omdb(params[:movie_input])
    if !movie_in_omdb.nil?
      @movie = update_db(movie_in_omdb)
      puts "++++++++++ MOVIE FOUND IN OMDB AND ADDED TO DB"
    else
      puts "+++++++++ MOVIE NOT FOUND IN OMDB"
    end
  else
    puts "+++++++ MOVIE FOUND IN DB"
  end

  if @movie.nil?
    @message = "No results found with search '#{ params[:movie_input] }'"
    erb :movies_search
  else
    erb :movies_show
  end
end