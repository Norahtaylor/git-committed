class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:conversation])
    stream_for "conversation"
    #expects an object from the model 
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
