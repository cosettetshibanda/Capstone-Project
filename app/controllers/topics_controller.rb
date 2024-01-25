class TopicsController < ApplicationController

    def index
        render json: Topic.all
    end

    def create
        topic = Topic.create!(topic_params)
        render json: topic, status: :created
    end

    private

    def topic_params
        params.permit(:topic)
    end

    
end
