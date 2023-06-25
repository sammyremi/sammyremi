class ContactsController < ApplicationController
    def contact
    end

    def resume
        send_file(
          "#{Rails.root}/Resume.pdf",
          filename: "Resume.pdf",
          type: "application/pdf"
        )
    end
end
