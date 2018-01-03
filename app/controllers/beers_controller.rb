class BeersController < ApplicationController

    #index page will serve all beers to screen
    def index

        #fetch all beers from db
        @beers = Beer.all

        #once query executed, grab response and render it in JSON
        render :json {@beers}
    end


    def create

        # create new instance of beer in order to check for a save to db
        @beer = Beer.new(beer_params)

        #if the beer is saved render JSON message
        if @beer.save?
            render :json {message: "scccesfully created" beer: @beer}
        else
            render :json {message:"did not create beer"}
        end
    end

    def show

        #find user with id specidfied in url parameter and render it in JSON
        @beer = Beer.find(params[:id])
        render :json {@beer}
    end

    # def update
    #     @beer = Beer.update(beer_params)
    #     render :json {message: "updated!!!", beer: @beer}
    # end

    # def destroy
    #     Beer.destroy(params[:id])
    #     render :json {message: "deleted!!!"}
    # end



#**************** helper methods ****************
    private

    def beer_params
        params.require(:beer).permit(:name, :brewery, :style, :image_url, :abv)
    end

end
