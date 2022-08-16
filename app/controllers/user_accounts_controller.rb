class UserAccountsController < ApplicationController
     rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        user = UserAccount.all
        render json: user
    end 

    # def show 
    #     user = UserAccount.find_by(id: params[:id])
    #     render json: user, status: :ok
    # end 

    def destroy 
        user = UserAccount.find_by(id: params[:id])
        user.destroy 
        head :no_content
    end 

    def create 
        user = UserAccount.create!(user_params)
        user.valid? 
            session[:user_id] = user.id
            render json: user, status: :created
    end 

    def update
        user = UserAccount.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def show_current
        user = UserAccount.find_by(id: session[:user_id])
        render json: user
    end 


private 

    def not_found 
        render json: {error: "Record Not Found"}, status: :not_found
    end 

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :age, :birthday, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location)
    end 
end
