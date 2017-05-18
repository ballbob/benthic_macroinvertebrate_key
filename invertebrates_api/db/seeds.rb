Question.destroy_all

#HEMIPTERA - the true bugs.
hemiptera1 = Question.create({
  question: "End of abdomen has long, slender breathing tube",
  answer: "Nepidae (water scorpion)",
  answerimg: "/img/nepidae.png",
  button_action: 1, 
  othertext: "Not as above",
  signalscore: 3,
  information: "Insects in this family are moderately tolerant to pollution. Found among plants or on the water surface of slow-moving waters."
})

hemiptera2 = Question.create({
  question: "Long and slender body and legs, “walks” on water surface, commonly called water striders",
  answer: "Gerridae or Veliidae (water strider)",
  answerimg: "/img/gerridae.png",
  button_action: 2,
  othertext: "Oval-shaped body with a patterned or leathery textured back",
  signalscore: 4,
  information: "Water striders vary somewhat in their tolerance to pollution. Gerridae are a little more sensitive with a SIGNAL-2 score of 4, while Veliidids have a score of 2."
})

hemiptera3 = Question.create({
  question: "Usually large body (>3⁄4 inch), back is brown and leathery, raptor-like fore legs, swimming hairs on 3 sets of legs",
  answer: "Belostomatidae (giant water bug)",
  answerimg: "/img/belostomatidae.png",
  button_action: 3,
  othertext: "Smaller body (under 1⁄2 inch), back patterned and not leathery",
  signalscore: 1,
  information: "Belostomatidae are very large insects, and often leave the water. They are extremely tolerant to pollution, with a SIGNAL score of 1."
})

hemiptera4 = Question.create({
  question: "Front legs short with front foot forming a scoop",
  answer: "Corixidae (water boatman)",
  answerimg: "./img/corixidae.png",
  button_action: 4,
  othertext: "Not as above",
  signalscore: 2,
  information: "Found among plants on the water surface or swimming freely in still to slow-moving waters. Quite tolerant to pollution."
})

hemiptera5 = Question.create({
  question: "Front legs not as shortened as in Corixidae, family swims upside-down",
  answer: "Notonectidae (backswimmer)",
  button_action: "blank",
  answerimg: "/img/notonectidae.png",
  othertext: "End of key",
  signalscore: 1,
  information: "Found in standing water or slow-moving ponds. Extremely tolerant to pollution."

})