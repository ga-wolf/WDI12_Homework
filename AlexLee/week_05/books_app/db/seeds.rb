Author.destroy_all
Author.create(:name => 'Matthew Reilly', :nationality => 'Australian', :dob => '1974/02/02', :website => 'http://www.matthewreilly.com/', :genre => 'Action, Thriller', :image => 'https://pbs.twimg.com/profile_images/293428125/reillymatthew01_1_.jpg')

Book.destroy_all
Book.create(:title => 'Scarecrow', :genre => 'Techno, Thriller', :publisher => 'Pan Macmillan', :publish_date => '2003/11/01', :num_pages => '462', :cover_image => 'https://upload.wikimedia.org/wikipedia/en/a/a8/Scarecrow_cover_art.jpg')