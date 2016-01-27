class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author
  end

  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.find params[:id]
    author.update author_params
    redirect_to author
  end

  def show
    @author = Author.find params[:id]
    
    @first_author = Author.first
    @last_author = Author.last
    @previous_author = Author.where("id < ?", params[:id]).last
    @next_author = Author.where("id > ?", params[:id]).first
  end

  def destroy
    author = Author.find params[:id]
    author.destroy
    redirect_to author
  end

  private
  def author_params
    params.require(:author).permit(:name, :nationality, :dob, :website, :genre, :image)
  end
end