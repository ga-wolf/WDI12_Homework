class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create book_params
    redirect_to book
  end

  def edit
    @book = Book.find params[:id]
  end

  def update
    book = Book.find params[:id]
    book.update book_params
    redirect_to book
  end

  def show
    @book = Book.find params[:id]
    
    @first_book = Book.first
    @last_book = Book.last
    @previous_book = Book.where("id < ?", params[:id]).last
    @next_book = Book.where("id > ?", params[:id]).first
  end

  def destroy
    book = Book.find params[:id]
    book.destroy
    redirect_to book
  end

  private
  def book_params
    params.require(:book).permit(:title, :cover_image, :genre, :publisher, :publish_date, :num_pages, :author_id)
  end
end
