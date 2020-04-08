import Modal from 'react-native-modal'
import React, {
  useEffect, useState, Fragment
} from 'react'
import {
  Text,
  ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from './actions'
import {
  PageContainer,
  Header,
  AnswerList,
  AnswerButton,
  AnswerButtonSelected,
  QuestionText,
  LoaderContainer,
  BottonContainer,
  ButtonIcon,
  ButtonSubmit,
  ButtonLabel,
  ModalContent,
  ModalContentError,
  ModalText,
  ModalIcon,
} from './style'
import arrowIcon from '~/assets/arrow-icon.png'
import tickIcon from '~/assets/tick-icon.png'
import crossIcon from '~/assets/cross-icon.png'

const mapStateToProps = ({ questions }) => ({ questions })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const Question = ({
  navigation,
  questions,
  getQuestion
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [answeredQuestions] = useState([])

  useEffect(() => {
    const category = navigation.getParam('category')

    setSelectedAnswer(null)
    getQuestion({ category })
  }, [])

  useEffect(() => {
    setIsAnswered(false)
  }, [selectedAnswer])

  useEffect(() => {
    const { question } = questions
    if (question && isAnswered) {
      setIsCorrectAnswer(selectedAnswer === question.correct_answer)
      setModalVisible(true)
    }
  }, [isAnswered])

  const getDifficulty = () => {
    if (answeredQuestions.length >= 2) {
      const lastAnswered = answeredQuestions.slice(
        (answeredQuestions.length - 2), answeredQuestions.length
      )
      let misses = lastAnswered.filter(item => item.isCorrectAnswer === false
        && item.difficulty === 'medium')
      if (misses.length === 2) {
        return 'easy'
      }

      misses = lastAnswered.filter(item => item.isCorrectAnswer === false
        && item.difficulty === 'hard')
      if (misses.length === 2) {
        return 'medium'
      }

      let hits = lastAnswered.filter(item => item.isCorrectAnswer
        && item.difficulty === 'medium')
      if (hits.length === 2) {
        return 'hard'
      }

      hits = lastAnswered.filter(item => item.isCorrectAnswer
        && item.difficulty === 'easy')
      if (hits.length === 2) {
        return 'medium'
      }
    }

    return 'medium'
  }

  const nextQuestion = () => {
    const category = navigation.getParam('category')
    setSelectedAnswer(null)
    setModalVisible(false)
    answeredQuestions.push({
      difficulty: questions.question.difficulty,
      isCorrectAnswer
    })
    if (answeredQuestions.length === 10) {
      navigation.navigate('Result', { category, answeredQuestions })
    } else {
      getQuestion({ category, difficulty: getDifficulty() })
    }
  }

  if (!questions.question || questions.loading) {
    return (
      <LoaderContainer>
        <ActivityIndicator
          size="large"
        />
      </LoaderContainer>
    )
  }

  return (
    <PageContainer>
      <Header>Questão {answeredQuestions.length + 1}</Header>
      <QuestionText>{questions.question.question}</QuestionText>
      <AnswerList
        data={questions.question.answers}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Fragment>
            {
              selectedAnswer
              && selectedAnswer === item
                ? (
                  <AnswerButtonSelected
                    onPress={() => setSelectedAnswer(item)}
                  >
                    <Text>{item}</Text>
                  </AnswerButtonSelected>
                ) : (
                  <AnswerButton
                    onPress={() => setSelectedAnswer(item)}
                  >
                    <Text>{item}</Text>
                  </AnswerButton>
                )
            }
          </Fragment>
        )}
      />
      {
        selectedAnswer !== null
        && !isAnswered
        && (
        <BottonContainer>
          <ButtonSubmit onPress={() => setIsAnswered(true)}>
            <ButtonLabel>Responder</ButtonLabel>
          </ButtonSubmit>
        </BottonContainer>
        )
      }
      {
        selectedAnswer !== null
        && isAnswered
        && (
        <BottonContainer>
          <ButtonSubmit onPress={() => nextQuestion()}>
            <ButtonLabel>
              Avançar
              <ButtonIcon
                source={arrowIcon}
              />
            </ButtonLabel>
          </ButtonSubmit>
        </BottonContainer>
        )
      }
      <Modal
        isVisible={modalVisible}
        coverScreen={false}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
          margin: 0
        }}
      >
        {
          isCorrectAnswer
            ? (
              <ModalContent>
                <ModalIcon
                  source={tickIcon}
                />
                <ModalText>
                  Você acertou!
                </ModalText>
              </ModalContent>
            ) : (
              <ModalContentError>
                <ModalIcon
                  source={crossIcon}
                />
                <ModalText>
                  Você errou!
                </ModalText>
              </ModalContentError>
            )
        }
      </Modal>
    </PageContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
