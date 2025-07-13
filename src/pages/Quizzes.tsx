import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy, Target } from 'lucide-react';
import { getRandomQuestions, QuizQuestion } from '@/data/quizQuestions';
import { useToast } from '@/hooks/use-toast';
const Quizzes = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    if (quizStarted) {
      const randomQuestions = getRandomQuestions(10);
      setQuestions(randomQuestions);
      setSelectedAnswers(new Array(10).fill(-1));
    }
  }, [quizStarted]);
  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setShowResults(false);
    setSelectedAnswers(new Array(10).fill(-1));
  };
  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setShowResults(false);
    setSelectedAnswers([]);
    setQuestions([]);
  };
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };
  const nextQuestion = () => {
    if (selectedAnswers[currentQuestion] === -1) {
      toast({
        title: "Please select an answer",
        description: "Choose an option before proceeding to the next question.",
        variant: "destructive"
      });
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index]?.correctAnswer ? score + 1 : score;
    }, 0);
  };
  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };
  const getScoreFeedback = (score: number) => {
    if (score >= 9) return "Outstanding! You're a plastic pollution expert! 🌟";
    if (score >= 7) return "Great job! You have excellent knowledge about plastic pollution! 🎉";
    if (score >= 5) return "Good work! You're on the right track. Keep learning! 👍";
    return "There's room for improvement. Consider reading our educational content! 📚";
  };
  if (!quizStarted) {
    return <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-button-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Plastic Pollution Quiz
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Test your knowledge about plastic pollution and its environmental impact. This quiz contains 10 Hand Picked Questions questions from our database of 30 questions.</p>
          </div>

          <Card className="bg-card-gradient shadow-card border-0 max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-heading font-semibold">10 Questions</h3>
                  <p className="text-sm text-muted-foreground">Hand Picked Questions</p>
                </div>
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-heading font-semibold">Multiple Choice</h3>
                  <p className="text-sm text-muted-foreground">4 options each</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-heading font-semibold">Instant Results</h3>
                  <p className="text-sm text-muted-foreground">With explanations</p>
                </div>
              </div>
              
              <Button variant="hero" size="xl" onClick={startQuiz} className="w-full">
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>;
  }
  if (showResults) {
    const score = calculateScore();
    const percentage = score / questions.length * 100;
    return <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-button-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Quiz Results
            </h1>
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
              {score}/{questions.length}
            </div>
            <div className="text-2xl font-heading font-semibold mb-2">
              {percentage.toFixed(0)}% Correct
            </div>
            <p className="text-lg text-muted-foreground">
              {getScoreFeedback(score)}
            </p>
          </div>

          {/* Detailed Results */}
          <div className="space-y-6 mb-8">
            {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            return <Card key={question.id} className="bg-card-gradient border-0 shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-heading">
                        Question {index + 1}
                      </CardTitle>
                      <Badge variant={isCorrect ? "default" : "destructive"}>
                        {isCorrect ? <CheckCircle className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                        {isCorrect ? "Correct" : "Incorrect"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-4">{question.question}</p>
                    <div className="space-y-2 mb-4">
                      {question.options.map((option, optionIndex) => <div key={optionIndex} className={`p-3 rounded-md border ${optionIndex === question.correctAnswer ? 'bg-green-50 border-green-200 text-green-800' : optionIndex === userAnswer && !isCorrect ? 'bg-red-50 border-red-200 text-red-800' : 'bg-muted/30 border-border'}`}>
                          {option}
                        </div>)}
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm text-muted-foreground">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <Button variant="hero" size="lg" onClick={resetQuiz} className="mr-4">
              <RotateCcw className="w-4 h-4 mr-2" />
              Take Quiz Again
            </Button>
            <Button variant="cta" size="lg" asChild>
              <a href="/blogs">Learn More</a>
            </Button>
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-heading font-bold text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </h1>
            <Badge variant="secondary">
              {Math.round((currentQuestion + 1) / questions.length * 100)}% Complete
            </Badge>
          </div>
          <Progress value={(currentQuestion + 1) / questions.length * 100} className="h-3" />
        </div>

        {/* Question Card */}
        {questions[currentQuestion] && <Card className="bg-card-gradient shadow-card border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-heading">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => <button key={index} onClick={() => handleAnswerSelect(index)} className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${selectedAnswers[currentQuestion] === index ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-background hover:bg-accent border-border hover:border-primary/50'}`}>
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-3 text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </div>
                  </button>)}
              </div>
            </CardContent>
          </Card>}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))} disabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button variant="hero" onClick={nextQuestion}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>;
};
export default Quizzes;