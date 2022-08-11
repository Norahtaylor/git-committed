class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    private 

    def invalid_record (invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

    def record_not_found 
        render json: {error: "Record not found"}, status: :not_found
    end 
end
