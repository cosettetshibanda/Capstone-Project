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

henry = User.create(username: "Henry", password: "Switch", email: "Switch@gmail.com")
tim = User.create(username: "Tim", password: "Playstation", email: "Playstation@gmail.com")
tam = User.create(username: "Tam", password: "Tam", email: "Tam@yahoo.com")

mixed_kids = Topic.create(topic: "Mixed kids")
toys = Topic.create(topic: "Toys")
diapers = Topic.create(topic: "Diapers")

hair_questions = mixed_kids.questions.create(post: "What products do you use on their hair?", user: henry)
clothes_question = toys.questions.create(post: "Where do you buy clothes?", user: tim)
sleep_training_question = diapers.questions.create(post: "What age do you start sleep training?", user: tam)

hair_questions.answers.create(answer: "Try adding food slowly and give him time to adjust to the textures.", user: henry)
clothes_questions.answers.create(answer: "You can give her a bit of tough love so she learns how to self soothe.", user: tim)
sleep_training_questions.answers.create(answer: "I like advent bottles", user: tam)
