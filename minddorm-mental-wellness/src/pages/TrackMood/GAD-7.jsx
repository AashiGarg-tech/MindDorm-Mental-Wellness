import React, { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const GAD7Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, text: "Feeling nervous, anxious, or on edge" },
    { id: 2, text: "Not being able to stop or control worrying" },
    { id: 3, text: "Worrying too much about different things" },
    { id: 4, text: "Trouble relaxing" },
    { id: 5, text: "Being so restless that it's hard to sit still" },
    { id: 6, text: "Becoming easily annoyed or irritable" },
    { id: 7, text: "Feeling afraid as if something awful might happen" }
  ];

  const options = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const getInterpretation = (score) => {
    if (score <= 4) return { 
      level: "Minimal Anxiety", 
      color: "text-green-600", 
      bg: "bg-green-50",
      message: "Your responses suggest minimal anxiety. Continue practicing self-care and stress management."
    };
    if (score <= 9) return { 
      level: "Mild Anxiety", 
      color: "text-yellow-600", 
      bg: "bg-yellow-50",
      message: "Your responses suggest mild anxiety. Consider relaxation techniques and monitoring your symptoms."
    };
    if (score <= 14) return { 
      level: "Moderate Anxiety", 
      color: "text-orange-600", 
      bg: "bg-orange-50",
      message: "Your responses suggest moderate anxiety. Consider speaking with a mental health professional for support."
    };
    return { 
      level: "Severe Anxiety", 
      color: "text-red-600", 
      bg: "bg-red-50",
      message: "Your responses suggest severe anxiety. Professional treatment is strongly recommended."
    };
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
                Your Score: {score}/21
              </h3>
              <p className={`text-lg font-semibold ${interpretation.color} mb-3`}>
                {interpretation.level}
              </p>
              <p className="text-gray-700">{interpretation.message}</p>
            </div>

            <div className="bg-[#D6EAF4] border-l-4 border-[#5AA7E8] p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-gray-800">💡 Coping Strategies for Anxiety:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice deep breathing exercises (4-7-8 technique)</li>
                <li>• Try progressive muscle relaxation</li>
                <li>• Engage in regular physical activity</li>
                <li>• Maintain a consistent sleep schedule</li>
                <li>• Limit caffeine and alcohol intake</li>
                <li>• Practice mindfulness or meditation</li>
                <li>• Connect with supportive friends or family</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This assessment is a screening tool and not a diagnostic instrument. 
                If you're experiencing significant anxiety, please consult with a mental health professional for proper evaluation and treatment.
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
              Generalized Anxiety Disorder Scale (GAD-7)
            </h1>
            <p className="text-gray-600">
              This questionnaire screens for anxiety symptoms over the past two weeks.
            </p>
            <div className="bg-[#D6EAF4] border-l-4 border-[#5AA7E8] p-4 rounded-lg text-sm text-gray-700 text-left">
              <strong>Instructions:</strong> Over the last 2 weeks, how often have you been bothered by the following problems?
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
            <p className="text-xs text-gray-500 mt-3">
              All responses are confidential and used only for your self-assessment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GAD7Assessment;