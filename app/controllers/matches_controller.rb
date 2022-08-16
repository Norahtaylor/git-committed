class MatchesController < ApplicationController

    def index 
        matches = Match.all
        render json: matches, status: :ok
    end 

    def create 
        match = Match.create!(match_params)
        render json: match, status: :ok
    end 
 
    def my_matches 
        matches = Match.where(receiver_id: session[:user_id], accepted: true).or(Match.where(requestor_id: session[:user_id], accepted: true))

       render json: matches
      
    end

    private 

    def match_params
        params.permit(:receiver_id, :requestor_id, :accepted, :status, :user_account_id)
    end 
end
