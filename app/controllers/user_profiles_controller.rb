class UserProfilesController < ApplicationController

    def index 
        user = UserProfile.all
        render json: user, status: :ok 
    end 

    
end
