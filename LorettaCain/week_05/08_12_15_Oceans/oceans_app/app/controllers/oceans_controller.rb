class OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new
  end

  def create
    ocean = Ocean.create ocean_params
    redirect_to ("/")
  end 

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to ("/")
  end

  def edit
    @ocean = Ocean.find params[:id]
  end 

  def update 
    ocean = Ocean.find params[:id]
    ocean.update ocean_params 
    redirect_to "/#{ ocean.id }"
  end

  private
  #Strong parameters
  def ocean_params
    params.require(:ocean).permit(:name, :image, :location, :bordering_countries, :facts)
  end

end
