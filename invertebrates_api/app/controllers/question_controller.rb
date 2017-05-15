class QuestionController < ApplicationController

  def index

    questions = [

      {
        question: "End of abdomen has long, slender breathing tube",
        answer: "Nepidae (water scorpion",
        answerimg: "/img/nepidae.png",
        othertext: "Not as above"
      },

      {
        question: "Long and slender body and legs, “walks” on water surface, commonly called water striders",
        answer: "Gerridae or Veliidae (water strider)",
        answerimg: "/img/gerridae.png",
        othertext: "Oval-shaped body with a patterned or leathery textured back",
      },

      {
        question: "Usually large body (>3⁄4 inch), back is brown and leathery, raptor-like fore legs, swimming hairs on 3 sets of legs",
        answer: "Belostomatidae (giant water bug)",
        answerimg: "/img/belostomatidae.png",
        othertext: "Smaller body (under 1⁄2 inch), back patterned and not leathery"
      },

      {
        question: "Front legs short with front foot forming a scoop",
        answer: "Corixidae (water boatman)",
        answerimg: "./img/corixidae.png",
        othertext: "Not as above"
      },

      {
        question: "Front legs not as shortened as above, family swims upside-down",
        answer: "Notonectidae (backswimmer)",
        answerimg: "/img/notonectidae.png",
        othertext: "End of key"
      }

    ]

  end

end