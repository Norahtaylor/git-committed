class MatchesController < ApplicationController

    def index 
        matches = Match.all
        render json: matches.to_json(include: [:requestor, :receiver])
    end 

    def show 
        match = Match.find_by(id: params[:id])
        render json: match, status: :ok
    end 

    def create 
        match = Match.create!(match_params)
        render json: match, status: :ok
    end 

    def update
        match= Match.find_by(id: params[:id])
        if match 
            match.update(match_params)
            render json: match, status: :ok
        else 
            render json: {error: "match not found"}, status: :not_found
        end
    end 

     def destroy
        match= Match.find_by(id: params[:id])
        if match 
            match.destroy
            head :no_content
        else
            render json: { error: "Match not found"}, status: :not_found
        end
    end

 
    def my_matches 
        matches = Match.where(receiver_id: session[:user_id], status: "accepted", accepted: true).or(Match.where(requestor_id: session[:user_id], status: "accepted", accepted: true))

        render json: matches.to_json(:include => [:requestor, :receiver]) 
 
    end

     def pending_approval 
        matches = Match.where(receiver_id: session[:user_id], status: "pending")
        if matches 
            render json: matches.to_json(:include => [:requestor, :receiver]) 
        else 
            render json: { error: "You have have no matches pending"}, status: :not_found
        end
    end

    def requested
        matches = Match.where(requestor_id: session[:user_id], status: "pending")
        if matches 
            render json: matches.to_json(:include => [:requestor, :receiver])
        else 
            render json: { error: "Matches not found"}, status: :not_found
        
        end
    end 

    private 

    def match_params
        params.permit(:receiver_id, :requestor_id, :accepted, :status)
    end 
end
