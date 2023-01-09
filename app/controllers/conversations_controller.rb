class ConversationsController < ApplicationController

      #initial fecth request on the frontend to render all existing conversatoins, and their messages via serializer 
    def index 
        conversations = Conversation.all 
        render json: conversations
    end 

    #serialized_data variable is necessary for using serializers with websockets 
    def create
        conversation = Conversation.new(conversation_params)
        if conversation.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                ConversationSerializer.new(conversation)
        ).serializable_hash
        #method that accepts argument as string (same as in  ConversationsChannel, and uses it for which channel to broadcast and which data)
            ActionCable.server.broadcast 'conversations_channel', serialized_data
            head :ok
         end
    end 

    private 

    def conversation_params
        params.permit(:id, :title, :match_id)
    end 

end
