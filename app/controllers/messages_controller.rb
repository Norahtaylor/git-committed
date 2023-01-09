class MessagesController < ApplicationController

    def index 
        messages = Message.all 
        render json: messages 
    end 

    def show 
        messages = Message.where(receiver_id: session[:user_id]).or(Match.where(requestor_id: session[:user_id]))

        render :json => messages.to_json(:include => [:requestor, :receiver])
    end 

     #broadcast_to takes an object from the models as it’s first argument. This object corresponds to the one specified in the MessagesChannel
    def create
        message = Message.new(message_params)
            [:conversation_id])
        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                MessageSerializer.new(message)
            ).serializable_hash
            MessagesChannel.broadcast_to conversation, serialized_data
        head :ok
        end
    end

    private 

    def message_params
        params.permit(:content, :conversation_id)
    end 
end
