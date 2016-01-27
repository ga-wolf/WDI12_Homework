require "sinatra"
require "sinatra/reloader"
require "httparty"
require "sqlite3"
require "active_record"
require "pry"

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "movies.db"
)

class Movie < ActiveRecord::Base
end

after do
    ActiveRecord::Base.connection.close
end

def search_all_movies movie_title
    movie_url = "http://omdbapi.com/?s=#{movie_title}"
    movie_search_info = (HTTParty.get movie_url)["Search"] || []
end

def search_movie movie_id
    movie_url = "http://omdbapi.com/?i=#{movie_id}&plot=full"
    HTTParty.get movie_url
end

def save_movie movie
    new_movie = Movie.new
    new_movie.imdbID = movie["imdbID"]
    new_movie.Title = movie["Title"]
    new_movie.Rated = movie["Rated"]
    new_movie.Released = movie["Released"]
    new_movie.Runtime = movie["Runtime"]
    new_movie.Genre = movie["Genre"]
    new_movie.Director = movie["Director"]
    new_movie.Writer = movie["Writer"]
    new_movie.Actors = movie["Actors"]
    new_movie.Plot = movie["Plot"]
    new_movie.Poster = movie["Poster"]
    new_movie.Metascore = movie["Metascore"]
    new_movie.imdbRating = movie["imdbRating"]

    new_movie.save;
end

get "/" do
    movie_title = params[:movie_title]

    if movie_title && movie_title.strip! != ""
        @movie_search_results = (search_all_movies movie_title).sort_by! { |movie| movie["Title"] }
    end

    @search_term = movie_title unless @movie_search_results != []

    if @movie_search_results && @movie_search_results.length == 1
        redirect to("/#{@movie_search_results.first["imdbID"]}")
    end

    erb :home
end

get "/:id" do
    if !(Movie.where(imdbID: "#{params[:id]}").exists?)
        @movie = search_movie params[:id]
        save_movie @movie
    else
        @movie = Movie.find_by_imdbID params[:id] || {"Response" => "False"}
    end

    erb :home
end



# The following code saves all movie search results to database
# Came from the get "/" do block

# if Movie.where('Title LIKE ?', "%#{movie_title}%").length > 0
#             @movie_search_results = Movie.where('Title LIKE ?', "%#{movie_title}%")
        
        
#         else
#             @movie_search_results = search_all_movies movie_title

#             if @movie_search_results != []

#                 @movie_search_results.each do |movie|
#                     if !(Movie.where(imdbID: "#{movie["imdbID"]}").exists?)
#                         save_movie search_movie movie["imdbID"]
#                     end
#                 end
#             end
#         end