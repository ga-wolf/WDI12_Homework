namespace :twitter do
  desc "Empties out the user and tweet tables from the DB"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
  end

# This task has an argument called user_count, and what is the task? And its inside the args.
  desc "Creates fake users and fake tweets"
  task :posts, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
  end

  desc "Searches twitter for limit number of tweets containing query"
  task :search, [:query, :limit] => :environment do |t, args|
    #Don't bother creating users. The code you need to write goes here. Just fetch the tweets and shove them in the DB.
    # Tweet.create :post => result[i].text or something like this
    #Proabably use a twitter gem for this.
    $client.search(args[:query]).take( args[:limit].to_i ).each do |tweet|
      Tweet.create :post => tweet.text
    end
  end


end

