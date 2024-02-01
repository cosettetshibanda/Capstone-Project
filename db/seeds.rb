# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(username: "Henry", password: "Switch", email: "Switch@gmail.com")
# User.create(username: "Tim", password: "Playstation", email: "Playstaion@gmail.com")
# User.create(username: "Tam", password: "Tam", email: "Tam@yahoo.com")

# Topic.create(topic: "Mixed kids")
# Topic.create(topic: "Toys")
# Topic.create(topic: "Diapers")

# Question.create(post: "What products do you use on their hair?", user_id: 4, topic_id: 13)
# Question.create(post: "Where do you buy clothes?", user_id: 5, topic_id: 3)
# Question.create(post: "What age do you start sleep training?", user_id: 2, topic_id: 6)

# Answer.create(answer: "Try adding food slowly and give him time to adjust to the textures.", user_id: 4, question_id: 9)
# Answer.create(answer: "You can give her a bit of tough love so she learns how to self soothe.", user_id: 5, question_id: 15)
# Answer.create(answer: "I like advent bottles", user_id: 2, question_id: 12)

user1 = User.create(username: "Henry", password: "Switch", email: "Switch@gmail.com")
user2 = User.create(username: "Tim", password: "Playstation", email: "Playstation@gmail.com")
user3 = User.create(username: "Tam", password: "Tam", email: "Tam@yahoo.com")

topic1 = Topic.create(topic: "Mixed kids")
topic2 = Topic.create(topic: "Toys")
topic3 = Topic.create(topic: "Diapers")

# Creating questions and answers after saving users and topics
question1 = Question.create(post: "What products do you use on their hair?", user: user1, topic: topic1)
question1.answers.create(answer: "It's best to use a leave in conditioner and an oil.", user: user1)

question2 = Question.create(post: "Where do you buy toys?", user: user2, topic: topic2)
question2.answers.create(answer: "We really like going to Target.", user: user2)

question3 = Question.create(post: "What brand of diapers do you like?", user: user3, topic: topic3)
question3.answers.create(answer: "Pampers are our favorite", user: user3)