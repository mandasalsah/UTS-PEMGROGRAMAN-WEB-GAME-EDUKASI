const question = document.querySelector('#question');
const choices  = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const ScoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Table the meaning is ?',
        choice1: 'kursi',
        choice2: 'meja',
        choice3: 'buku',
        choice4: 'pensil',
        answer: 2,
    },
    {
        question: 'Black in indonesian is ?',
        choice1: 'puple',
        choice2: 'biru',
        choice3: 'hitam',
        choice4: 'red',
        answer: 3,
    },
    {
        question: 'You run with ?',
        choice1: 'legs',
        choice2: 'mouth',
        choice3: 'nouse',
        choice4: 'eyes',
        answer: 1,
    },
    {
        question: 'Aku Perempuan (the english sentence is) ?',
        choice1: ' i am girl',
        choice2: ' i am boy',
        choice3: ' we are girl',
        choice4: 'we are boy',
        answer: 1,
    },
    {
        question: 'Nenek in english is ?',
        choice1: 'sister',
        choice2: 'brother',
        choice3: 'grandfather',
        choice4: 'grandmother',
        answer: 4,
    },
    {
        question: 'What color is eyes ?',
        choice1: 'black',
        choice2: 'blue',
        choice3: 'green',
        choice4: 'pink',
        answer: 1,
    },
    {
        question: 'You have ... hands?',
        choice1: 'one (1)',
        choice2: 'three (3)',
        choice3: 'two (2)',
        choice4: 'four (4)',
        answer: 3,
    },
    {
        question: 'Horse in indonesian ?',
        choice1: 'kambing',
        choice2: 'kuda',
        choice3: 'kucing',
        choice4: 'macan',
        answer: 2,
    },
    {
        question: 'Ucapan Selamat pagi adalah ...?',
        choice1: 'Helllo',
        choice2: 'Good Afternoon',
        choice3: 'Good Morning',
        choice4: 'Good Bye',
        answer: 3,
    },
    {
        question: 'Teacher in Indonesian',
        choice1: 'dokter',
        choice2: 'guru',
        choice3: 'petani',
        choice4: 'nelayan',
        answer: 2,
    },
]

const SCORE_POINT = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        musik.pause();
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText =  currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToAplly = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToAplly === 'correct') {
            incrementScore(SCORE_POINT)
        }

        selectedChoice.parentElement.classList.add(classToAplly)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToAplly)
            getNewQuestions()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    ScoreText.innerText = score
}

startGame()
var musik=new Audio();
        musik.src="backsound.mp3"
        musik.loop=true;
        musik.play();

function mulaiAudio() {
    var mute=document.getElementById('mute');
    mute.addEventListener('click', fmute);

function fmute() {
    if(musik.muted){
        musik.muted = false;
        mute.style.background="url(mute.png)";
    }else{
        musik.muted = true;
        mute.style.background="url(unmute.png)";
    }
}
}
window.addEventListener('load', mulaiAudio);