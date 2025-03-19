import { useState } from "react";

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
  { id: 4, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 5, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 6, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
  { id: 7, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 8, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 9, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
  { id: 10, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 11, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 12, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
  { id: 13, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 14, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 15, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
];

const LiveExams = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleNext = () => {
    if (selectedAnswers[currentQuestion]) {
      setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    }
  };

  const handleRadioButtonChange = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleSubmit = () => {
    const results = questions.map((q, index) => ({
      question: q.question,
      selectedAnswer: selectedAnswers[index] || "No answer selected",
    }));
    console.log("Submitted Answers:", results);
    alert("Exam Submitted Successfully! Check the console for answers.");
  };

  const isNextDisabled = !selectedAnswers[currentQuestion];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Coding MCQs</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{questions[currentQuestion].question}</h3>
        <div className="mt-2 space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleRadioButtonChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {currentQuestion < questions.length - 1 ? (
          <button
            className={`px-4 py-2 rounded-lg ${
              isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={isNextDisabled}
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className={`px-4 py-2 rounded-lg ${
              isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            disabled={isNextDisabled}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default LiveExams;