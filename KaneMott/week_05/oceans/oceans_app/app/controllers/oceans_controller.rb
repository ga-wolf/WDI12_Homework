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
	ocean= Ocean.create ocean_params
	redirect_to oceans_path
end

def edit
	@ocean= Ocean.find params[:id]
end

def destroy
	@ocean = Ocean.find params[:id]
	@ocean.destroy
	redirect_to oceans_path
end

def update
	ocean = Ocean.find params[:id]
	ocean.update ocean_params
	redirect_to "/oceans/#{ ocean.id }"
end

private
	def ocean_params
		params.require(:ocean).permit(:name, :location, :image, :deepest_point, :average_depth, :fact)
	end

end
