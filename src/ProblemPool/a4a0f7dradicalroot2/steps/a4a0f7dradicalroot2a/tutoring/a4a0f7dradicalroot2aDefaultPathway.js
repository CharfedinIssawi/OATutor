var hints = [{id: "a4a0f7dradicalroot2a-h1", type: "hint", dependencies: [], title: "Setup", text: "Simplifying the equation to $$x=$$?", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h2", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h1"], title: "Order of Operation", text: "Solving the square root", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h3", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h2"], title: "Calculation", text: "Square root can be removed by squaring both sides", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x-1"], dependencies: ["a4a0f7dradicalroot2a-h3"], title: "Squaring", text: "What is the square of $$\\sqrt{2x-1}$$?", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h5", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h4"], title: "Operation", text: "Square root can be canceled by squaring", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x-1"], dependencies: ["a4a0f7dradicalroot2a-h5"], title: "Operation", text: "What is $$\\sqrt{2x-1}$$ without square root?", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h7", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h6"], title: "Principle of Operation", text: "7 on the right side also has to be squared", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["49"], dependencies: ["a4a0f7dradicalroot2a-h7"], title: "Squaring", text: "What is $$7^2$$?", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h9", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h8"], title: "Organizing", text: "The equation becomes $$2x-1=49$$", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h10", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h9"], title: "Operation", text: "Add 1 on both side", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x"], dependencies: ["a4a0f7dradicalroot2a-h10"], title: "Addition", text: "What is $$2x-1+1$$?", subHints: [{id: "a4a0f7dradicalroot2a-h11-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["50"], dependencies: ["a4a0f7dradicalroot2a-h11"], title: "Addition", text: "What is $$49+1$$?", variabilization: {}}], variabilization: {}}, {id: "a4a0f7dradicalroot2a-h13", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h11-h12"], title: "Organizing", text: "The equation becomes $$2x=50$$", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h14", type: "hint", dependencies: ["a4a0f7dradicalroot2a-h13"], title: "Dividing", text: "Diving 2x by 2 to produce a single x", variabilization: {}}, {id: "a4a0f7dradicalroot2a-h15", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["a4a0f7dradicalroot2a-h14"], title: "Dividing", text: "What is 50 divided by 2?", variabilization: {}}, ]; export {hints};