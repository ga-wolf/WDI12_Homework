class OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end

  def view
    @ocean = Ocean.find params[:id]
  end

  def create
  end

  def new
    ocean = Ocean.create oceans_params
    redirect_to oceans_path
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.update oceans_params
    redirect_to "/oceans/#{ocean.id}"
  end

  private
  def oceans_params
    params.require(:ocean).permit(:name, :covers, :avgDepth, :maxDepth, :percentage, :volume)
  end
end