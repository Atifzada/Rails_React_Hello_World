# db/seeds.rb

greetings = [
  "Welcome to the start of something amazing!",
  "Hey there, ready to dive into new horizons?",
  "Greetings and salutations!",
  "Hello, curious mind! Let's explore together.",
  "Step into our world with a warm hello!",
  "Hola! Your journey with us begins now.",
  "A friendly hello to kick off your day!",
  "Hello, fellow explorer of the unknown!",
  "Greetings, wayfarer of the digital realm!",
  "Welcome to our realm of innovation and ideas!"
]


greetings.each do |content|
  Message.create(content: content)
end
