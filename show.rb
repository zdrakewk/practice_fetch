class Show
  @@all_shows = []

  def initialize(title, location)
    # set attr value
    @title = title
    @location = location
    # save all objs into class arr
    @@all_shows << self
  end

  def self.formatShows() 
    puts 'info'
  end

  def self.all_shows
    @@all_shows
  end
  
end

show_obj = Show.new('Full House', 'San Fran')