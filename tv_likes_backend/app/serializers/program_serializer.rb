class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :title, :formatted_desc
  has_many :characters
end
