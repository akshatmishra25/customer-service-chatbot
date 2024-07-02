import { useState } from 'react';
import questionsData from '../assets/data.json'; 

const FAQComponent = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestionId(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Service FAQs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <ul className="space-y-2">
            {questionsData.questions.map((q) => (
              <li key={q.id}>
                <button
                  className="w-full text-left p-2 bg-blue-100 rounded hover:bg-blue-200"
                  onClick={() => handleQuestionClick(q.id)}
                >
                  {q.question}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          {selectedQuestionId !== null && (
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                {questionsData.questions.find((q) => q.id === selectedQuestionId).question}
              </h2>
              <p>
                {questionsData.questions.find((q) => q.id === selectedQuestionId).answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
