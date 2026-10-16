window.QUESTIONS = [
{
"n": 1,
"question": "Who proposed the \"reticular theory\", i.e. that the nervous system is a single continuous network?",
"options": [
{
"key": "A",
"text": "Joseph von Gerlach"
},
{
"key": "B",
"text": "Santiago Ramón y Cajal"
},
{
"key": "C",
"text": "Camillo Golgi"
},
{
"key": "D",
"text": "Heinrich Wilhelm von Waldeyer-Hartz"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 2,
"question": "A McCulloch–Pitts neuron has four binary inputs and fires when x1 + x2 + x3 + x4 ≥ 3. How many of the 16 possible input patterns make it fire?",
"options": [
{
"key": "A",
"text": "5"
},
{
"key": "B",
"text": "4"
},
{
"key": "C",
"text": "6"
},
{
"key": "D",
"text": "8"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 3,
"question": "The term \"neuron\" (around 1891) was coined by:",
"options": [
{
"key": "A",
"text": "Waldeyer-Hartz"
},
{
"key": "B",
"text": "Camillo Golgi"
},
{
"key": "C",
"text": "Ramón y Cajal"
},
{
"key": "D",
"text": "Joseph von Gerlach"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 4,
"question": "The McCulloch–Pitts (MP) neuron takes binary inputs, some of which may be excitatory (contributing to firing) and some inhibitory (able to block firing). The output y is forced to 0 if:",
"options": [
{
"key": "A",
"text": "the weighted sum is negative"
},
{
"key": "B",
"text": "all inputs are 1"
},
{
"key": "C",
"text": "the sum equals the threshold"
},
{
"key": "D",
"text": "any inhibitory input is active (equal to 1)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 5,
"question": "An MP neuron has inputs x1, x2, x3 ∈ {0,1} and computes g = x1 + x2 + x3 with threshold θ. To implement the AND function, θ should be:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "2"
},
{
"key": "D",
"text": "3"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 6,
"question": "A 2-input MP neuron implementing OR uses the line x1 + x2 = θ. The value of θ is:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "2"
},
{
"key": "D",
"text": "3"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 7,
"question": "Which Boolean function of 2 inputs cannot be represented by a single MP neuron?",
"options": [
{
"key": "A",
"text": "XOR"
},
{
"key": "B",
"text": "AND"
},
{
"key": "C",
"text": "OR"
},
{
"key": "D",
"text": "NAND"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 8,
"question": "A single perceptron separates the input space using:",
"options": [
{
"key": "A",
"text": "a nonlinear curve"
},
{
"key": "B",
"text": "a line (hyperplane)"
},
{
"key": "C",
"text": "a circle"
},
{
"key": "D",
"text": "a polynomial"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 9,
"question": "In the perceptron model, the decision boundary can be written as wᵀx + w0 = 0, where w is the weight vector, x the input, and w0 the bias term. If instead the neuron is described by the threshold rule wᵀx ≥ θ (fires when the weighted sum reaches the threshold θ), then the bias term w0 equals:",
"options": [
{
"key": "A",
"text": "+θ"
},
{
"key": "B",
"text": "0"
},
{
"key": "C",
"text": "1"
},
{
"key": "D",
"text": "−θ"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 10,
"question": "In the standard perceptron learning algorithm (PLA) for binary classification, let the positive class be P and the negative class be N, and let w be the weight vector and x be the input feature vector. The algorithm updates w := w + x when:",
"options": [
{
"key": "A",
"text": "x ∈ P and w·x < 0 (misclassified positive example)"
},
{
"key": "B",
"text": "x ∈ P and w·x ≥ 0 (correctly classified positive example)"
},
{
"key": "C",
"text": "x ∈ N and w·x < 0 (correctly classified negative example)"
},
{
"key": "D",
"text": "x ∈ N and w·x ≥ 0 (misclassified negative example)"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 11,
"question": "In the perceptron convergence proof (Novikoff's theorem), assume every training pattern p is normalized so that ||p|| = 1, let w_t be the weight vector before the t-th update, and let the margin (minimum distance from the origin to the decision boundary) be denoted by δ. If w_{t+1} = w_t + y_t p is the weight vector after a single update on a misclassified pattern p, then ||w_{t+1}||² increases by at most:",
"options": [
{
"key": "A",
"text": "δ"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "k"
},
{
"key": "D",
"text": "||w0||²"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 12,
"question": "In the perceptron convergence proof (Novikoff's theorem), let β be the angle between the current weight vector w_t and the ideal (target) weight vector w*, and let k be the number of update steps taken so far. The proof bounds cos β = (w_t·w*)/(||w_t|| ||w*||) from below by a quantity that grows:",
"options": [
{
"key": "A",
"text": "linearly in k"
},
{
"key": "B",
"text": "proportional to k²"
},
{
"key": "C",
"text": "exponentially in k"
},
{
"key": "D",
"text": "proportional to √k"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 13,
"question": "How many Boolean functions of n inputs exist in total?",
"options": [
{
"key": "A",
"text": "2n"
},
{
"key": "B",
"text": "2^n"
},
{
"key": "C",
"text": "n²"
},
{
"key": "D",
"text": "2^(2^n)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 14,
"question": "How many Boolean functions of 2 inputs are linearly separable?",
"options": [
{
"key": "A",
"text": "8"
},
{
"key": "B",
"text": "12"
},
{
"key": "C",
"text": "14"
},
{
"key": "D",
"text": "16"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 15,
"question": "Consider a network that takes n binary inputs, has a single hidden layer containing 2^n perceptrons, and a single output perceptron. Such a network can represent:",
"options": [
{
"key": "A",
"text": "any Boolean function of n inputs"
},
{
"key": "B",
"text": "only linearly separable functions"
},
{
"key": "C",
"text": "only continuous functions"
},
{
"key": "D",
"text": "only convex functions"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 16,
"question": "A standard 2-input MLP construction for representing any Boolean function uses a hidden perceptron for each minterm (each specific input pattern). Each such hidden perceptron must fire only when both of its inputs are 1 (i.e. it implements the AND of the two inputs). With unit weights and threshold θ, the bias term b is set so that the neuron fires exactly when x1 + x2 ≥ θ. The bias used for each hidden perceptron is:",
"options": [
{
"key": "A",
"text": "−1"
},
{
"key": "B",
"text": "−2"
},
{
"key": "C",
"text": "−3"
},
{
"key": "D",
"text": "0"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 17,
"question": "**(Select all that apply)** The McCulloch–Pitts (MP) neuron sums its binary excitatory inputs, compares the total against a fixed threshold θ, and fires (outputs 1) when the sum reaches θ; an active (1) inhibitory input forces the output to 0. Which of the following statements about the MP neuron are true?",
"options": [
{
"key": "A",
"text": "It can implement NOR with θ = 0."
},
{
"key": "B",
"text": "If an inhibitory input is 1, the output is 0."
},
{
"key": "C",
"text": "Its inputs can be real-valued."
},
{
"key": "D",
"text": "It has no learnable weights (only a fixed sum and threshold)."
}
],
"correct": [
"A",
"B",
"D"
],
"multi": true
},
{
"n": 18,
"question": "A bias-free perceptron predicts y ∈ {+1, −1} as the sign of wᵀx. The training samples are P1 = ([2, 1], +1), P2 = ([1, 2], +1) and P3 = ([−1, −1], −1). Which weight vector classifies all three correctly?",
"options": [
{
"key": "A",
"text": "w = [1, 1]"
},
{
"key": "B",
"text": "w = [−1, 1]"
},
{
"key": "C",
"text": "w = [1, −1]"
},
{
"key": "D",
"text": "w = [−1, −1]"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 19,
"question": "The Perceptron (1958) was proposed by:",
"options": [
{
"key": "A",
"text": "Marvin Minsky"
},
{
"key": "B",
"text": "Frank Rosenblatt"
},
{
"key": "C",
"text": "Paul Werbos"
},
{
"key": "D",
"text": "Geoffrey Hinton"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 20,
"question": "In the perceptron learning algorithm, the weight vector w is perpendicular to the decision boundary wᵀx = 0 because:",
"options": [
{
"key": "A",
"text": "w always has unit norm"
},
{
"key": "B",
"text": "the bias is zero"
},
{
"key": "C",
"text": "the angle between w and any point on the line is 90°"
},
{
"key": "D",
"text": "the data is normalized"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 21,
"question": "The output of a sigmoid (logistic) neuron lies in:",
"options": [
{
"key": "A",
"text": "[−1, 1]"
},
{
"key": "B",
"text": "[0, ∞)"
},
{
"key": "C",
"text": "(−∞, ∞)"
},
{
"key": "D",
"text": "(0, 1)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 22,
"question": "The derivative of the logistic function σ(z) is:",
"options": [
{
"key": "A",
"text": "σ(z)(1 − σ(z))"
},
{
"key": "B",
"text": "1 − σ(z)²"
},
{
"key": "C",
"text": "σ(z)"
},
{
"key": "D",
"text": "σ(z)²"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 23,
"question": "Which of the following is NOT one of the five components of a typical supervised machine learning setup?",
"options": [
{
"key": "A",
"text": "Data"
},
{
"key": "B",
"text": "Decision boundary"
},
{
"key": "C",
"text": "Model"
},
{
"key": "D",
"text": "Objective/Loss function"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 24,
"question": "For a regression task where the target y ∈ ℝ, the most appropriate output activation is:",
"options": [
{
"key": "A",
"text": "softmax"
},
{
"key": "B",
"text": "logistic/sigmoid"
},
{
"key": "C",
"text": "linear"
},
{
"key": "D",
"text": "tanh"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 25,
"question": "For a k-class classification problem, the standard output activation and loss pairing is:",
"options": [
{
"key": "A",
"text": "linear + squared error"
},
{
"key": "B",
"text": "sigmoid + squared error"
},
{
"key": "C",
"text": "softmax + squared error"
},
{
"key": "D",
"text": "softmax + cross-entropy"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 26,
"question": "For a single sigmoid neuron with output f(x) = σ(w·x + b), where w is the weight vector, x the input, b the bias and σ the logistic function, and given the squared-error loss between the neuron's output and target y, the gradient of the loss ½(f(x) − y)² with respect to the weight vector w is:",
"options": [
{
"key": "A",
"text": "(f(x) − y)·f(x)·(1 − f(x))·x"
},
{
"key": "B",
"text": "(f(x) − y)·x"
},
{
"key": "C",
"text": "(f(x) − y)·f(x)·x"
},
{
"key": "D",
"text": "f(x)·(1 − f(x))·x"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 27,
"question": "Gradient descent moves the parameters in the direction:",
"options": [
{
"key": "A",
"text": "of the gradient"
},
{
"key": "B",
"text": "opposite to the gradient (180° to it)"
},
{
"key": "C",
"text": "perpendicular to the gradient"
},
{
"key": "D",
"text": "at 45° to the gradient"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 28,
"question": "In gradient descent, let w_t be the parameter (weight) vector at step t, η the learning rate, and ∇w_t the gradient of the loss with respect to w at step t. The parameter update rule is:",
"options": [
{
"key": "A",
"text": "w_{t+1} = w_t + η∇w_t"
},
{
"key": "B",
"text": "w_{t+1} = η∇w_t"
},
{
"key": "C",
"text": "w_{t+1} = w_t − η∇w_t"
},
{
"key": "D",
"text": "w_{t+1} = w_t / η"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 29,
"question": "The Universal Approximation Theorem guarantees that a single-hidden-layer network of sigmoid neurons can:",
"options": [
{
"key": "A",
"text": "exactly represent any Boolean function"
},
{
"key": "B",
"text": "represent only linearly separable functions"
},
{
"key": "C",
"text": "solve XOR with a single neuron"
},
{
"key": "D",
"text": "approximate any continuous function to any desired precision"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 30,
"question": "Approximating an arbitrary function using \"tower\" functions in 2 dimensions requires, per tower, about:",
"options": [
{
"key": "A",
"text": "4 neurons"
},
{
"key": "B",
"text": "2 neurons"
},
{
"key": "C",
"text": "3 neurons"
},
{
"key": "D",
"text": "8 neurons"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 31,
"question": "**(Select all that apply)** A sigmoid (logistic) neuron computes output y = σ(z) where z = w·x + w0 is the pre-activation, w is the weight vector, x the input, w0 the bias and σ is the logistic function. Which of the following statements about the sigmoid neuron are true?",
"options": [
{
"key": "A",
"text": "It gives a hard 0/1 decision."
},
{
"key": "B",
"text": "It is smooth and differentiable."
},
{
"key": "C",
"text": "Its output can be interpreted as a probability."
},
{
"key": "D",
"text": "Its transition (from output near 0 to near 1) occurs where the weighted sum w·x equals −w0."
}
],
"correct": [
"B",
"C",
"D"
],
"multi": true
},
{
"n": 32,
"question": "For a sigmoid neuron with input x = 1, weight w = 2 and bias b = −1, the output (to 2 decimal places) is closest to:",
"options": [
{
"key": "A",
"text": "0.62"
},
{
"key": "B",
"text": "0.73"
},
{
"key": "C",
"text": "0.88"
},
{
"key": "D",
"text": "0.95"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 33,
"question": "If the learning rate η is set too large, gradient descent may:",
"options": [
{
"key": "A",
"text": "converge very slowly"
},
{
"key": "B",
"text": "get stuck at the origin"
},
{
"key": "C",
"text": "oscillate or diverge"
},
{
"key": "D",
"text": "have exactly zero gradient"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 34,
"question": "The purpose of the bias term in a neuron is to:",
"options": [
{
"key": "A",
"text": "weight each input"
},
{
"key": "B",
"text": "normalize the output"
},
{
"key": "C",
"text": "add nonlinearity"
},
{
"key": "D",
"text": "shift the activation (threshold)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 35,
"question": "**(Select all that apply)** Which of the following statements about MLPs are true?",
"options": [
{
"key": "A",
"text": "A single-layer perceptron can represent all linearly separable Boolean functions."
},
{
"key": "B",
"text": "Adding hidden layers lets the network represent functions that a single perceptron cannot."
},
{
"key": "C",
"text": "A network with 2^n hidden neurons and one output neuron can represent all Boolean functions over n inputs."
},
{
"key": "D",
"text": "A single-layer perceptron can represent XOR if the learning rate is set appropriately."
}
],
"correct": [
"A",
"B",
"C"
],
"multi": true
},
{
"n": 36,
"question": "The number of learnable parameters in a feedforward network is a measure of its:",
"options": [
{
"key": "A",
"text": "learning rate"
},
{
"key": "B",
"text": "capacity"
},
{
"key": "C",
"text": "batch size"
},
{
"key": "D",
"text": "momentum"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 37,
"question": "Statement I: \"Learning algorithms minimize (not maximize) a loss function.\" Statement II: \"Learning algorithms learn parameters from data.\" Which is/are correct?",
"options": [
{
"key": "A",
"text": "Only I"
},
{
"key": "B",
"text": "Only II"
},
{
"key": "C",
"text": "Both I and II"
},
{
"key": "D",
"text": "Neither"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 38,
"question": "For a single sigmoid neuron with output f(x) = σ(w·x + b) (w = weight vector, x = input, b = bias, σ = logistic function) and squared-error loss L(w,b) = ½(f(x) − y)² against a target y, the partial derivative ∂L/∂b equals:",
"options": [
{
"key": "A",
"text": "(f(x) − y)·x"
},
{
"key": "B",
"text": "f(x) − y"
},
{
"key": "C",
"text": "f(x)·(1 − f(x))"
},
{
"key": "D",
"text": "(f(x) − y)·f(x)·(1 − f(x))"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 39,
"question": "For multiple data points, gradient descent updates w using the sum of per-point gradients because:",
"options": [
{
"key": "A",
"text": "the loss is additive over data points"
},
{
"key": "B",
"text": "it reduces variance"
},
{
"key": "C",
"text": "it avoids overfitting"
},
{
"key": "D",
"text": "weights must be normalized"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 40,
"question": "The value of the sigmoid function σ(0) is:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "0.25"
},
{
"key": "C",
"text": "0.5"
},
{
"key": "D",
"text": "1"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 41,
"question": "In a feedforward neural network, let layer k have weight matrix W_k, bias vector b_k, pre-activation (linear input) a_k, and activation (output) h_k, with h_{k−1} the activations of the previous layer. The pre-activation of layer k is defined as:",
"options": [
{
"key": "A",
"text": "a_i = W_i h_i"
},
{
"key": "B",
"text": "a_i = b_i + W_i h_{i−1}"
},
{
"key": "C",
"text": "a_i = σ(W_i h_{i−1})"
},
{
"key": "D",
"text": "a_i = b_i · h_{i−1}"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 42,
"question": "In a feedforward network, W_L is the weight matrix of the output layer (layer L), which maps the activations of the last hidden layer into the output pre-activations. If the output layer has k neurons and the last hidden layer has n neurons, the shape of W_L is:",
"options": [
{
"key": "A",
"text": "n × k"
},
{
"key": "B",
"text": "n × n"
},
{
"key": "C",
"text": "k × n"
},
{
"key": "D",
"text": "k × k"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 43,
"question": "In a k-class classification network whose output layer produces pre-activations (logits) a_1, ..., a_k, the softmax output for class j is:",
"options": [
{
"key": "A",
"text": "1 / (1 + exp(−a_j))"
},
{
"key": "B",
"text": "a_j / Σ_i a_i"
},
{
"key": "C",
"text": "exp(a_j)"
},
{
"key": "D",
"text": "exp(a_j) / Σ_i exp(a_i)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 44,
"question": "For a classification network, let ŷ_i be the softmax (predicted) probability of class i, y_i the true label under a one-hot encoding, and ℓ the index of the true class (so y_ℓ = 1 and all other y_i = 0). The cross-entropy loss −Σ_i y_i·log(ŷ_i) then simplifies to:",
"options": [
{
"key": "A",
"text": "−log ŷ_ℓ"
},
{
"key": "B",
"text": "Σ_i ŷ_i log y_i"
},
{
"key": "C",
"text": "ŷ_ℓ"
},
{
"key": "D",
"text": "−Σ_i ŷ_i"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 45,
"question": "For a classification network using a softmax output layer with pre-activations (logits) a_L, let ŷ be the vector of softmax probabilities and e(ℓ) be the one-hot vector of the true class ℓ (with 1 at position ℓ and 0 elsewhere). The gradient of the cross-entropy loss with respect to the output pre-activation a_L is:",
"options": [
{
"key": "A",
"text": "e(ℓ) − ŷ"
},
{
"key": "B",
"text": "ŷ − e(ℓ)"
},
{
"key": "C",
"text": "ŷ + e(ℓ)"
},
{
"key": "D",
"text": "ŷ ⊙ e(ℓ)"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 46,
"question": "In backpropagation, consider layer k with weight matrix W_k, pre-activation a_k = W_k·h_{k−1} + b_k (h_{k−1} = activations of the previous layer), and let L(θ) be the loss with θ denoting all learnable parameters. Given the gradient ∇_{a_k}L of the loss with respect to that layer's pre-activation a_k, the gradient ∇_{W_k}L(θ) with respect to W_k equals:",
"options": [
{
"key": "A",
"text": "∇_{a_k} L ⊙ h_{k−1}"
},
{
"key": "B",
"text": "W_k h_{k−1}"
},
{
"key": "C",
"text": "∇_{a_k} L · h_{k−1}ᵀ"
},
{
"key": "D",
"text": "∇_{a_k} L + h_{k−1}"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 47,
"question": "In backpropagation, consider layer k with bias vector b_k, pre-activation a_k = W_k·h_{k−1} + b_k, and loss L(θ) with θ the set of all learnable parameters. Given the gradient ∇_{a_k}L with respect to the layer's pre-activation a_k, the gradient ∇_{b_k}L(θ) with respect to the bias b_k equals:",
"options": [
{
"key": "A",
"text": "∇_{a_k} L · h_{k−1}ᵀ"
},
{
"key": "B",
"text": "0"
},
{
"key": "C",
"text": "∇_{h_k} L"
},
{
"key": "D",
"text": "∇_{a_k} L"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 48,
"question": "In backpropagation, layer k has weight matrix W_k and pre-activation a_k = W_k·h_{k−1} + b_k, where h_{k−1} is the activation (output) of the layer below. Given the gradient ∇_{a_k}L with respect to the pre-activation a_k, the gradient ∇_{h_{k−1}}L with respect to the lower layer's activations h_{k−1} is computed as:",
"options": [
{
"key": "A",
"text": "∇_{h_{k−1}} L = W_kᵀ ∇_{a_k} L"
},
{
"key": "B",
"text": "∇_{h_{k−1}} L = W_k ∇_{a_k} L"
},
{
"key": "C",
"text": "∇_{h_{k−1}} L = ∇_{a_k} L"
},
{
"key": "D",
"text": "∇_{h_{k−1}} L = h_{k−1}"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 49,
"question": "For the tanh activation function evaluated at a pre-activation z, the derivative of tanh with respect to z is:",
"options": [
{
"key": "A",
"text": "tanh(z)(1 − tanh(z))"
},
{
"key": "B",
"text": "1 − tanh²(z)"
},
{
"key": "C",
"text": "1 + tanh²(z)"
},
{
"key": "D",
"text": "tanh²(z)"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 50,
"question": "In the backpropagation pseudo-code for an L-layer network, gradients are computed layer by layer starting from the output layer and moving backward. The loop index k that computes the gradients thus runs:",
"options": [
{
"key": "A",
"text": "1 to L"
},
{
"key": "B",
"text": "0 to L"
},
{
"key": "C",
"text": "L down to 1"
},
{
"key": "D",
"text": "L to L"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 51,
"question": "For a logistic (sigmoid) activation function g, evaluated at a pre-activation z, the derivative g′(z) equals:",
"options": [
{
"key": "A",
"text": "1 − g(z)"
},
{
"key": "B",
"text": "g(z)²"
},
{
"key": "C",
"text": "−g(z)"
},
{
"key": "D",
"text": "g(z)(1 − g(z))"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 52,
"question": "For a network layer i, let a_i denote the layer's pre-activation (the linear combination of inputs) and h_i = g(a_i) its activation, where g is the activation function. In backpropagation, the gradient with respect to a_i is obtained from the gradient with respect to h_i by:",
"options": [
{
"key": "A",
"text": "element-wise multiplication with g′(a_i)"
},
{
"key": "B",
"text": "matrix multiplication with W_i"
},
{
"key": "C",
"text": "dividing by g′(a_i)"
},
{
"key": "D",
"text": "adding g′(a_i)"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 53,
"question": "Which loss is most appropriate when the output is a probability distribution over classes?",
"options": [
{
"key": "A",
"text": "squared error"
},
{
"key": "B",
"text": "cross-entropy"
},
{
"key": "C",
"text": "hinge loss"
},
{
"key": "D",
"text": "absolute error"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 54,
"question": "A network has 3 inputs, one hidden layer with 4 neurons, and 1 output neuron, with biases in all layers. The number of learnable parameters is:",
"options": [
{
"key": "A",
"text": "16"
},
{
"key": "B",
"text": "20"
},
{
"key": "C",
"text": "21"
},
{
"key": "D",
"text": "24"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 55,
"question": "In backpropagation, the network alternates a forward pass and a backward pass. The purpose of the forward pass is to:",
"options": [
{
"key": "A",
"text": "compute gradients"
},
{
"key": "B",
"text": "update weights"
},
{
"key": "C",
"text": "compute h_i, a_i and ŷ"
},
{
"key": "D",
"text": "initialize weights"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 56,
"question": "**(Select all that apply)** In softmax regression, let the logits be the pre-activation outputs z_1, ..., z_k of the output layer (one per class). The softmax function converts these logits into class probabilities. Which of the following statements about the softmax function are true?",
"options": [
{
"key": "A",
"text": "Outputs sum to 1."
},
{
"key": "B",
"text": "It is invariant to adding the same constant to all logits."
},
{
"key": "C",
"text": "It is applied element-wise independently to each logit."
},
{
"key": "D",
"text": "Outputs lie in (0, 1)."
}
],
"correct": [
"A",
"B",
"D"
],
"multi": true
},
{
"n": 57,
"question": "If the softmax output is [0.35, 0.55, 0.10], the predicted class is:",
"options": [
{
"key": "A",
"text": "class 1"
},
{
"key": "B",
"text": "class 2"
},
{
"key": "C",
"text": "class 3"
},
{
"key": "D",
"text": "undecided"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 58,
"question": "The true class is class 3 and the predicted probability for class 3 is 0.55. The cross-entropy loss is:",
"options": [
{
"key": "A",
"text": "−log(0.55) ≈ 0.60"
},
{
"key": "B",
"text": "−log(0.10) ≈ 2.30"
},
{
"key": "C",
"text": "0.55"
},
{
"key": "D",
"text": "log(0.55) ≈ −0.60"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 59,
"question": "A small network computes h = w1·x + b and ŷ = w2·h, with loss L = ½(ŷ − y)². For one training example with x = 2, y = 5, w1 = 1, b = 0 and w2 = 2, the gradient ∂L/∂w2 equals:",
"options": [
{
"key": "A",
"text": "−1"
},
{
"key": "B",
"text": "−2"
},
{
"key": "C",
"text": "1"
},
{
"key": "D",
"text": "2"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 60,
"question": "During backpropagation, gradients for the parameters of earlier layers depend on:",
"options": [
{
"key": "A",
"text": "the outputs of later layers only"
},
{
"key": "B",
"text": "the batch size only"
},
{
"key": "C",
"text": "the chain of local derivatives from the loss back to those parameters"
},
{
"key": "D",
"text": "the number of epochs"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 61,
"question": "In gradient descent with momentum, let w_t be the weight vector at step t, η the learning rate, ∇w_t the gradient of the loss with respect to w at step t, γ the momentum coefficient, and update_t the accumulated update at step t. The momentum update rule is:",
"options": [
{
"key": "A",
"text": "update_t = η∇w_t ; w_{t+1} = w_t − update_t"
},
{
"key": "B",
"text": "update_t = γ·update_{t−1} − η∇w_t"
},
{
"key": "C",
"text": "w_{t+1} = w_t + η∇w_t"
},
{
"key": "D",
"text": "update_t = γ·update_{t−1} + η∇w_t ; w_{t+1} = w_t − update_t"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 62,
"question": "Let w_t be the weight vector at step t, γ the momentum coefficient, and update_{t−1} the accumulated update from the previous step. Nesterov Accelerated Gradient (NAG) differs from standard momentum-based gradient descent by:",
"options": [
{
"key": "A",
"text": "computing the gradient at the look-ahead point w_t − γ·update_{t−1}"
},
{
"key": "B",
"text": "using no learning rate"
},
{
"key": "C",
"text": "using second-order derivatives"
},
{
"key": "D",
"text": "using random gradients"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 63,
"question": "In the AdaGrad optimization algorithm, for each parameter w_i, AdaGrad maintains G_{i,t} = sum_{k=1}^{t} (g_{i,k})^2, where g_{i,k} is the gradient of the loss with respect to w_i at step k, and updates w_{i,t+1} = w_{i,t} - (η / sqrt(G_{i,t} + ε)) * g_{i,t}. For a parameter that receives gradients only rarely (its corresponding feature is non-zero for very few training inputs), its G_{i,t} grows more slowly over time. As a consequence, the effective learning rate for that parameter will:",
"options": [
{
"key": "A",
"text": "decay faster than for frequently updated parameters"
},
{
"key": "B",
"text": "decay more slowly than for frequently updated parameters, so it remains larger"
},
{
"key": "C",
"text": "remain exactly equal to the learning rate of every other parameter"
},
{
"key": "D",
"text": "grow without bound as training proceeds"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 64,
"question": "Among the optimizers below, which one adapts the learning rate for each parameter individually by accumulating the sum of squared gradients received by that parameter over all past training steps?",
"options": [
{
"key": "A",
"text": "Momentum"
},
{
"key": "B",
"text": "NAG (Nesterov Accelerated Gradient)"
},
{
"key": "C",
"text": "Adagrad"
},
{
"key": "D",
"text": "Vanilla GD (gradient descent with a fixed learning rate)"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 65,
"question": "Adagrad accumulates squared gradients over all past steps in an ever-growing sum G_t = sum_{k=1}^{t} g_k^2, which causes the learning rate to vanish eventually. RMSProp improves over Adagrad by:",
"options": [
{
"key": "A",
"text": "removing the learning rate"
},
{
"key": "B",
"text": "using the true gradient instead of squared gradients"
},
{
"key": "C",
"text": "adding momentum"
},
{
"key": "D",
"text": "replacing the growing sum with a decaying (exponentially weighted) average of squared gradients"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 66,
"question": "In the Adam optimizer, the first moment estimate of the gradient at step t is m_t = β1·m_{t-1} + (1 - β1)·g_t and the second moment estimate is v_t = β2·v_{t-1} + (1 - β2)·g_t^2. To correct the bias introduced by initializing m_0 = 0 and v_0 = 0, the bias-corrected estimates are defined as m̂_t = m_t / (denominator_m) and v̂_t = v_t / (denominator_v). What are these denominators?",
"options": [
{
"key": "A",
"text": "(1 - β1^t) and (1 - β2^t)"
},
{
"key": "B",
"text": "β1 and β2"
},
{
"key": "C",
"text": "(1 - β1) and (1 - β2)"
},
{
"key": "D",
"text": "t and t"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 67,
"question": "In the Adam optimizer, β1 is the exponential decay rate for the first moment (mean of gradients) estimate and β2 is the decay rate for the second moment (uncentered variance) estimate. Typical default values used for β1 and β2 are:",
"options": [
{
"key": "A",
"text": "0.5 and 0.5"
},
{
"key": "B",
"text": "0.9 and 0.999"
},
{
"key": "C",
"text": "0.99 and 0.9"
},
{
"key": "D",
"text": "0.1 and 0.01"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 68,
"question": "In vanilla (full-batch) gradient descent, the gradient is computed over the entire training set before each parameter update. If a dataset has N training examples, how many parameter updates does vanilla gradient descent make per epoch (one full pass over the data)?",
"options": [
{
"key": "A",
"text": "N (one per training example)"
},
{
"key": "B",
"text": "N/B, where B is the mini-batch size"
},
{
"key": "C",
"text": "1 (one update after processing all N examples)"
},
{
"key": "D",
"text": "B (one per mini-batch)"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 69,
"question": "When annealing (decaying) the learning rate exponentially over training steps t, the learning rate at step t follows which formula? (Here η is the current learning rate, η0 the initial learning rate, k a small positive decay constant, and t the step number.)",
"options": [
{
"key": "A",
"text": "η = η0 / (1 + k·t)"
},
{
"key": "B",
"text": "η = η0 - k·t"
},
{
"key": "C",
"text": "η = k·t"
},
{
"key": "D",
"text": "η = η0 · e^(-k·t)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 70,
"question": "On an error-surface contour plot, a small distance between contours indicates:",
"options": [
{
"key": "A",
"text": "a steep slope"
},
{
"key": "B",
"text": "a gentle slope"
},
{
"key": "C",
"text": "a saddle point"
},
{
"key": "D",
"text": "a local minimum"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 71,
"question": "For a square matrix A, a scalar λ is called an eigenvalue of A if there exists a non-zero vector v such that Av equals λ times v. Which equation defines this relationship?",
"options": [
{
"key": "A",
"text": "Av = v"
},
{
"key": "B",
"text": "Av = λv"
},
{
"key": "C",
"text": "Av = 0"
},
{
"key": "D",
"text": "Av = λA"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 72,
"question": "For a square matrix A, eigenvectors corresponding to distinct (different) eigenvalues are:",
"options": [
{
"key": "A",
"text": "orthogonal"
},
{
"key": "B",
"text": "always zero vectors"
},
{
"key": "C",
"text": "linearly independent"
},
{
"key": "D",
"text": "always of unit norm"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 73,
"question": "For a real symmetric matrix, the eigenvectors corresponding to distinct eigenvalues are:",
"options": [
{
"key": "A",
"text": "always complex"
},
{
"key": "B",
"text": "linearly dependent"
},
{
"key": "C",
"text": "equal to the eigenvalues"
},
{
"key": "D",
"text": "orthogonal"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 74,
"question": "For a real symmetric matrix A, which vector x maximizes the quadratic form xᵀAx, subject to the constraint that x has unit norm (||x|| = 1)?",
"options": [
{
"key": "A",
"text": "the eigenvector of the largest eigenvalue"
},
{
"key": "B",
"text": "the eigenvector of the smallest eigenvalue"
},
{
"key": "C",
"text": "any unit vector"
},
{
"key": "D",
"text": "the zero vector"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 75,
"question": "In the eigenvalue decomposition A = UΛU⁻¹ of a square matrix A, U is the matrix whose columns are the eigenvectors of A and Λ is the diagonal matrix of eigenvalues. The inverse U⁻¹ exists if:",
"options": [
{
"key": "A",
"text": "A is symmetric"
},
{
"key": "B",
"text": "A has n linearly independent eigenvectors"
},
{
"key": "C",
"text": "A is diagonal"
},
{
"key": "D",
"text": "A has rank 1"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 76,
"question": "**(Select all that apply)** A stochastic matrix A is a square matrix whose columns each sum to 1 (it describes transitions of a probability distribution, so A applied to a probability vector yields another probability vector). Which of the following statements about the dominant eigenvalue of such a matrix A (the eigenvalue of largest magnitude) are true?",
"options": [
{
"key": "A",
"text": "It is always 0."
},
{
"key": "B",
"text": "Its magnitude is always greater than 1."
},
{
"key": "C",
"text": "It equals 1."
},
{
"key": "D",
"text": "The sequence Aᵏv0 approaches a multiple of its eigenvector."
}
],
"correct": [
"C",
"D"
],
"multi": true
},
{
"n": 77,
"question": "For a square matrix A with dominant eigenvalue λ_d (the eigenvalue of largest magnitude) and an initial vector v0, if |λ_d| < 1, then the sequence Aⁿv0 (A raised to the nth power applied to v0, as n grows):",
"options": [
{
"key": "A",
"text": "explodes"
},
{
"key": "B",
"text": "reaches a non-trivial steady state"
},
{
"key": "C",
"text": "oscillates forever with constant magnitude"
},
{
"key": "D",
"text": "vanishes"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 78,
"question": "In gradient descent with momentum, the update is computed as: update_t = γ·update_{t-1} + η·∇w_t, and then the weights are updated as w_{t+1} = w_t - update_t. Using γ = 0.9 (momentum coefficient), η = 0.01 (learning rate), a current gradient ∇w_t = 0.2, and a previous update update_{t-1} = 0.1, what is the new update_t (the amount subtracted from w_t)?",
"options": [
{
"key": "A",
"text": "0.092"
},
{
"key": "B",
"text": "0.11"
},
{
"key": "C",
"text": "0.091"
},
{
"key": "D",
"text": "0.12"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 79,
"question": "A dataset has 100,000 samples and the mini-batch size is 10,000. The number of parameter updates per epoch is:",
"options": [
{
"key": "A",
"text": "1"
},
{
"key": "B",
"text": "10"
},
{
"key": "C",
"text": "100"
},
{
"key": "D",
"text": "1000"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 80,
"question": "The key computational disadvantage of doing a line search at every update is:",
"options": [
{
"key": "A",
"text": "lower final accuracy"
},
{
"key": "B",
"text": "many more computations per step"
},
{
"key": "C",
"text": "increased overfitting"
},
{
"key": "D",
"text": "it never converges"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 81,
"question": "Let X be an m × d data matrix of zero-mean (mean-centered) data in which each of the m rows is one data point and each of the d columns is a feature. What is the formula for the d × d covariance matrix of the features? (Here m is the number of data points.)",
"options": [
{
"key": "A",
"text": "X Xᵀ"
},
{
"key": "B",
"text": "(1/m) X Xᵀ"
},
{
"key": "C",
"text": "(1/m) XᵀX"
},
{
"key": "D",
"text": "Xᵀ + X"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 82,
"question": "In Principal Component Analysis (PCA), given the mean-centered data matrix X, the principal components (the directions of maximum variance) are the eigenvectors of:",
"options": [
{
"key": "A",
"text": "X"
},
{
"key": "B",
"text": "the identity matrix"
},
{
"key": "C",
"text": "the labels"
},
{
"key": "D",
"text": "XᵀX (the covariance matrix)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 83,
"question": "Which single statement best captures the interpretations of Principal Component Analysis (PCA)?",
"options": [
{
"key": "A",
"text": "It maximizes variance and minimizes reconstruction error in the projected space."
},
{
"key": "B",
"text": "It maximizes reconstruction error."
},
{
"key": "C",
"text": "It clusters the data."
},
{
"key": "D",
"text": "It selects features by name."
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 84,
"question": "In PCA, let X be the mean-centered data matrix with m data points, so that the covariance matrix is (1/m)XᵀX. If λ_i is the eigenvalue of XᵀX corresponding to the i-th principal component, the variance of the data along that principal component is:",
"options": [
{
"key": "A",
"text": "λ_i"
},
{
"key": "B",
"text": "λ_i / m"
},
{
"key": "C",
"text": "m·λ_i"
},
{
"key": "D",
"text": "√λ_i"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 85,
"question": "When reconstructing data from its PCA projection using only k principal components, to minimize the squared reconstruction error one should keep:",
"options": [
{
"key": "A",
"text": "the k smallest eigenvalues"
},
{
"key": "B",
"text": "random components"
},
{
"key": "C",
"text": "the k largest eigenvalues"
},
{
"key": "D",
"text": "all components"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 86,
"question": "In PCA, the eigenvectors of the matrix XᵀX (where X is the mean-centered data matrix) are orthogonal to each other because:",
"options": [
{
"key": "A",
"text": "X is square"
},
{
"key": "B",
"text": "X has zero mean"
},
{
"key": "C",
"text": "X is orthogonal"
},
{
"key": "D",
"text": "XᵀX is symmetric"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 87,
"question": "Before computing the covariance matrix for PCA, the data columns should be:",
"options": [
{
"key": "A",
"text": "zero-mean centered"
},
{
"key": "B",
"text": "unit-sum normalized"
},
{
"key": "C",
"text": "sorted"
},
{
"key": "D",
"text": "one-hot encoded"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 88,
"question": "For a real matrix A of size m × n (with m rows and n columns), the singular value decomposition (SVD) expresses A as:",
"options": [
{
"key": "A",
"text": "A = UDUᵀ"
},
{
"key": "B",
"text": "A = UΣVᵀ"
},
{
"key": "C",
"text": "A = VΣVᵀ"
},
{
"key": "D",
"text": "A = PΛPᵀ"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 89,
"question": "In the singular value decomposition A = UΣVᵀ of a real matrix A, where U and V are orthogonal matrices and Σ holds the singular values on its diagonal, the matrix Σ is:",
"options": [
{
"key": "A",
"text": "any diagonal matrix"
},
{
"key": "B",
"text": "an upper triangular matrix"
},
{
"key": "C",
"text": "a diagonal matrix with non-negative entries"
},
{
"key": "D",
"text": "symmetric positive definite"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 90,
"question": "In the singular value decomposition A = UΣVᵀ of a real matrix A (where U and V are orthogonal matrices and Σ is diagonal), the columns of V are the eigenvectors of:",
"options": [
{
"key": "A",
"text": "A Aᵀ"
},
{
"key": "B",
"text": "A"
},
{
"key": "C",
"text": "Σ"
},
{
"key": "D",
"text": "AᵀA"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 91,
"question": "In the singular value decomposition A = UΣVᵀ of a real matrix A, the singular values σ_i are related to the eigenvalues λ_i of the matrix AᵀA by:",
"options": [
{
"key": "A",
"text": "σ_i = √λ_i"
},
{
"key": "B",
"text": "σ_i = λ_i"
},
{
"key": "C",
"text": "σ_i = λ_i²"
},
{
"key": "D",
"text": "σ_i = 1/λ_i"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 92,
"question": "Given the singular value decomposition A = UΣVᵀ of a matrix A, where σ_i is the i-th singular value and u_i, v_i are the i-th columns of U and V respectively, the best rank-k approximation of A (in the Frobenius norm, i.e. the rank-k matrix closest to A) is:",
"options": [
{
"key": "A",
"text": "UΣVᵀ"
},
{
"key": "B",
"text": "Σ_{i=1}^{k} σ_i u_i v_iᵀ"
},
{
"key": "C",
"text": "the first k rows of A"
},
{
"key": "D",
"text": "the first k columns of A"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 93,
"question": "A 2D point x = [3.3, 3] is projected onto the unit basis vector u1 = [1,1]/√2 (one of the PCA-style basis directions). The coefficient α1 = xᵀu1 of x along u1 is:",
"options": [
{
"key": "A",
"text": "−0.3/√2"
},
{
"key": "B",
"text": "3.3"
},
{
"key": "C",
"text": "6.3/√2"
},
{
"key": "D",
"text": "3.0"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 94,
"question": "The 2D point x = [3.3, 3] is projected onto the unit vector u1 = [1,1]/√2, giving the coefficient α1 = xᵀu1 = 6.3/√2 ≈ 4.455. Reconstructing x using only this single component (that is, using k = 1 and the approximation α1·u1) gives approximately:",
"options": [
{
"key": "A",
"text": "[3.3, 3.0]"
},
{
"key": "B",
"text": "[0.15, 0.15]"
},
{
"key": "C",
"text": "[1.65, 1.5]"
},
{
"key": "D",
"text": "[3.15, 3.15]"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 95,
"question": "**(Select all that apply)** Which of the following are true about Principal Component Analysis (PCA)?",
"options": [
{
"key": "A",
"text": "It decorrelates the new dimensions."
},
{
"key": "B",
"text": "The new dimensions are linear combinations of the original features."
},
{
"key": "C",
"text": "It can be used for dimensionality reduction."
},
{
"key": "D",
"text": "It requires labeled data."
}
],
"correct": [
"A",
"B",
"C"
],
"multi": true
},
{
"n": 96,
"question": "A matrix A has AᵀA with eigenvalues 9 and 16. The singular values of A are:",
"options": [
{
"key": "A",
"text": "9 and 16"
},
{
"key": "B",
"text": "3 and 4"
},
{
"key": "C",
"text": "81 and 256"
},
{
"key": "D",
"text": "4 and 3 (in that order)"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 97,
"question": "In PCA, discarding the principal components that have the smallest eigenvalues (i.e. keeping only the leading components) minimizes:",
"options": [
{
"key": "A",
"text": "the captured variance"
},
{
"key": "B",
"text": "the number of data points"
},
{
"key": "C",
"text": "the reconstruction error"
},
{
"key": "D",
"text": "the mean of the data"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 98,
"question": "If A has rank k, how many non-zero singular values does it have?",
"options": [
{
"key": "A",
"text": "min(m, n)"
},
{
"key": "B",
"text": "m"
},
{
"key": "C",
"text": "n"
},
{
"key": "D",
"text": "k"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 99,
"question": "In the eigenfaces example, each 100×100 image has 10,000 dimensions. After keeping the top 100 eigenvectors of XᵀX, each original image is approximated using how many scalar coefficients?",
"options": [
{
"key": "A",
"text": "100"
},
{
"key": "B",
"text": "10,000"
},
{
"key": "C",
"text": "100 × 100"
},
{
"key": "D",
"text": "m (number of images)"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 100,
"question": "For a matrix A with entries a_ij (i = row index, j = column index), the Frobenius norm of A is defined as:",
"options": [
{
"key": "A",
"text": "Σ |a_ij|"
},
{
"key": "B",
"text": "√(Σ a_ij²)"
},
{
"key": "C",
"text": "max |a_ij|"
},
{
"key": "D",
"text": "Σ a_ij"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 101,
"question": "In an autoencoder, let x denote the input vector and h the hidden (bottleneck) representation produced by the encoder. An undercomplete autoencoder has:",
"options": [
{
"key": "A",
"text": "dim(h) > dim(x)"
},
{
"key": "B",
"text": "dim(h) = dim(x)"
},
{
"key": "C",
"text": "dim(h) < dim(x)"
},
{
"key": "D",
"text": "no hidden layer"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 102,
"question": "In an autoencoder, let x be the input vector and h the hidden (bottleneck) representation. An overcomplete autoencoder (one with dim(h) > dim(x)) risks:",
"options": [
{
"key": "A",
"text": "vanishing gradients"
},
{
"key": "B",
"text": "exploding gradients"
},
{
"key": "C",
"text": "underfitting"
},
{
"key": "D",
"text": "learning the identity function"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 103,
"question": "For binary input vectors, the most suitable decoder activation is:",
"options": [
{
"key": "A",
"text": "logistic/sigmoid"
},
{
"key": "B",
"text": "linear"
},
{
"key": "C",
"text": "tanh"
},
{
"key": "D",
"text": "ReLU"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 104,
"question": "For real-valued inputs, the most suitable decoder activation is:",
"options": [
{
"key": "A",
"text": "sigmoid"
},
{
"key": "B",
"text": "linear"
},
{
"key": "C",
"text": "softmax"
},
{
"key": "D",
"text": "step"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 105,
"question": "The loss typically used for a real-valued autoencoder is:",
"options": [
{
"key": "A",
"text": "cross-entropy"
},
{
"key": "B",
"text": "hinge loss"
},
{
"key": "C",
"text": "squared error"
},
{
"key": "D",
"text": "KL divergence"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 106,
"question": "A linear autoencoder with squared error and appropriately normalized inputs learns a hidden representation equivalent to:",
"options": [
{
"key": "A",
"text": "SVM"
},
{
"key": "B",
"text": "k-means"
},
{
"key": "C",
"text": "logistic regression"
},
{
"key": "D",
"text": "PCA"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 107,
"question": "In the equivalence between a linear autoencoder and PCA, let X be the (normalized) data matrix and V the right singular vectors from the singular value decomposition of X. The optimal encoder matrix W equals V, and these columns of V are also the:",
"options": [
{
"key": "A",
"text": "eigenvectors of XᵀX"
},
{
"key": "B",
"text": "left singular vectors"
},
{
"key": "C",
"text": "random vectors"
},
{
"key": "D",
"text": "biases of the network"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 108,
"question": "Denoising autoencoders corrupt the input and ask the network to:",
"options": [
{
"key": "A",
"text": "reconstruct the corrupted input"
},
{
"key": "B",
"text": "reconstruct the original uncorrupted input"
},
{
"key": "C",
"text": "classify the input"
},
{
"key": "D",
"text": "output zeros"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 109,
"question": "In a denoising autoencoder, let x be the original input and x̃ the corrupted version fed to the network. The corruption process sets each input value to 0 with probability q and leaves it unchanged otherwise, i.e. P(x̃ = 0 | x) = q and P(x̃ = x | x) = 1 - q. A value of q = 0 corresponds to:",
"options": [
{
"key": "A",
"text": "full corruption"
},
{
"key": "B",
"text": "half corruption"
},
{
"key": "C",
"text": "no corruption (vanilla autoencoder)"
},
{
"key": "D",
"text": "identity mapping of labels"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 110,
"question": "Sparse autoencoders enforce:",
"options": [
{
"key": "A",
"text": "high average activation of hidden units"
},
{
"key": "B",
"text": "zero weights"
},
{
"key": "C",
"text": "tied weights"
},
{
"key": "D",
"text": "low average activation (sparsity) of hidden units"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 111,
"question": "In a sparse autoencoder, the sparsity penalty is a Kullback–Leibler (KL) divergence term computed between which two quantities? (Here ρ is the desired/target average activation of a hidden unit and ρ̂_l is that hidden unit's actual average activation over the training set.)",
"options": [
{
"key": "A",
"text": "the target sparsity ρ and the average activation ρ̂_l"
},
{
"key": "B",
"text": "inputs and outputs"
},
{
"key": "C",
"text": "weights and biases"
},
{
"key": "D",
"text": "gates"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 112,
"question": "Contractive autoencoders add a penalty on the:",
"options": [
{
"key": "A",
"text": "L2 norm of the decoder"
},
{
"key": "B",
"text": "Frobenius norm of the Jacobian of the encoder"
},
{
"key": "C",
"text": "number of layers"
},
{
"key": "D",
"text": "sparsity of the input"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 113,
"question": "Let W be the encoder weight matrix and W* the (separate) decoder weight matrix of an autoencoder. Tying the weights of an autoencoder means setting W* to:",
"options": [
{
"key": "A",
"text": "W* = W"
},
{
"key": "B",
"text": "W* = 0"
},
{
"key": "C",
"text": "W* = Wᵀ"
},
{
"key": "D",
"text": "W* = I"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 114,
"question": "**(Select all that apply)** In an autoencoder's training objective, θ denotes the set of parameters (encoder and decoder weights and biases) and the objective is typically a reconstruction loss plus possibly some regularization terms. Which of the following terms can be added to that objective?",
"options": [
{
"key": "A",
"text": "A KL-based sparsity penalty"
},
{
"key": "B",
"text": "A Jacobian (contractive) penalty"
},
{
"key": "C",
"text": "Cross-entropy of the class labels"
},
{
"key": "D",
"text": "λ||θ||² (weight decay)"
}
],
"correct": [
"A",
"B",
"D"
],
"multi": true
},
{
"n": 115,
"question": "For a hidden linear neuron in an autoencoder whose weight (filter) vector is W1, the input pattern that maximally excites it (in the direction of its weights, normalized to unit norm) is x = W1 / √(W1ᵀW1). Visualizing this x for each hidden neuron shows that:",
"options": [
{
"key": "A",
"text": "the filters act as pattern detectors"
},
{
"key": "B",
"text": "the network is linear"
},
{
"key": "C",
"text": "the input is random"
},
{
"key": "D",
"text": "the decoder ignores the weights"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 116,
"question": "In a denoising autoencoder, the corruption probability q is the probability that each input value is set to zero (see the earlier question on the corruption process). Training with more noise (a larger q) tends to make the learned filters:",
"options": [
{
"key": "A",
"text": "narrower"
},
{
"key": "B",
"text": "wider/more robust, relying on more pixels"
},
{
"key": "C",
"text": "all zero"
},
{
"key": "D",
"text": "exactly equal to the PCA components"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 117,
"question": "Comparing PCA and a denoising autoencoder on image data, which statement is correct?",
"options": [
{
"key": "A",
"text": "PCA gives edge detectors, the autoencoder does not"
},
{
"key": "B",
"text": "Both give identical filters"
},
{
"key": "C",
"text": "The autoencoder can give edge detectors, PCA does not"
},
{
"key": "D",
"text": "Neither gives interpretable filters"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 118,
"question": "The encoder of a linear autoencoder is equivalent to PCA under which set of conditions?",
"options": [
{
"key": "A",
"text": "Nonlinear encoder and cross-entropy loss"
},
{
"key": "B",
"text": "Sigmoid decoder and no normalization"
},
{
"key": "C",
"text": "Tied weights only"
},
{
"key": "D",
"text": "Linear encoder and decoder, squared error, and normalized inputs"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 119,
"question": "For a binary autoencoder, let x_ij be the j-th input value of the i-th binary training example and x̂_ij the corresponding reconstruction produced by the network (a value in (0, 1)). The binary cross-entropy reconstruction loss is minimized when:",
"options": [
{
"key": "A",
"text": "x̂_ij = x_ij"
},
{
"key": "B",
"text": "x̂_ij = 0"
},
{
"key": "C",
"text": "x̂_ij = 1"
},
{
"key": "D",
"text": "x̂_ij = 0.5 always"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 120,
"question": "If an autoencoder trained on normal sensor data shows a high reconstruction error on a new sample, this suggests:",
"options": [
{
"key": "A",
"text": "the sensor is working perfectly"
},
{
"key": "B",
"text": "the sample is anomalous"
},
{
"key": "C",
"text": "the model has memorized the sample"
},
{
"key": "D",
"text": "the loss is undefined"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 121,
"question": "The standard bias–variance decomposition of a model's expected squared prediction error at a test point is:",
"options": [
{
"key": "A",
"text": "bias + variance"
},
{
"key": "B",
"text": "variance + noise only"
},
{
"key": "C",
"text": "bias² + variance + irreducible error"
},
{
"key": "D",
"text": "bias² + noise only"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 122,
"question": "A model with high bias and low variance typically:",
"options": [
{
"key": "A",
"text": "overfits"
},
{
"key": "B",
"text": "has zero error"
},
{
"key": "C",
"text": "is optimal"
},
{
"key": "D",
"text": "underfits"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 123,
"question": "A model that performs very well on training data but poorly on test data is likely:",
"options": [
{
"key": "A",
"text": "overfitting (high variance)"
},
{
"key": "B",
"text": "underfitting (high bias)"
},
{
"key": "C",
"text": "perfectly regularized"
},
{
"key": "D",
"text": "linear"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 124,
"question": "L2 regularization penalizes large weights by adding a penalty to the loss. Let w be the vector of learnable weights and α the regularization strength (a positive constant). Which term is added to the loss?",
"options": [
{
"key": "A",
"text": "α|w|"
},
{
"key": "B",
"text": "α||w||²"
},
{
"key": "C",
"text": "αw"
},
{
"key": "D",
"text": "α log w"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 125,
"question": "When the loss is augmented with the L2 penalty α||w||² (w = weight vector, α = regularization strength), the gradient of the regularized loss with respect to w gains which additional term?",
"options": [
{
"key": "A",
"text": "α"
},
{
"key": "B",
"text": "α|w|"
},
{
"key": "C",
"text": "αw"
},
{
"key": "D",
"text": "0"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 126,
"question": "In L2 regularization, α is the regularization strength that controls how heavily large weights are penalized. If α is set too large, the model may:",
"options": [
{
"key": "A",
"text": "overfit"
},
{
"key": "B",
"text": "become invariant"
},
{
"key": "C",
"text": "train faster"
},
{
"key": "D",
"text": "underfit"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 127,
"question": "**(Select all that apply)** Which of the following are forms of regularization covered in the course?",
"options": [
{
"key": "A",
"text": "L2 regularization"
},
{
"key": "B",
"text": "Early stopping"
},
{
"key": "C",
"text": "Dropout"
},
{
"key": "D",
"text": "Increasing model depth"
}
],
"correct": [
"A",
"B",
"C"
],
"multi": true
},
{
"n": 128,
"question": "Early stopping selects the model to return based on:",
"options": [
{
"key": "A",
"text": "the last epoch"
},
{
"key": "B",
"text": "the epoch with the best validation error"
},
{
"key": "C",
"text": "the first epoch"
},
{
"key": "D",
"text": "a random epoch"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 129,
"question": "Adding Gaussian noise to the inputs of a linear network is approximately equivalent to:",
"options": [
{
"key": "A",
"text": "L1 regularization"
},
{
"key": "B",
"text": "dropout"
},
{
"key": "C",
"text": "L2 regularization (weight decay)"
},
{
"key": "D",
"text": "batch normalization"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 130,
"question": "In dropout regularization, p denotes the retention (keep) probability of a unit. During training, dropout randomly:",
"options": [
{
"key": "A",
"text": "adds extra units"
},
{
"key": "B",
"text": "scales all weights to zero"
},
{
"key": "C",
"text": "changes the labels"
},
{
"key": "D",
"text": "removes hidden units with probability 1 − p"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 131,
"question": "In dropout, p denotes the retention (keep) probability of a unit. Typical values of p used in practice are:",
"options": [
{
"key": "A",
"text": "p = 0.5 for hidden units, p = 0.8 for visible units"
},
{
"key": "B",
"text": "p = 1.0 for all units"
},
{
"key": "C",
"text": "p = 0.1 for all units"
},
{
"key": "D",
"text": "p = 0.99 for hidden units"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 132,
"question": "At test time, dropout is handled by:",
"options": [
{
"key": "A",
"text": "dropping units again"
},
{
"key": "B",
"text": "using the full network and scaling outputs/weights by the retention probability"
},
{
"key": "C",
"text": "duplicating units"
},
{
"key": "D",
"text": "setting all weights to 0"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 133,
"question": "Dataset augmentation exploits:",
"options": [
{
"key": "A",
"text": "random labels"
},
{
"key": "B",
"text": "extra parameters"
},
{
"key": "C",
"text": "transformations that do not change the label"
},
{
"key": "D",
"text": "larger batches"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 134,
"question": "Parameter tying is typically used in:",
"options": [
{
"key": "A",
"text": "SVMs"
},
{
"key": "B",
"text": "k-means"
},
{
"key": "C",
"text": "decision trees"
},
{
"key": "D",
"text": "autoencoders (encoder/decoder weights)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 135,
"question": "Ensemble/bagging reduces error most when the individual models' errors are:",
"options": [
{
"key": "A",
"text": "uncorrelated"
},
{
"key": "B",
"text": "perfectly correlated"
},
{
"key": "C",
"text": "identical"
},
{
"key": "D",
"text": "zero-variance"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 136,
"question": "In bagging with k models, suppose each individual model's prediction has variance V and every pair of models has covariance C. The mean squared error of the averaged (ensembled) predictor is:",
"options": [
{
"key": "A",
"text": "V + C"
},
{
"key": "B",
"text": "(1/k)V + ((k − 1)/k)C"
},
{
"key": "C",
"text": "V/k always"
},
{
"key": "D",
"text": "kC"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 137,
"question": "In output (label) smoothing with a small parameter ε, each one-hot target is replaced by a soft target: the true class keeps probability 1 - ε and the remaining probability ε is spread over the other classes. Doing this:",
"options": [
{
"key": "A",
"text": "trusts the labels completely"
},
{
"key": "B",
"text": "removes the labels"
},
{
"key": "C",
"text": "acknowledges that labels may be noisy"
},
{
"key": "D",
"text": "doubles the loss"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 138,
"question": "Which of the following regularization methods is known to drive many of the trained weights exactly to zero (sparse solutions)?",
"options": [
{
"key": "A",
"text": "L2 regularization"
},
{
"key": "B",
"text": "Data augmentation"
},
{
"key": "C",
"text": "Dropout"
},
{
"key": "D",
"text": "L1 regularization"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 139,
"question": "Early stopping with patience p means training stops when:",
"options": [
{
"key": "A",
"text": "validation error has not improved for p consecutive epochs"
},
{
"key": "B",
"text": "training error reaches 0"
},
{
"key": "C",
"text": "the learning rate reaches 0"
},
{
"key": "D",
"text": "p epochs have elapsed in total"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 140,
"question": "As model complexity increases, typically:",
"options": [
{
"key": "A",
"text": "both decrease"
},
{
"key": "B",
"text": "bias decreases and variance increases"
},
{
"key": "C",
"text": "both increase"
},
{
"key": "D",
"text": "bias increases and variance decreases"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 141,
"question": "Why does using sigmoid activation in deep hidden layers slow down training?",
"options": [
{
"key": "A",
"text": "sigmoid outputs are always zero"
},
{
"key": "B",
"text": "it causes exploding gradients"
},
{
"key": "C",
"text": "it causes vanishing gradients at saturation"
},
{
"key": "D",
"text": "it removes nonlinearity"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 142,
"question": "Which property of ReLU helps improve training speed?",
"options": [
{
"key": "A",
"text": "outputs are bounded in [0, 1]"
},
{
"key": "B",
"text": "it squares its inputs"
},
{
"key": "C",
"text": "it normalizes the input distribution"
},
{
"key": "D",
"text": "it does not saturate for positive inputs"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 143,
"question": "The derivative of ReLU(x) for x < 0 is:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "0.01"
},
{
"key": "C",
"text": "1"
},
{
"key": "D",
"text": "x"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 144,
"question": "The \"dying ReLU\" problem refers to:",
"options": [
{
"key": "A",
"text": "neurons with too-large outputs"
},
{
"key": "B",
"text": "neurons that never activate for any input"
},
{
"key": "C",
"text": "exploding gradients"
},
{
"key": "D",
"text": "saturating tanh units"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 145,
"question": "Leaky ReLU is defined as:",
"options": [
{
"key": "A",
"text": "max(0, x)"
},
{
"key": "B",
"text": "1/(1 + e^{−x})"
},
{
"key": "C",
"text": "max(0.01x, x)"
},
{
"key": "D",
"text": "x²"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 146,
"question": "ELU is defined, for x ≤ 0, as:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "x"
},
{
"key": "C",
"text": "−x"
},
{
"key": "D",
"text": "a(e^x − 1)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 147,
"question": "Which activation generalizes both ReLU and Leaky ReLU by taking a max over linear functions?",
"options": [
{
"key": "A",
"text": "maxout"
},
{
"key": "B",
"text": "sigmoid"
},
{
"key": "C",
"text": "tanh"
},
{
"key": "D",
"text": "step"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 148,
"question": "Compared with ReLU, maxout units:",
"options": [
{
"key": "A",
"text": "halve the number of parameters"
},
{
"key": "B",
"text": "double the number of parameters"
},
{
"key": "C",
"text": "have no parameters"
},
{
"key": "D",
"text": "remove nonlinearity"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 149,
"question": "The symmetry-breaking problem says that if all weights start equal, then:",
"options": [
{
"key": "A",
"text": "training is faster"
},
{
"key": "B",
"text": "gradients vanish immediately"
},
{
"key": "C",
"text": "neurons never differentiate (they stay symmetric)"
},
{
"key": "D",
"text": "the network becomes linear"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 150,
"question": "For a layer with n input neurons (fan-in = n), Xavier (Glorot) initialization draws the weights from a distribution whose standard deviation is proportional to:",
"options": [
{
"key": "A",
"text": "1/n"
},
{
"key": "B",
"text": "√n"
},
{
"key": "C",
"text": "n"
},
{
"key": "D",
"text": "1/√n"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 151,
"question": "He initialization is preferred over Xavier initialization when the network uses:",
"options": [
{
"key": "A",
"text": "ReLU"
},
{
"key": "B",
"text": "sigmoid"
},
{
"key": "C",
"text": "tanh"
},
{
"key": "D",
"text": "linear"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 152,
"question": "The goal of careful weight initialization is to keep the variance of activations across layers:",
"options": [
{
"key": "A",
"text": "growing exponentially"
},
{
"key": "B",
"text": "constant (stable)"
},
{
"key": "C",
"text": "shrinking exponentially"
},
{
"key": "D",
"text": "exactly zero"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 153,
"question": "Xavier initialization sets the variance of a layer's weights to approximately 1/n, where n is the number of input neurons to that layer. For a layer with 100 input neurons, the weight variance used is approximately:",
"options": [
{
"key": "A",
"text": "0.01"
},
{
"key": "B",
"text": "0.1"
},
{
"key": "C",
"text": "1"
},
{
"key": "D",
"text": "100"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 154,
"question": "Batch normalization normalizes the pre-activations of a layer using statistics (mean and variance) computed from:",
"options": [
{
"key": "A",
"text": "the whole dataset"
},
{
"key": "B",
"text": "the first sample only"
},
{
"key": "C",
"text": "a mini-batch"
},
{
"key": "D",
"text": "the labels"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 155,
"question": "Batch normalization first standardizes a layer's pre-activations across the mini-batch to produce standardized values ŝ (zero mean, unit variance). It then applies which transformation to ŝ, with γ and β being learnable parameters?",
"options": [
{
"key": "A",
"text": "y = ŝ"
},
{
"key": "B",
"text": "y = 0"
},
{
"key": "C",
"text": "y = σ(ŝ)"
},
{
"key": "D",
"text": "y = γŝ + β with learnable γ, β"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 156,
"question": "**(Select all that apply)** Which of the following are benefits/features of batch normalization?",
"options": [
{
"key": "A",
"text": "Allows us to be less careful about initialization."
},
{
"key": "B",
"text": "Helps keep the distribution of inputs to layers stable across batches."
},
{
"key": "C",
"text": "It is differentiable and can be backpropagated through."
},
{
"key": "D",
"text": "It removes the need for any activation function."
}
],
"correct": [
"A",
"B",
"C"
],
"multi": true
},
{
"n": 157,
"question": "Greedy layer-wise pre-training trains each layer:",
"options": [
{
"key": "A",
"text": "all at once"
},
{
"key": "B",
"text": "as an autoencoder and freezes it before training the next"
},
{
"key": "C",
"text": "only the output layer"
},
{
"key": "D",
"text": "randomly"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 158,
"question": "Unsupervised pre-training for deep networks was popularized by:",
"options": [
{
"key": "A",
"text": "LeCun (1998)"
},
{
"key": "B",
"text": "Krizhevsky (2012)"
},
{
"key": "C",
"text": "Hinton & Salakhutdinov (2006)"
},
{
"key": "D",
"text": "Rosenblatt (1958)"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 159,
"question": "Which statement about unsupervised pre-training is true?",
"options": [
{
"key": "A",
"text": "It removes the need for fine-tuning."
},
{
"key": "B",
"text": "It guarantees a global optimum."
},
{
"key": "C",
"text": "It increases the number of parameters."
},
{
"key": "D",
"text": "It effectively initializes weights to regions that capture data characteristics."
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 160,
"question": "In the activation-variance analysis of a deep network, let n be the number of input neurons to a layer, Var(w) the variance of its weights, Var(x) the variance of its input, and s_k the summed input (pre-activation) at layer k. The analysis yields Var(s_k) = [n·Var(w)]^k · Var(x). To keep the activation variance stable (neither exploding nor vanishing) across layers, we want:",
"options": [
{
"key": "A",
"text": "n·Var(w) = 1"
},
{
"key": "B",
"text": "n·Var(w) = 0"
},
{
"key": "C",
"text": "n·Var(w) = n"
},
{
"key": "D",
"text": "Var(w) = n"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 161,
"question": "The main disadvantage of one-hot word vectors is:",
"options": [
{
"key": "A",
"text": "they are low dimensional"
},
{
"key": "B",
"text": "they do not capture semantic similarity and are high dimensional"
},
{
"key": "C",
"text": "they are dense"
},
{
"key": "D",
"text": "they are trainable"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 162,
"question": "The Euclidean distance between any two distinct one-hot vectors is:",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "√2"
},
{
"key": "D",
"text": "|V|"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 163,
"question": "The cosine similarity between any two distinct one-hot vectors is:",
"options": [
{
"key": "A",
"text": "1"
},
{
"key": "B",
"text": "−1"
},
{
"key": "C",
"text": "0"
},
{
"key": "D",
"text": "0.5"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 164,
"question": "In a co-occurrence matrix (words × contexts) with a window of k words, entry (i, j) records:",
"options": [
{
"key": "A",
"text": "the one-hot value"
},
{
"key": "B",
"text": "the number of letters in the word"
},
{
"key": "C",
"text": "the label of word i"
},
{
"key": "D",
"text": "the number of times word j appears in the context of word i"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 165,
"question": "In word embeddings, let w be a target word and c a context word, with p(c|w) the conditional probability of context word c given word w and p(c) the marginal probability of c. The pointwise mutual information PMI(w, c) is defined as:",
"options": [
{
"key": "A",
"text": "log(p(c|w) / p(c))"
},
{
"key": "B",
"text": "p(w, c)"
},
{
"key": "C",
"text": "count(w, c)"
},
{
"key": "D",
"text": "p(w) + p(c)"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 166,
"question": "Truncated SVD applied to the positive pointwise mutual information (PPMI) co-occurrence matrix (i.e. keeping only the top singular values) is used to:",
"options": [
{
"key": "A",
"text": "increase sparsity"
},
{
"key": "B",
"text": "reduce dimensionality while preserving structure"
},
{
"key": "C",
"text": "remove labels"
},
{
"key": "D",
"text": "compute one-hot vectors"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 167,
"question": "After applying truncated SVD X = UΣVᵀ to the co-occurrence (or PPMI) matrix X, the low-dimensional word representations (word embeddings) are taken from:",
"options": [
{
"key": "A",
"text": "the reconstructed matrix X"
},
{
"key": "B",
"text": "the one-hot vectors"
},
{
"key": "C",
"text": "W_word = UΣ"
},
{
"key": "D",
"text": "the bias vector"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 168,
"question": "In the Continuous Bag of Words (CBOW) model, the network:",
"options": [
{
"key": "A",
"text": "predicts context words from the center word"
},
{
"key": "B",
"text": "classifies sentences"
},
{
"key": "C",
"text": "generates images"
},
{
"key": "D",
"text": "predicts the center word from a bag of context words"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 169,
"question": "In the skip-gram model, the network:",
"options": [
{
"key": "A",
"text": "predicts context words from the center word"
},
{
"key": "B",
"text": "predicts the center word from context"
},
{
"key": "C",
"text": "does both equally"
},
{
"key": "D",
"text": "uses no context"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 170,
"question": "In the Continuous Bag of Words (CBOW) word2vec model, the embedding vector v_w of a target word w is updated by v_w := v_w + η·u_c·(1 − ŷ_w), where η is the learning rate, u_c is a context vector, and ŷ_w is the model's predicted probability for word w. If ŷ_w ≈ 1 (the model already predicts the word well), then:",
"options": [
{
"key": "A",
"text": "v_w gets a large update"
},
{
"key": "B",
"text": "v_w gets almost no update"
},
{
"key": "C",
"text": "v_w is set to 0"
},
{
"key": "D",
"text": "u_c is updated instead"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 171,
"question": "The expensive softmax denominator problem in word2vec is addressed by:",
"options": [
{
"key": "A",
"text": "gradient clipping"
},
{
"key": "B",
"text": "dropout"
},
{
"key": "C",
"text": "negative sampling"
},
{
"key": "D",
"text": "batch normalization"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 172,
"question": "In negative sampling (used in word2vec), negative context words are sampled from the unigram word distribution raised to a power. The exponent used in this distribution is:",
"options": [
{
"key": "A",
"text": "1/2"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "2"
},
{
"key": "D",
"text": "3/4"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 173,
"question": "In hierarchical softmax, words are arranged as leaves of a binary tree and π(w) denotes the path from the root to the leaf for word w. The cost of computing p(w | v_c) (the probability of word w given context vector v_c) is proportional to:",
"options": [
{
"key": "A",
"text": "the length of the path |π(w)|"
},
{
"key": "B",
"text": "|V|"
},
{
"key": "C",
"text": "the number of negative samples"
},
{
"key": "D",
"text": "the square of the embedding size"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 174,
"question": "In GloVe, let v_i be the word vector for word i, b_i its bias term, and X_ij the number of times word j appears in the context of word i in the corpus. GloVe is trained so that the relationship between word vectors, biases, and co-occurrence counts satisfies:",
"options": [
{
"key": "A",
"text": "v_iᵀv_j = X_ij"
},
{
"key": "B",
"text": "v_iᵀv_j + b_i + b_j = log X_ij"
},
{
"key": "C",
"text": "v_i = v_j"
},
{
"key": "D",
"text": "v_iᵀv_j = 0"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 175,
"question": "**(Select all that apply)** Which of the following are valid ways to evaluate word embeddings?",
"options": [
{
"key": "A",
"text": "Analogy tasks"
},
{
"key": "B",
"text": "Training loss on the corpus"
},
{
"key": "C",
"text": "Correlation of model similarity with human semantic-relatedness judgments"
},
{
"key": "D",
"text": "Synonym detection accuracy"
}
],
"correct": [
"A",
"C",
"D"
],
"multi": true
},
{
"n": 176,
"question": "Baroni et al. (2014) found that, across tasks:",
"options": [
{
"key": "A",
"text": "count-based models outperform prediction-based models"
},
{
"key": "B",
"text": "both are exactly equal"
},
{
"key": "C",
"text": "neither works at all"
},
{
"key": "D",
"text": "prediction-based models outperform count-based models"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 177,
"question": "Levy et al. (2015) found that SVD:",
"options": [
{
"key": "A",
"text": "does better than prediction models on similarity but not on analogy tasks"
},
{
"key": "B",
"text": "is always worse"
},
{
"key": "C",
"text": "is always better"
},
{
"key": "D",
"text": "cannot be used for words"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 178,
"question": "The connection between SVD and word2vec is that word2vec implicitly factorizes a matrix whose entries are related to:",
"options": [
{
"key": "A",
"text": "raw word counts"
},
{
"key": "B",
"text": "PMI minus log(k) (k = number of negative samples)"
},
{
"key": "C",
"text": "one-hot vectors"
},
{
"key": "D",
"text": "class labels"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 179,
"question": "Consider the sentence \"government announces new education policy\". With a context window of 1 (each word is treated as a center word and paired with the immediate word on its left and the immediate word on its right), how many (center word, context word) pairs does the word \"education\" contribute?",
"options": [
{
"key": "A",
"text": "0"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "2"
},
{
"key": "D",
"text": "3"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 180,
"question": "If the vocabulary size is 6, the total number of entries in the co-occurrence matrix (words × words) is:",
"options": [
{
"key": "A",
"text": "6"
},
{
"key": "B",
"text": "12"
},
{
"key": "C",
"text": "36"
},
{
"key": "D",
"text": "64"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 181,
"question": "Applying a 5×5 convolution with stride 1 and padding 2 to a 128×128 image gives a spatial output size of:",
"options": [
{
"key": "A",
"text": "124×124"
},
{
"key": "B",
"text": "130×130"
},
{
"key": "C",
"text": "128×128"
},
{
"key": "D",
"text": "64×64"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 182,
"question": "If a convolutional layer uses 16 different filters, how many feature maps are produced?",
"options": [
{
"key": "A",
"text": "3"
},
{
"key": "B",
"text": "5"
},
{
"key": "C",
"text": "16"
},
{
"key": "D",
"text": "128"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 183,
"question": "After a 2×2 max-pooling layer with stride 2 on a 128×128 feature map, the new spatial size is:",
"options": [
{
"key": "A",
"text": "128×128"
},
{
"key": "B",
"text": "62×62"
},
{
"key": "C",
"text": "32×32"
},
{
"key": "D",
"text": "64×64"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 184,
"question": "The number of parameters in a convolutional layer with F×F filters, D1 input channels and K filters (including bias) is:",
"options": [
{
"key": "A",
"text": "K(F×F×D1 + 1)"
},
{
"key": "B",
"text": "F×F×D1"
},
{
"key": "C",
"text": "K×F×F"
},
{
"key": "D",
"text": "F×F×K×D1"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 185,
"question": "In a convolutional layer, let W1 be the input spatial width, F the filter (kernel) size, P the padding and S the stride. The output spatial size of the convolution is given by:",
"options": [
{
"key": "A",
"text": "W1 − F + 1"
},
{
"key": "B",
"text": "(W1 − F + 2P)/S + 1"
},
{
"key": "C",
"text": "W1/S"
},
{
"key": "D",
"text": "W1 + F"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 186,
"question": "A 1×1 convolution is primarily used for:",
"options": [
{
"key": "A",
"text": "increasing spatial size"
},
{
"key": "B",
"text": "pooling"
},
{
"key": "C",
"text": "aggregating along the depth / dimensionality reduction"
},
{
"key": "D",
"text": "padding"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 187,
"question": "Pooling layers primarily:",
"options": [
{
"key": "A",
"text": "increase the number of parameters"
},
{
"key": "B",
"text": "change the number of channels"
},
{
"key": "C",
"text": "remove color information"
},
{
"key": "D",
"text": "reduce spatial size while retaining key features"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 188,
"question": "Which CNN component mainly provides robustness when objects appear slightly shifted or rotated?",
"options": [
{
"key": "A",
"text": "pooling layers"
},
{
"key": "B",
"text": "softmax layers"
},
{
"key": "C",
"text": "the loss layer"
},
{
"key": "D",
"text": "bias terms"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 189,
"question": "VGG uses many stacked 3×3 convolutions instead of one large filter in order to:",
"options": [
{
"key": "A",
"text": "reduce the depth of the network"
},
{
"key": "B",
"text": "create deep representations with fewer parameters"
},
{
"key": "C",
"text": "eliminate pooling layers"
},
{
"key": "D",
"text": "add color information"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 190,
"question": "Inception modules use parallel filters of different sizes in order to:",
"options": [
{
"key": "A",
"text": "reduce parameters to zero"
},
{
"key": "B",
"text": "remove nonlinearity"
},
{
"key": "C",
"text": "capture features at multiple spatial scales"
},
{
"key": "D",
"text": "perform only pooling"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 191,
"question": "Skip (residual) connections in ResNet help primarily by:",
"options": [
{
"key": "A",
"text": "reducing the network depth"
},
{
"key": "B",
"text": "removing convolutions"
},
{
"key": "C",
"text": "increasing pooling"
},
{
"key": "D",
"text": "helping gradients flow and enabling training of very deep networks"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 192,
"question": "The ILSVRC 2015 winning ResNet used how many layers?",
"options": [
{
"key": "A",
"text": "8"
},
{
"key": "B",
"text": "19"
},
{
"key": "C",
"text": "22"
},
{
"key": "D",
"text": "152"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 193,
"question": "GoogLeNet's main efficiency gain came from:",
"options": [
{
"key": "A",
"text": "1×1 convolutions for dimensionality reduction"
},
{
"key": "B",
"text": "using larger images"
},
{
"key": "C",
"text": "more fully connected layers"
},
{
"key": "D",
"text": "removing all pooling"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 194,
"question": "Let x_i denote an input pixel and h_j the activation of a neuron in a CNN. Which technique visualizes the influence of input pixels on that neuron?",
"options": [
{
"key": "A",
"text": "adding more layers"
},
{
"key": "B",
"text": "computing ∂h_j/∂x_i (a saliency map)"
},
{
"key": "C",
"text": "increasing the batch size"
},
{
"key": "D",
"text": "applying dropout"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 195,
"question": "Occlusion experiments in CNN visualization involve:",
"options": [
{
"key": "A",
"text": "removing network layers"
},
{
"key": "B",
"text": "increasing depth"
},
{
"key": "C",
"text": "masking image patches and observing the change in predicted probability"
},
{
"key": "D",
"text": "adding noise to labels"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 196,
"question": "Guided backpropagation improves on vanilla saliency by:",
"options": [
{
"key": "A",
"text": "increasing the learning rate"
},
{
"key": "B",
"text": "averaging images"
},
{
"key": "C",
"text": "using a decoder network"
},
{
"key": "D",
"text": "also zeroing negative gradients (ReLU-like behavior on gradients)"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 197,
"question": "Deep Dream works by:",
"options": [
{
"key": "A",
"text": "maximizing the activation of selected neurons and feeding the modified image back into the network"
},
{
"key": "B",
"text": "minimizing the loss"
},
{
"key": "C",
"text": "training a network from scratch"
},
{
"key": "D",
"text": "removing neurons from a layer"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 198,
"question": "In neural style transfer, the style of an image is captured by:",
"options": [
{
"key": "A",
"text": "the content loss"
},
{
"key": "B",
"text": "the Gram matrix of activations"
},
{
"key": "C",
"text": "the class labels"
},
{
"key": "D",
"text": "only the first-layer weights"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 199,
"question": "In neural style transfer, the total loss is:",
"options": [
{
"key": "A",
"text": "L_content only"
},
{
"key": "B",
"text": "L_style only"
},
{
"key": "C",
"text": "α·L_content + β·L_style"
},
{
"key": "D",
"text": "L_content × L_style"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 200,
"question": "Fooling a CNN (adversarial examples) is done by:",
"options": [
{
"key": "A",
"text": "retraining the network"
},
{
"key": "B",
"text": "removing layers"
},
{
"key": "C",
"text": "increasing the image size"
},
{
"key": "D",
"text": "making minimal changes to the image to maximize the score of an incorrect class"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 201,
"question": "The key reason RNNs are suited to sequences is that they:",
"options": [
{
"key": "A",
"text": "maintain a hidden state that is shared across time steps"
},
{
"key": "B",
"text": "use a fixed-size input"
},
{
"key": "C",
"text": "have no parameters"
},
{
"key": "D",
"text": "ignore the order of inputs"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 202,
"question": "In a vanilla RNN, let x_i be the input at time step i, s_i the hidden state at step i (with s_{i−1} the previous hidden state), U the input-to-hidden weight matrix, W the hidden-to-hidden (recurrent) weight matrix, and σ the activation function. Ignoring the bias, the hidden-state update is:",
"options": [
{
"key": "A",
"text": "s_i = U x_i"
},
{
"key": "B",
"text": "s_i = σ(U x_i + W s_{i−1})"
},
{
"key": "C",
"text": "s_i = W x_i"
},
{
"key": "D",
"text": "s_i = σ(x_i)"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 203,
"question": "In an RNN with hidden size d and input size n, the recurrent weight matrix W has shape:",
"options": [
{
"key": "A",
"text": "n × d"
},
{
"key": "B",
"text": "d × k"
},
{
"key": "C",
"text": "d × d"
},
{
"key": "D",
"text": "n × n"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 204,
"question": "The total loss for a sequence in RNN training is:",
"options": [
{
"key": "A",
"text": "only the loss at the last time step"
},
{
"key": "B",
"text": "the product of the per-timestep losses"
},
{
"key": "C",
"text": "the mean of the inputs"
},
{
"key": "D",
"text": "the sum of the per-timestep losses"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 205,
"question": "Backpropagation through time (BPTT) differs from standard backprop because:",
"options": [
{
"key": "A",
"text": "gradients are summed over all time steps/paths"
},
{
"key": "B",
"text": "it does not use the chain rule"
},
{
"key": "C",
"text": "weights are not shared"
},
{
"key": "D",
"text": "it uses no loss function"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 206,
"question": "The vanishing/exploding gradient problem in RNNs arises from:",
"options": [
{
"key": "A",
"text": "the softmax function"
},
{
"key": "B",
"text": "the product of many Jacobians ∂s_j/∂s_{j−1} across time"
},
{
"key": "C",
"text": "the loss function"
},
{
"key": "D",
"text": "the input dimension"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 207,
"question": "In the analysis of gradient flow in RNNs, the bound ||∂s_t/∂s_k|| ≤ (γλ)^{t−k} is used, where s_t and s_k are the hidden states at time steps t and k (with t > k), W is the recurrent weight matrix, and γ is an upper bound on the derivative of the activation function. The quantity λ in this bound is:",
"options": [
{
"key": "A",
"text": "the learning rate"
},
{
"key": "B",
"text": "the loss value"
},
{
"key": "C",
"text": "the largest eigenvalue (norm) of W"
},
{
"key": "D",
"text": "the number of time steps"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 208,
"question": "In RNNs the gradient magnitude scales roughly like (γλ)^{t−k} (γ = bound on the activation derivative, λ = largest eigenvalue/norm of the recurrent weight matrix W). Vanishing gradients occur when:",
"options": [
{
"key": "A",
"text": "γλ > 1"
},
{
"key": "B",
"text": "γλ = 0"
},
{
"key": "C",
"text": "λ is complex"
},
{
"key": "D",
"text": "γλ < 1"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 209,
"question": "For a logistic (sigmoid) activation function σ, the upper bound on its derivative σ′(a_j) (where a_j is a pre-activation) that is used in the vanishing-gradient analysis is:",
"options": [
{
"key": "A",
"text": "1/4"
},
{
"key": "B",
"text": "1"
},
{
"key": "C",
"text": "2"
},
{
"key": "D",
"text": "0"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 210,
"question": "Truncated BPTT limits gradient computation by:",
"options": [
{
"key": "A",
"text": "using a smaller batch size"
},
{
"key": "B",
"text": "restricting the product to a window of τ steps"
},
{
"key": "C",
"text": "removing the recurrent connection"
},
{
"key": "D",
"text": "doubling the learning rate"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 211,
"question": "In an LSTM, the gate that decides how much of the previous cell state to keep is the:",
"options": [
{
"key": "A",
"text": "input gate"
},
{
"key": "B",
"text": "output gate"
},
{
"key": "C",
"text": "forget gate"
},
{
"key": "D",
"text": "reset gate"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 212,
"question": "In an LSTM cell, let i_t be the input gate, f_t the forget gate, s̃_t the candidate (new) cell state, and s_{t−1} the previous cell state, with ⊙ denoting element-wise multiplication. The cell-state update is:",
"options": [
{
"key": "A",
"text": "s_t = s_{t−1} + x_t"
},
{
"key": "B",
"text": "s_t = f_t + i_t"
},
{
"key": "C",
"text": "s_t = o_t ⊙ s_{t−1}"
},
{
"key": "D",
"text": "s_t = f_t ⊙ s_{t−1} + i_t ⊙ s̃_t"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 213,
"question": "In an LSTM cell, let o_t be the output gate, s_t the current cell state, and σ the logistic (sigmoid) function, with ⊙ denoting element-wise multiplication. The hidden output h_t of the cell is:",
"options": [
{
"key": "A",
"text": "o_t ⊙ σ(s_t)"
},
{
"key": "B",
"text": "s_t"
},
{
"key": "C",
"text": "i_t ⊙ f_t"
},
{
"key": "D",
"text": "σ(x_t)"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 214,
"question": "In an LSTM, which gate controls how much of the state is exposed/written to the next step?",
"options": [
{
"key": "A",
"text": "input gate"
},
{
"key": "B",
"text": "output gate"
},
{
"key": "C",
"text": "forget gate"
},
{
"key": "D",
"text": "candidate state"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 215,
"question": "In a GRU, the forget and input gates are:",
"options": [
{
"key": "A",
"text": "separate, exactly as in the LSTM"
},
{
"key": "B",
"text": "absent"
},
{
"key": "C",
"text": "tied (combined into a single update gate)"
},
{
"key": "D",
"text": "replaced by softmax"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 216,
"question": "The GRU candidate state uses which gate to modulate the previous state?",
"options": [
{
"key": "A",
"text": "output gate"
},
{
"key": "B",
"text": "forget gate"
},
{
"key": "C",
"text": "cell gate"
},
{
"key": "D",
"text": "reset gate"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 217,
"question": "**(Select all that apply)** In recurrent networks, let s_{t−1} denote the previous hidden state. Which of the following statements about LSTM vs GRU architectures are true?",
"options": [
{
"key": "A",
"text": "LSTM has separate input, forget and output gates."
},
{
"key": "B",
"text": "GRU has fewer gates than LSTM."
},
{
"key": "C",
"text": "GRU gates depend directly on s_{t−1}."
},
{
"key": "D",
"text": "LSTM has no cell state."
}
],
"correct": [
"A",
"B",
"C"
],
"multi": true
},
{
"n": 218,
"question": "Why do LSTM/GRU gates use sigmoid activations?",
"options": [
{
"key": "A",
"text": "to produce negative values"
},
{
"key": "B",
"text": "to produce values between 0 and 1 that scale the flow of information"
},
{
"key": "C",
"text": "to increase the number of parameters"
},
{
"key": "D",
"text": "to remove nonlinearity"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 219,
"question": "LSTMs mitigate vanishing gradients because the gradient can flow along a path that is multiplied by:",
"options": [
{
"key": "A",
"text": "the softmax output"
},
{
"key": "B",
"text": "the input size"
},
{
"key": "C",
"text": "the forget gates (which regulate gradient flow)"
},
{
"key": "D",
"text": "the loss value"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 220,
"question": "LSTMs do NOT fully solve which problem?",
"options": [
{
"key": "A",
"text": "vanishing gradients"
},
{
"key": "B",
"text": "long-term dependencies"
},
{
"key": "C",
"text": "gating of information"
},
{
"key": "D",
"text": "exploding gradients"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 221,
"question": "In a basic encoder–decoder (seq2seq) model, the encoder compresses the input into:",
"options": [
{
"key": "A",
"text": "a single fixed-length context vector"
},
{
"key": "B",
"text": "a sequence of attention weights"
},
{
"key": "C",
"text": "the output labels"
},
{
"key": "D",
"text": "the loss value"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 222,
"question": "In an image captioning model, let fc7 be the image feature vector extracted by a CNN, let y_1^{t−1} denote the previously generated words, and let y_t = j mean the t-th output word is vocabulary word j. The training loss L_t(θ) at step t is the negative log-likelihood of the true word given the image and previous words, namely:",
"options": [
{
"key": "A",
"text": "L_t(θ) = −log P(fc7 | y_1^{t−1}, y_t = j)"
},
{
"key": "B",
"text": "L_t(θ) = −log P(y_t = j | y_1^{t−1}, fc7)"
},
{
"key": "C",
"text": "L_t(θ) = −log P(y_1^{t−1} | y_t = j, fc7)"
},
{
"key": "D",
"text": "L_t(θ) = P(y_t = j | y_1^{t−1}, fc7)²"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 223,
"question": "The decoder in seq2seq generates output tokens:",
"options": [
{
"key": "A",
"text": "all at once in parallel"
},
{
"key": "B",
"text": "in random order"
},
{
"key": "C",
"text": "one at a time, conditioned on previously generated outputs"
},
{
"key": "D",
"text": "without any input"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 224,
"question": "In the attention mechanism of a sequence-to-sequence model, let e_jt be the alignment (score) between the encoder state at position j and the decoder at step t, and α_jt the resulting attention weight. The attention weight α_jt is obtained by:",
"options": [
{
"key": "A",
"text": "sampling a random number"
},
{
"key": "B",
"text": "copying the encoder state"
},
{
"key": "C",
"text": "dividing by the loss"
},
{
"key": "D",
"text": "applying softmax to the alignment scores e_jt"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 225,
"question": "In the attention formulation (Bahdanau-style), let s_{t−1} be the previous decoder hidden state, c_j the encoder hidden state (annotation) at input position j, and V_att, U_att, W_att the learnable attention parameters. The alignment score e_jt is computed as:",
"options": [
{
"key": "A",
"text": "e_jt = V_attᵀ tanh(U_att s_{t−1} + W_att c_j)"
},
{
"key": "B",
"text": "e_jt = s_{t−1} + c_j"
},
{
"key": "C",
"text": "e_jt = the loss"
},
{
"key": "D",
"text": "e_jt = x_j"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 226,
"question": "In attention-based sequence models, the context vector c_t (used by the decoder at step t) is computed as:",
"options": [
{
"key": "A",
"text": "only the last encoder state"
},
{
"key": "B",
"text": "a weighted sum of the encoder hidden states"
},
{
"key": "C",
"text": "the average of the decoder states"
},
{
"key": "D",
"text": "a zero vector"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 227,
"question": "A high attention weight on a particular input word indicates:",
"options": [
{
"key": "A",
"text": "that word is the most frequent"
},
{
"key": "B",
"text": "the decoder has finished"
},
{
"key": "C",
"text": "that word strongly influences the current output"
},
{
"key": "D",
"text": "the encoder failed on that word"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 228,
"question": "Why is softmax used when computing attention weights?",
"options": [
{
"key": "A",
"text": "to avoid overfitting"
},
{
"key": "B",
"text": "to reduce numerical precision"
},
{
"key": "C",
"text": "to limit the number of encoder states"
},
{
"key": "D",
"text": "to convert scores into a probability distribution"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 229,
"question": "Self-attention is especially useful for long documents because:",
"options": [
{
"key": "A",
"text": "all words can attend to each other regardless of distance"
},
{
"key": "B",
"text": "it shortens the document"
},
{
"key": "C",
"text": "it processes text strictly left to right"
},
{
"key": "D",
"text": "it removes the need for word embeddings"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 230,
"question": "The role of Query and Key vectors in self-attention is to:",
"options": [
{
"key": "A",
"text": "store the final predicted output tokens"
},
{
"key": "B",
"text": "determine how strongly one word should attend to another"
},
{
"key": "C",
"text": "define the vocabulary size"
},
{
"key": "D",
"text": "replace positional encodings"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 231,
"question": "In scaled dot-product attention, d_k denotes the dimension of the query and key vectors. The dot product of the query and key is scaled by 1/√d_k because:",
"options": [
{
"key": "A",
"text": "to reduce the number of tokens"
},
{
"key": "B",
"text": "to increase representational depth"
},
{
"key": "C",
"text": "to prevent large dot products from saturating the softmax"
},
{
"key": "D",
"text": "to simplify gradient computation"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 232,
"question": "Why are positional encodings needed in transformer models?",
"options": [
{
"key": "A",
"text": "to remove the dependence on embeddings"
},
{
"key": "B",
"text": "to replace attention weights"
},
{
"key": "C",
"text": "to control the learning rate"
},
{
"key": "D",
"text": "to provide information about the order of tokens"
}
],
"correct": [
"D"
],
"multi": false
},
{
"n": 233,
"question": "In image captioning with attention, instead of using a single global image feature such as the fc7 layer of a CNN, one typically uses:",
"options": [
{
"key": "A",
"text": "the output of a convolution layer (a spatial feature map)"
},
{
"key": "B",
"text": "the class labels"
},
{
"key": "C",
"text": "the loss value"
},
{
"key": "D",
"text": "the one-hot input"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 234,
"question": "A VGGNet conv5 feature map of size 14×14×512 can be viewed as:",
"options": [
{
"key": "A",
"text": "512 locations"
},
{
"key": "B",
"text": "196 locations, each with a 512-dimensional representation"
},
{
"key": "C",
"text": "14 locations"
},
{
"key": "D",
"text": "1 location"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 235,
"question": "Hierarchical attention applies attention at:",
"options": [
{
"key": "A",
"text": "the word level only"
},
{
"key": "B",
"text": "the image level only"
},
{
"key": "C",
"text": "both the word level and the sentence level"
},
{
"key": "D",
"text": "no particular level"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 236,
"question": "**(Select all that apply)** Which of the following are applications of encoder–decoder models?",
"options": [
{
"key": "A",
"text": "Image captioning"
},
{
"key": "B",
"text": "Document summarization"
},
{
"key": "C",
"text": "Sorting a list of numbers"
},
{
"key": "D",
"text": "Machine translation"
}
],
"correct": [
"A",
"B",
"D"
],
"multi": true
},
{
"n": 237,
"question": "In the encoder–decoder framework, the encoder and decoder are typically:",
"options": [
{
"key": "A",
"text": "both neural networks (e.g. RNNs/CNNs)"
},
{
"key": "B",
"text": "lookup tables"
},
{
"key": "C",
"text": "SVMs"
},
{
"key": "D",
"text": "decision trees"
}
],
"correct": [
"A"
],
"multi": false
},
{
"n": 238,
"question": "In image captioning, the encoder is often:",
"options": [
{
"key": "A",
"text": "an RNN"
},
{
"key": "B",
"text": "a CNN"
},
{
"key": "C",
"text": "a softmax layer"
},
{
"key": "D",
"text": "a loss function"
}
],
"correct": [
"B"
],
"multi": false
},
{
"n": 239,
"question": "Attention improves over the vanilla encoder–decoder because it:",
"options": [
{
"key": "A",
"text": "reduces the vocabulary size"
},
{
"key": "B",
"text": "removes the encoder"
},
{
"key": "C",
"text": "lets the decoder focus on relevant encoder states at each step"
},
{
"key": "D",
"text": "adds regularization only"
}
],
"correct": [
"C"
],
"multi": false
},
{
"n": 240,
"question": "In practice, attention weights are learned:",
"options": [
{
"key": "A",
"text": "only from manual word-alignment annotations"
},
{
"key": "B",
"text": "by clustering the inputs"
},
{
"key": "C",
"text": "randomly and fixed"
},
{
"key": "D",
"text": "without direct supervision, as part of the model"
}
],
"correct": [
"D"
],
"multi": false
}
];
