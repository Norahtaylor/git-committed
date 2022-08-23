class UserAccountsController < ApplicationController
     rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index 
        user = UserAccount.all
        render json: user.to_json(include: [:requestors, :receivers])
    end 

    #all the attributes are setter and getter methods thats why you can call them on class
# for current user === requestor_id
#     UserAccount.joins(UserAccount.id === Match.receiver_id).Match.where(status: "null")

#     if UserAccount.receivers

    def show_interested
        user = UserAccount.find_by(id: session[:user_id])

         if (user.interested_in === "male")
            accounts = UserAccount.where(gender:"male", interested_in: "male") 
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
           

         elsif (user.interested_in === "female")
         users = UserAccount.where(gender:"female", interested_in: "female").or(UserAccount.where(gender: "non-binary", interested_in: "female")) 
         render json: users.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
         
         elsif (user.interested_in === "trans")
           users= UserAccount.where(gender: "trans") 
            render json: users.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

         elsif (user.interested_in === "non-binary")
         users = UserAccount.where(gender: "non-binary")
         render json: users.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

         elsif (user.interested_in === "bi" && user.gender === "male")
           users= UserAccount.where(gender: "male", interested_in: "male").or(UserAccount.where(gender: "female", interested_in: "male")) 
            render json: users.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
            
         elsif (user.interested_in === "bi" && user.gender === "female")
            match = UserAccount.where(gender: "female", interested_in: "female").or(UserAccount.where(gender: "male", interested_in: "female"))
            render json: match.filter{ |ele| ele unless user.receivers.ids.include? ele.id} 
            
         else (user.interested_in === "everyone")
            match = UserAccount.where(interested_in: "female") 
            render json: match.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
         
        end 
    end

    def show 
        user = UserAccount.find(params[:id])
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
