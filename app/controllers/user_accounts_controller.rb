class UserAccountsController < ApplicationController
     rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        user = UserAccount.all
        render json: user
    end 

    #all the attributes are setter and getter methods thats why you can call them on class

    def show_interested
        user = UserAccount.find_by(id: session[:user_id])
        # male = UserAccount.where(gender: "male")
        # female = UserAccount.where(gender:"female")

         if (user.interested_in === "male")
          render json: UserAccount.where(gender:"male", interested_in: "male")

         elsif( user.interested_in === "female")
         render json: UserAccount.where(gender:"female", interested_in: "female")

         elsif (user.interested_in === "trans")
         render json: UserAccount.where(gender: "trans")

         elsif (user.interested_in === "non-binary")
         render json: UserAccount.where(gender: "non-binary", interested_in: "non-binary")

         elsif (user.interested_in === "bi" && user.gender === "male")
            render json: UserAccount.where(gender: "male", interested_in: "male").or(UserAccount.where(gender: "female", interested_in: "male"))
            
         elsif (user.interested_in === "bi" && user.gender === "female")
            render json: UserAccount.where(gender: "female", interested_in: "female").or(UserAccount.where(gender: "male", interested_in: "female"))

         else (user.interested_in === "everyone")
         render json: UserAccount.all 
        
     end 
end


    def show 
        user = UserAccount.find_by(id: params[:id])
        render json: user, status: :ok
    end 

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
        params.permit(:first_name, :last_name, :username, :password, :age, :birthday, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location, :language)
    end 
end
