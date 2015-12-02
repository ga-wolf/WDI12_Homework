require 'sinatra'
require 'sinatra/reloader'
require 'pry'

def makeURL(text, url)
  { :text => text, :url => url }
end

get '/' do
  @message = 'Do you have a test for that?'
  # binding.pry
  @links = [makeURL('Yes', '/pass'),
          makeURL('No', '/write_test')]
  erb :dialog
end

get '/write_test' do
  @message = 'Write a test'
  @links = [makeURL('Done', '/pass')]
  erb :dialog
end

get '/pass' do
  @message = 'Does the test pass?'
  @links = [makeURL('Yes', '/refactor'),
          makeURL('No', 'write_code')]
  erb :dialog
end

get '/write_code' do
  @message = 'Write just enough code for the test to pass.'
  @links = [makeURL('Done', '/pass')]
  erb :dialog
end

get '/refactor' do
  @message = 'Need to refactor?'
  @links = [makeURL('Yes', '/do_refactor'),
          makeURL('No', '/new_feature')]
  erb :dialog
end

get '/new_feature' do
  @message = 'Select a new feature to implement.'
  @links = [makeURL('Continue', '/')]
  erb :dialog
end

get '/do_refactor' do
  @message = 'Refactor the code.'
  @links = [makeURL('Done', '/pass')]
  erb :dialog
end
