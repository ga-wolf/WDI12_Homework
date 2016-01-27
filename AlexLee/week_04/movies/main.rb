require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
    movie_title = params[:movie_title]

    movie_url = "http://omdbapi.com/?s=#{movie_title}"
    movie_info = HTTParty.get movie_url
    @movies = []

    if movie_info["Response"] != "False"
        @movies = movie_info["Search"]
    end

    movie = params[:movie]

    url = "http://omdbapi.com/?t=#{movie}"
    info = HTTParty.get url

    @movie = {"Poster" => "http://www.animaltalent.com/wp-content/uploads/2015/05/default-200x300.jpg"}
    @movie = info unless info["Poster"] == "N/A"

    erb :home
end