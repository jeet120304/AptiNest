import { useState } from "react";

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
];

const LiveExams = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
// currentQuestion state to move to the next question.prev+1 icreses question index.thats all
  const handleNext = () => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));

//uesd to select answer for current qs
  const handleradioButtonChange = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  //submit answer
  const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    alert("Exam Submitted Successfully!");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Coding Mcqs</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{questions[currentQuestion].question}</h3>
        <div className="mt-2 space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleradioButtonChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleNext}
          disabled={currentQuestion >= questions.length - 1}
        >
          Next
        </button>
        {currentQuestion === questions.length - 1 && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
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

