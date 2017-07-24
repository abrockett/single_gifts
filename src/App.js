import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import fpclogo from './svg/fpclogo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Administration: 0,
        Apostleship: 0,
        'Artistic Expression': 0,
        Craftsmanship: 0,
        Discernment: 0,
        Evangelism: 0,
        Exhortation: 0,
        Faith: 0,
        Giving: 0,
        Helps: 0,
        Hospitality: 0,
        Intercession: 0,
        Knowledge: 0,
        Leadership: 0,
        Mercy: 0,
        Prophecy: 0,
        Shepherding: 0,
        Teaching: 0,
        Wisdom: 0,
        Healing: 0,
        'Miraculous Powers': 0,
        Tongues: 0,
        'Interpretation of Tongues': 0
      },
      results: []
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    //TODO: get rid of this shuffling
    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const answerParts = answer.split('|');
    const type = answerParts[0];
    const value = Number(answerParts[1]);
    const updatedAnswersCount = update(this.state.answersCount, {
      [type]: {$apply: (currentValue) => currentValue + value}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    console.log(answersCount);
    console.log(answersCountKeys);
    console.log(answersCountValues);
    console.log(maxAnswerCount);

    answersCountKeys.sort(function(a, b) { return answersCount[b] - answersCount[a] });
    console.log(answersCountKeys);

    return answersCountKeys
    //return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(results) {
    this.setState({ results: results });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.results} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={fpclogo} alt="logo" />
          <h2>FPC Spiritual Gifts Inventory</h2>
        </div>
        {this.state.results.length > 0 ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
