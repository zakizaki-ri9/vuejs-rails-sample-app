class BookController < ApplicationController
  def index
    @books = Book.page(params[:page]).per(5)
  end
end
