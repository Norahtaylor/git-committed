class ApplicationController < ActionController::API
include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def current_user
        @current_user ||= UserAccount.find_by_id(session[:user_id])
    end 

private 

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end 

    def record_not_found 
        render json: {error: "Record not found"}, status: :not_found
    end 

end
