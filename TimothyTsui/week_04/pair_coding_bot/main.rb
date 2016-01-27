require 'sinatra'
require 'sinatra/reloader'
require 'pry'

def makeURL(text, url)
  { :text => text, :url => url }
end

get '/*' do
  route = params['splat'].join;
  # p route
  case route
    when '' then
      @message = 'Do you have a test for that?'
      @links = [makeURL('Yes', '/pass'),
              makeURL('No', '/write_test')]
    when 'write_test' then
      @message = 'Write a test'
      @links = [makeURL('Done', '/pass')]
    when 'pass' then
      @message = 'Does the test pass?'
      @links = [makeURL('Yes', '/refactor'),
              makeURL('No', 'write_code')]
    when 'write_code' then
      @message = 'Write just enough code for the test to pass.'
      @links = [makeURL('Done', '/pass')]
    when 'refactor' then
      @message = 'Need to refactor?'
      @links = [makeURL('Yes', '/do_refactor'),
              makeURL('No', '/new_feature')]
    when 'new_feature' then
      @message = 'Select a new feature to implement.'
      @links = [makeURL('Continue', '/')]
    when 'do_refactor' then
      @message = 'Refactor the code.'
      @links = [makeURL('Done', '/pass')]
  end
  erb :dialog
end
