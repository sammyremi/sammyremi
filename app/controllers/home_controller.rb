require "date"
class HomeController < ApplicationController
  def index
    today_date = Time.now
    today_dates = today_date.to_s
    @today_date = today_dates.split(" ")[0]
    @today = @today_date.split("-")[2].to_i

    @wday = today_date.wday.to_s
  
  end

  def show
  end
end
