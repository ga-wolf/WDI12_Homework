json.array!(@people) do |person|
  json.extract! person, :id, :name, :phone, :email, :address, :city
  json.url person_url(person, format: :json)
end
