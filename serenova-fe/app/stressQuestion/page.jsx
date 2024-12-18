"use client";

import axios from "axios";
import { useState, useEffect } from "react";
// import NavbarKiri from "@components/NavbarKiri";
import Likert5 from "@components/stressQuestion/Likert5";
import LikertTF from "@components/stressQuestion/LikertTF";
import NavAtas from "@components/NavAtas";
import dynamic from "next/dynamic";

const fetchQuestions = async () => {
    const response = await fetch('/api/pertanyaan');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

const NavbarKiri = dynamic(() => import('@components/NavbarKiri'), {
    ssr: false,
});

const Page = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const fetchedQuestions = await fetchQuestions();
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        loadQuestions();
    }, []);

    // Log the answers whenever they change
    useEffect(() => {
        console.log("User answers updated:", userAnswers);
    }, [userAnswers]);

    const handleContinue = () => {
        if (!selectedOption) return;

        const currentQ = questions[currentQuestion];
        let answerValue;

        if (currentQ.type === 'truefalse') {
            answerValue = currentQ.value[selectedOption]; // True/False
        } else if (currentQ.type === 'likert5') {
            answerValue = selectedOption; // Likert scale
        }

        // Update array
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = answerValue;
        setUserAnswers(updatedAnswers);

        // Log after updating
        console.log("Answer for question", currentQuestion + 1, ":", answerValue);
        console.log("Updated answers array:", updatedAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedOption(null); // Reset selected option
        } else {
            const response = axios.post('/api/kuesioner', { answers: updatedAnswers });
            alert("Questionnaire finished!");
        }
    };

    const currentQ = questions[currentQuestion];

    return (
        <div className="flex h-screen flex-col md:flex-row">
            {/* NAVBAR ATAS FOR SMALL SCREENS */}
            <div className="block md:hidden">
                <NavAtas />
            </div>

            {/* NAVBAR KIRI FOR MEDIUM AND ABOVE */}
            <div className="hidden md:block md:w-64 h-full py-7">
                <NavbarKiri />
            </div>
            {/* MAIN */}
            <div
                className="flex-1 h-full p-4 overflow-y-auto"
                style={{
                    background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
                }}>
                <h1 className="text-bgButton font-semibold sm:text-2xl mt-3">
                    Stress Checker - Questionnaire
                </h1>

                <div className="grid mt-5 bg-white p-7 rounded-lg">
                    {/* INDICATOR */}
                    <div>
                        <p className="font-bold text-bgButton text-lg">
                            <span className="number-indicator">{currentQuestion + 1} </span>of <span>{questions.length}</span>
                        </p>
                        <div className="flex gap-x-1 justify-center items-center mt-1">
                            {Array.from({ length: questions.length }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`py-0.5 flex-1 rounded-lg min-w-[4px] sm:min-w-[8px] lg:min-w-[12px] ${index < currentQuestion ? 'bg-[#00B4BE]' : 'bg-[#D9D9D9]'
                                        }`}>
                                    {/* EMPTY */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* QUESTION */}
                    <div className="mt-10">
                        <p className="text-[#747474] text-lg">
                            Question <span className="text-indicator">{currentQuestion + 1}</span>
                        </p>
                        <p className="question text-2xl font-medium">
                            {currentQ ? currentQ.question : "Loading..."}
                        </p>
                        {/* ANSWERS */}
                        {currentQ && currentQ.type === "truefalse" && (
                            <LikertTF selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                        )}
                        {currentQ && currentQ.type === "likert5" && (
                            <Likert5 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                        )}
                    </div>
                    {/* BUTTONS */}
                    <div className="flex justify-between mt-16">
                        {/* Previous Button */}
                        <button
                            className={`shadow-lg rounded-lg px-4 py-2 text-[#2B3030] text-sm font-bold ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => {
                                if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
                            }}
                            disabled={currentQuestion === 0}>
                            Previous
                        </button>

                        {/* Continue/Finish Button */}
                        <button
                            className={`bg-bgButton text-sm font-bold text-white rounded-lg px-4 py-2 ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleContinue}
                            disabled={!selectedOption}>
                            {currentQuestion === questions.length - 1 ? 'Finish' : 'Continue'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
