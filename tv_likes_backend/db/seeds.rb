# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Program, title, description, likes ~> default of 0
# Character, name, program_id (belongs_to relationship)

show_objs = [
  {title: 'Mickey Mouse Club House', description: 'A fun filled interact show for youger kids to learn and play at the same time'},
  {title: 'Vamperina', description: 'A fun filled interact show for youger kids to learn how to play & work with people who are different from themselves'},
  {title: 'Paw Patrol', description: 'A fun filled interact show for youger kids to learn creative ways of solving a problem & work with a team'},
  {title: 'Puppy Dog Pals', description: 'A fun filled interact show for youger kids to engage students imaginiation and creative minds'},
  {title: 'Handy Helpers', description: 'A fun filled interact show for youger kids encouraging young girls to work together to help their community'}
]


show_objs.each {|hash| Program.create(hash)}

# show_objs = [
#   ['Mickey Mouse Club House', 'A fun filled interact show for youger kids to learn and play at the same time']...
# ]

# show_objs.each {|arr| Program.create({title: arr[0], description: arr[1]})}
