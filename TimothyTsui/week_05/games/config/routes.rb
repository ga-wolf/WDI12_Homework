Rails.application.routes.draw do
  get '/' => 'pages#home'

  get '/magic_eight_ball' => 'magic_eight_ball#question'
  get '/magic_eight_ball/answer' => 'magic_eight_ball#answer'

  get '/number_picker' => 'number_picker#form'
  get '/number_picker/play' => 'number_picker#play'

  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#play'
end
