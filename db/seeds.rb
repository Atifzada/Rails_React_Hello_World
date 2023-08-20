# db/seeds.rb

greetings = [
  "Hello and welcome!",
  "Greetings, friend!",
  "A warm welcome to our community.",
  "Hello there, how can we assist you today?",
  "Welcome to a world of possibilities!",
  "We're thrilled to have you here!",
  "Hello, let's make great things together!",
  "Greetings from our team to you!",
  "Step in with a smile, you're among friends.",
  "Welcome aboard the adventure of a lifetime!"
]

greetings.each do |content|
  Message.create(content: content)
end
