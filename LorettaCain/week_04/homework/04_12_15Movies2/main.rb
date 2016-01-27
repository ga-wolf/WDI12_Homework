require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'sqlite3'
require 'active_record'
require 'pry'


#Shows you the SQL you didnt have to type, yay, but not required.
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

get '/pry' do
  binding.pry
end


get '/' do
  erb :home #Loads and serves up views/home.erb
end

#Index page for all movies --READ
get '/movie' do


  title = params["title"].upcase

  @movie = Movie.where :title => title.upcase

  if @movie.length != 0

    @movie = @movie[0]


  else

    @movie = Movie.new

    @movie.url = "http://omdbapi.com/?t=#{ title }"

    info = HTTParty.get @movie.url

    @movie.title = info['Title'].upcase

    @movie.url = info['imdbID']

    @movie.image = info['Poster']

    @movie.save

  end

  erb :movie
end

  # Search through our database and see if anything exist with that name. .find_by and .where

  # if # there were movies
    # Store the movie from our database as @movie
    # Show it on movie.erb
  # else
    # Make a request to OMDB and save the results 
    # Create a new instance of Movie - movie = Movie.new
    # Assign all the properties - movie.title = ...
    # Save it in the database - movie.save
    # Then show it on movie.erb
  # end


  # If there is something with that name
    # Retrieve it from our database and show it on the page

  # If there isn't 
    # Make a request to OMDB using HTTParty
    # Save a new movie into our database with that information
    # Show the page



    # @movie = Movie.new

    # @movie.title = params[:title]

    # @movie.url = "http://omdbapi.com/?t=#{ @movie.title }"

    # @movie.info = HTTParty.get @movie.url

    # @poster = @movie.info['Poster']

    

    # @movie_search_url = "http://omdbapi.com/?s=#{ @movie_title }"

    # @movie_search_info = HTTParty.get @movie_search_url;

    # @search_title_info = @movie_search_info['Search'].collect {|movies| movies['Title']}

    # @search_imbdID_info = @movie_search_info['Search'].collect {|movies| movies['imdbID']}

    #   @object =[]

    #   i = 0
    #   until i == @search_imbdID_info.length
    #     @object.push(i)
    #     i += 1
    #   end

    # @clickable_links = "http://www.imdb.com/title/#{ @search_imbdID_info }/"


#   erb :movie
# end



# i = 0
# until i == 10 do 
#   puts "i is now #{ i }"
#   i += 1
# end
# puts "Thank you for using this code"


 # @stock = params[:symbol]
 #    @stock_data = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock);
 #    @result = @stock_data[@stock].lastTrade

# [1] pry(main)> require 'httparty'
# => true

# [2] pry(main)> movie_title = 'satantango'
# => "satantango"
#USE THIS  movie_title = params['title’]

# [3] pry(main)> movie_url = "http://omdbapi.com/?t=#{ movie_title }"
# => "http://omdbapi.com/?t=satantango"

# [4] pry(main)> movie_info = HTTParty.get movie_url

# [5] pry(main)> @poster = movie_info['Poster']
# => "http://ia.media-imdb.com/images/M/MV5BMTIyMTY0OTMwMV5BMl5BanBnXkFtZTcwOTY2NDU4MQ@@._V1._CR18,0,335,451_SY132_CR4,0,89,132_AL_.jpg_V1_SX300.jpg”
