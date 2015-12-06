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
    movie_search_info = HTTParty.get movie_url
    movie_search_info = movie_search_info["Search"] || []
end

def search_movie movie_title
    movie_url = "http://omdbapi.com/?i=#{movie_title}"
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
    new_movie.ImdbRating = movie["imdbRating"]

    new_movie.save;
end

get "/" do
    movie_title = params[:movie_title]

    if movie_title && movie_title.strip! != ""

        if Movie.where("Title like ?", "%#{movie_title}%").length > 0
            @movie_search_results = Movie.where("Title like ?", "%#{movie_title}%")
        else
            @movie_search_results = search_all_movies movie_title

            if @movie_search_results != []

                @movie_search_results.each do |movie|
                    if !(Movie.where(imdbID: "#{movie["imdbID"]}").exists?)
                        save_movie search_movie movie["imdbID"]
                    end
                end
            else
                @search_term = movie_title
            end
        end
    end

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
        @movie = Movie.find_by_imdbID params[:id]
    end

    erb :home
end