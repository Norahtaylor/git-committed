class SessionsController < ApplicationController
       rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
       #why isnt the sessions controller getting errors from application and this page????

    # skip_before_action :authenticate_user, only: [:create]

def create
    user = UserAccount.find_by(username: params[:username])
    
     user&.authenticate(params[:password])
        session[:user_id] = user.id
      render json: user, status: :created
   
  end

  def destroy 
        user = UserAccount.find_by(id: session[:user_id])
        if user
            session.delete :user_id
            head :no_content
        end 
    end

    # def destroy 
    #     session.delete :user_id
    #     head :no_content
    # end

    private 
       def invalid_record (invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 
    
end 