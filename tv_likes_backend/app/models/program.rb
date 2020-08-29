class Program < ApplicationRecord
  has_many :characters

  validates :title, :description, presence: true
  validates :title,  uniqueness: true

  accepts_nested_attributes_for :characters

  def formatted_desc
    desc_arr = self.description.gsub('p>', '').split('<')
    desc_arr.pop
    desc_arr.last
  end
end
