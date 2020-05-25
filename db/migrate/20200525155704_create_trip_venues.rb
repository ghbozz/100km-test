class CreateTripVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :trip_venues do |t|
      t.references :trip, null: false, foreign_key: true
      t.references :venue, null: false, foreign_key: true

      t.timestamps
    end
  end
end
