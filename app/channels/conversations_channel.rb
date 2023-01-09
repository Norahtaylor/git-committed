class ConversationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "conversations_channel"
    #receives a string as an arguement 
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
