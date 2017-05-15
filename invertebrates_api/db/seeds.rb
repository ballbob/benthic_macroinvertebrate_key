Question.destroy_all

hemiptera1 = Question.create({
  question: "End of abdomen has long, slender breathing tube",
  answer: "Nepidae (water scorpion",
  answerimg: "/img/nepidae.png",
  button_action: 1, 
  othertext: "Not as above"})

hemiptera2 = Question.create({
  question: "Long and slender body and legs, “walks” on water surface, commonly called water striders",
  answer: "Gerridae or Veliidae (water strider)",
  answerimg: "/img/gerridae.png",
  button_action: 2,
  othertext: "Oval-shaped body with a patterned or leathery textured back",
})

hemiptera3 = Question.create({
  question: "Usually large body (>3⁄4 inch), back is brown and leathery, raptor-like fore legs, swimming hairs on 3 sets of legs",
  answer: "Belostomatidae (giant water bug)",
  answerimg: "/img/belostomatidae.png",
  button_action: 3,
  othertext: "Smaller body (under 1⁄2 inch), back patterned and not leathery"
})

hemiptera4 = Question.create({
  question: "Front legs short with front foot forming a scoop",
  answer: "Corixidae (water boatman)",
  answerimg: "./img/corixidae.png",
  button_action: 4,
  othertext: "Not as above"
})

hemiptera5 = Question.create({
  question: "Front legs not as shortened as in Corixidae, family swims upside-down",
  answer: "Notonectidae (backswimmer)",
  button_action: "blank",
  answerimg: "/img/notonectidae.png",
  othertext: "End of key"
})

hemipteraArray = [hemiptera1,hemiptera2,hemiptera3,hemiptera4,hemiptera5]