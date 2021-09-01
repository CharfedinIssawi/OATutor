var hints = [{id: "rate4a-h1", type: "hint", dependencies: [], title: "$$\\frac{Equation}{Substitute}$$", text: "The equation for calculuating the rate of change is $$\\frac{f x_1-f x_2}{x_1-x_2}$$. So to find the answer, we can start by plugging in $$x+h$$ for $$x_1$$ and x for $$x_2$$, and we get the expression $$\\frac{\\left(3\\right) {\\left(x+h\\right)}^2-\\left(2\\right)-\\left(\\left(3\\right) x^2-\\left(2\\right)\\right)}{x+h-x}$$.", variabilization: {}}, {id: "rate4a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(6\\right) x+\\left(3\\right) h$$"], dependencies: ["rate4a-h1"], title: "Simplify", text: "Simplify the expression $$\\frac{\\left(3\\right) {\\left(x+h\\right)}^2-\\left(2\\right)-\\left(\\left(3\\right) x^2-\\left(2\\right)\\right)}{x+h-x}$$. What do you get?", variabilization: {}}, ]; export {hints};