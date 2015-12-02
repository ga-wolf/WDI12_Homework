require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home #Loads and serves up views/home.erb
end

get '/movie' do
    @movie_title = params[:title]

    @movie_url = "http://omdbapi.com/?t=#{ @movie_title }"

    @movie_info = HTTParty.get @movie_url

    @poster = @movie_info['Poster']

    

    @movie_search_url = "http://omdbapi.com/?s=#{ @movie_title }"

    @movie_search_info = HTTParty.get @movie_search_url;

    @search_info = @movie_search_info[ 'Title' ]


  erb :movie
end

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
