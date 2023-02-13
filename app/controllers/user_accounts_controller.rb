class UserAccountsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :not_found
    # rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index 
        user = UserAccount.all
        render json: user.to_json(include: [:requestors, :receivers])
    end 

  
    # Logic for dating app Tinder-style swipe page 
    def show_interested
        user = UserAccount.find_by(id: session[:user_id])

        # Gay Men 
         if (user.interested_in === "male" && user.gender === "male")
            accounts = UserAccount.where(gender:"male", interested_in: "male").or(UserAccount.where(gender: "male", interested_in: "everyone"))
            # filter accounts user has already swiped on 
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Lesbians  
         elsif (user.interested_in === "female" && user.gender === "female")
            accounts = UserAccount.where(gender:"female", interested_in: "female").or(UserAccount.where(gender: "non-binary", interested_in: "female")).or(UserAccount.where(gender: "female", interested_in: "everyone"))
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
         
        # Straight Men 
         elsif (user.interested_in === "female" && user.gender === "male")
            accounts = UserAccount.where(gender:"female", interested_in: "male")
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Straight Women 
         elsif (user.interested_in === "male" && user.gender === "female")
            accounts = UserAccount.where(gender:"male", interested_in: "female")
             render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
        
        # non-binary interested in non-binary
         elsif (user.interested_in === "non-binary")
         accounts = UserAccount.where(gender: "non-binary")
         render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Bi Men  
         elsif (user.interested_in === "bi" && user.gender === "male")
           accounts = UserAccount.where(gender: "male", interested_in: "male").or(UserAccount.where(gender: "female", interested_in: "male")).or(UserAccount.where(gender: "male", interested_in: "everyone")).or(UserAccount.where(gender: "non-binary", interested_in: "everyone"))
            render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Bi Women     
         elsif (user.interested_in === "bi" && user.gender === "female")
            accounts = UserAccount.where(gender: "female", interested_in: "female").or(UserAccount.where(gender: "male", interested_in: "female")).or(UserAccount.where(gender: "female", interested_in: "everyone")).or(UserAccount.where(gender: "non-binary", interested_in: "everyone"))
            render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id} 

        # Men interested in everyone    
         elsif (user.interested_in === "everyone" && user.gender === "male")
            accounts = UserAccount.where(interested_in: "male").or(UserAccount.where(interested_in: "everyone"))
            render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}

        # Women interested in everyone    
         else (user.interested_in === "everyone" && user.gender === "female")
            accounts = UserAccount.where(interested_in: "female").or(UserAccount.where(interested_in: "everyone"))
            render json: accounts.filter{ |ele| ele unless user.receivers.ids.include? ele.id}
        end 
    end

    def show 
        user = UserAccount.find(params[:id])
        render json: user, status: :ok
    end 

    def destroy 
        user = UserAccount.find(params[:id])
        user.destroy 
        head :no_content
    end 

    #SIGNUP, this is getting the correct errors from ApplicationController
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


    # def not_found 
    #     render json: {error: "Record Not Found"}, status: :not_found
    # end 

    #  def invalid_record(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end 

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :age, :birthday, :gender, :interested_in, :bio, :education, :hometown, :profile_photo, :location, :language)
    end 
end
