class Venue < ApplicationRecord
  # Geocoding
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  # Attractions
  has_many :trip_venues, dependent: :destroy

  #ActiveStorage
  has_one_attached :photo

end
