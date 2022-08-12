class UserProfilesController < ApplicationController

    def index 
        user = UserProfile.all
        render json: user, status: :ok 
    end 

    def update 
        user = UserProfile.find_by(id: params[:id])
        user.update(user_params)
        render json: user, status: :ok 
    end 

    private

    def user_params 
        params.permit(:name, :age, :birthdat, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location)
    end
    
end
