require 'twitter'

$client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "2LLsiwDN3RcSYcimWpfvjscgw"
  config.consumer_secret     = "ceFEi9dRZreF0dBqlk2KVLuHMWCi6Wt43W2Sa8FQgvvSDgWO6T"
  config.access_token        = "4174706112-PrWk2vxK5AzUky0cM1qPakXxzlieM6VclzJnO6Q"
  config.access_token_secret = "2jxPEu8qQMhOwz13lRXjnoDTEaRn48nddmBlRmPAGEnfM"
end