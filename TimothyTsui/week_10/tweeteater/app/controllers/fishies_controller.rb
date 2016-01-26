class FishiesController < ApplicationController
  def tweets
    @tweets = Tweet.all

    respond_to do |format|
      format.html {}
      format.json { render json: @tweets }
    end
  end

  def pages
    results_per_page = 3.0 # make this float so when we compute pages, we get right value
    page = params[:id].to_i - 1
    @tweets = Tweet.offset( results_per_page * page ).take( results_per_page ); # get 3 records offset by page id
    @pages = (Tweet.count / results_per_page).ceil
    @page = params[:id].to_i
  end
end
