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

def replace_empty_poster(movie)
  if movie['Poster'] == 'N/A'
    movie['Poster'] = 'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg'
  end
end

def update_db(aMovie)

  # binding.pry
  # return false if omdb_result.nil?
  # store a copy on the db
  # binding.pry
  # omdb_result = omdb_result.first
  movie = Movie.new
  movie.title = aMovie['Title']
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

# if movie in db
#   show poster
# else
#   if movie in omdb
#     add to db
#   show poster or not avail

# returns relation or nil
def get_movie_in_db(title)
  result = Movie.find_by(['title LIKE ?', params[:movie_input] + '%'])
end

# returns hash or nil
def get_movie_in_omdb(title)
  # retrieve movies matching 'title' from omdb
  result = HTTParty.get("http://www.omdbapi.com/?s=#{ title }&type=movie")['Search']
  unless result.nil?
    result.first
  end
end

# search OMDB and show results
get '/search_movies' do
  @movie = get_movie_in_db(params[:movie_input])
  if @movie.nil?
    puts "+++++++++       MOVIE NOT IN DB!"
    movie_in_omdb = get_movie_in_omdb(params[:movie_input])
    if !movie_in_omdb.nil?
      @movie = update_db(movie_in_omdb)
      puts "++++++++++       MOVIE FOUND IN OMDB AND ADDED TO DB"
    else
      puts "+++++++++         MOVIE NOT FOUND IN OMDB"
    end
  else
    puts "+++++++        MOVIE FOUND IN DB"
  end
  # binding.pry

  if @movie.nil?
    @message = "No results found with search '#{ params[:movie_input] }'"
    erb :movies_search
  else
    erb :movies_show
  # elsif @movies.length == 1
  #   @movie = @movies.first
  #   replace_empty_poster(@movie)
  #   erb :movies_show
  # elsif @movies.many?
  #   @movies.each do |movie|
  #     replace_empty_poster(movie)
  #   end
  #   erb :movies_index
  end

end

# show a single movie poster based on imdb ID
get '/query_imdbID' do
  imdbID = params[:id]
  @movie = HTTParty.get("http://www.omdbapi.com/?i=#{ imdbID }")
  replace_empty_poster(@movie)
  erb :movies_show
end