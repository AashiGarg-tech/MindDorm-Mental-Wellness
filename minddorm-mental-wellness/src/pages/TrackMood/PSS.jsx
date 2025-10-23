import React, { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const PSSAssessment = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, text: "In the last month, how often have you been upset because of something that happened unexpectedly?" },
    { id: 2, text: "In the last month, how often have you felt that you were unable to control the important things in your life?" },
    { id: 3, text: "In the last month, how often have you felt nervous and stressed?" },
    { id: 4, text: "In the last month, how often have you felt confident about your ability to handle your personal problems?" },
    { id: 5, text: "In the last month, how often have you felt that things were going your way?" },
    { id: 6, text: "In the last month, how often have you found that you could not cope with all the things that you had to do?" },
    { id: 7, text: "In the last month, how often have you been able to control irritations in your life?" },
    { id: 8, text: "In the last month, how often have you felt that you were on top of things?" },
    { id: 9, text: "In the last month, how often have you been angered because of things that happened that were outside of your control?" },
    { id: 10, text: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?" }
  ];

  const options = [
    { value: 0, label: "Never" },
    { value: 1, label: "Almost Never" },
    { value: 2, label: "Sometimes" },
    { value: 3, label: "Fairly Often" },
    { value: 4, label: "Very Often" }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateScore = () => {
    const positiveItems = [4, 5, 7, 8];
    let total = 0;
    
    Object.keys(answers).forEach(key => {
      const questionId = parseInt(key);
      if (positiveItems.includes(questionId)) {
        total += (4 - answers[key]);
      } else {
        total += answers[key];
      }
    });
    
    return total;
  };

  const getInterpretation = (score) => {
    if (score <= 13) return { level: "Low Stress", color: "text-green-600", bg: "bg-green-50", message: "Your stress levels appear to be low. You're managing life's demands well." };
    if (score <= 26) return { level: "Moderate Stress", color: "text-yellow-600", bg: "bg-yellow-50", message: "You're experiencing moderate stress. Consider incorporating stress-management techniques." };
    return { level: "High Stress", color: "text-red-600", bg: "bg-red-50", message: "Your stress levels are high. It may be helpful to speak with a mental health professional." };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  if (submitted) {
    const score = calculateScore();
    const interpretation = getInterpretation(score);

    return (
      <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB] py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-3xl font-bold text-[#000459]">Assessment Complete</h2>
            </div>

            <div className={`${interpretation.bg} border-l-4 border-${interpretation.color.split('-')[1]}-500 p-6 rounded-lg`}>
              <h3 className={`text-2xl font-bold ${interpretation.color} mb-2`}>
                Your Score: {score}/40
              </h3>
              <p className={`text-lg font-semibold ${interpretation.color} mb-3`}>
                {interpretation.level}
              </p>
              <p className="text-gray-700">{interpretation.message}</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This assessment is a screening tool and not a diagnostic instrument. 
                If you're concerned about your stress levels, please consult with a healthcare professional.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white rounded-full font-medium transition-transform hover:scale-105"
              >
                Take Again
              </button>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-medium transition-transform hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-[#B5D8EB] to-[#F4F8FB] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#5AA7E8] hover:text-[#3F8BD1] mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-[#000459]">
              Perceived Stress Scale (PSS-10)
            </h1>
            <p className="text-gray-600">
              This questionnaire measures your perception of stress over the past month.
            </p>
            <div className="bg-[#D6EAF4] border-l-4 border-[#5AA7E8] p-4 rounded-lg text-sm text-gray-700 text-left">
              <strong>Instructions:</strong> For each question, indicate how often you felt or thought a certain way.
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-gray-800">
                  {index + 1}. {question.text}
                </h3>
                <div className="space-y-2">
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() => handleAnswer(question.id, option.value)}
                        className="w-4 h-4 text-[#5AA7E8]"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="px-10 py-3 bg-[#5AA7E8] hover:bg-[#3F8BD1] text-white rounded-full font-medium transition-transform hover:scale-105 text-lg"
            >
              Submit Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSSAssessment;