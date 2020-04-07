import React, { useEffect, useState } from 'react'
import {
  Header,
  PageContainer,
  CongratulationContainer,
  CongratulationBackground,
  Congratulation,
  SubCongratulation,
  ResultContainer,
  ResultHeader,
  ResultHeaderText,
  ResultHeaderDotedLine,
  ResultHeaderContainer,
  ResultCount,
  ResultCountItem,
  ResultCountItemText,
  ResultCountItemSubText,
  ResultByDifficulty,
  ResultByDifficultyItem,
  BottonContainer,
  ButtonSubmit,
  ButtonLabel,
} from './style'
import resultHeader from '~/assets/result-header.png'

const Result = ({
  navigation,
}) => {
  const [result, setResult] = useState({
    hits: 0,
    misses: 0,
    difficulties: {
      easy: {
        title: 'Fácil',
        hits: 0,
        misses: 0,
      },
      medium: {
        title: 'Médio',
        hits: 0,
        misses: 0,
      },
      hard: {
        title: 'Difícil',
        hits: 0,
        misses: 0,
      },
    }
  })

  useEffect(() => {
    const answeredQuestions = navigation.getParam('answeredQuestions')
    const hits = answeredQuestions.filter(item => item.isCorrectAnswer)
    const misses = answeredQuestions.filter(item => !item.isCorrectAnswer)
    setResult({
      ...result,
      hits: hits.length,
      misses: misses.length,
      difficulties: {
        ...result.difficulties,
        easy: {
          ...result.difficulties.easy,
          hits: hits.filter(item => item.difficulty === 'easy').length,
          misses: misses.filter(item => item.difficulty === 'easy').length,
        },
        medium: {
          ...result.difficulties.medium,
          hits: hits.filter(item => item.difficulty === 'medium').length,
          misses: misses.filter(item => item.difficulty === 'medium').length,
        },
        hard: {
          ...result.difficulties.hard,
          hits: hits.filter(item => item.difficulty === 'hard').length,
          misses: misses.filter(item => item.difficulty === 'hard').length,
        }
      }
    })
  }, [])

  return (
    <PageContainer>
      <Header>
        <CongratulationBackground
          source={resultHeader}
        >
          <CongratulationContainer>
            <Congratulation>Parabêns!</Congratulation>
            <SubCongratulation>Você finalizou o teste</SubCongratulation>
          </CongratulationContainer>
        </CongratulationBackground>
      </Header>
      <ResultContainer>
        <ResultHeaderContainer>
          <ResultHeaderDotedLine />
          <ResultHeader>
            <ResultHeaderText>
              Veja seu desempenho nas questões
            </ResultHeaderText>
          </ResultHeader>
        </ResultHeaderContainer>
        <ResultCount>
          <ResultCountItem>
            <ResultCountItemText>{result.hits}</ResultCountItemText>
            <ResultCountItemSubText>acertos</ResultCountItemSubText>
          </ResultCountItem>
          <ResultCountItem>
            <ResultCountItemText>{result.misses}</ResultCountItemText>
            <ResultCountItemSubText>erros</ResultCountItemSubText>
          </ResultCountItem>
        </ResultCount>
        <ResultByDifficulty>
          {
            Object.keys(result.difficulties).map(item => (
              <ResultByDifficultyItem key={item}>
                <ResultCountItemText>
                  {result.difficulties[item].title}
                </ResultCountItemText>
                <ResultCountItemSubText>
                  Acertos: {result.difficulties[item].hits}
                </ResultCountItemSubText>
                <ResultCountItemSubText>
                  Erros: {result.difficulties[item].misses}
                </ResultCountItemSubText>
              </ResultByDifficultyItem>
            ))
          }
        </ResultByDifficulty>
      </ResultContainer>
      <BottonContainer>
        <ButtonSubmit onPress={() => navigation.navigate('Categories')}>
          <ButtonLabel>
            Voltar ao Inicio
          </ButtonLabel>
        </ButtonSubmit>
      </BottonContainer>
    </PageContainer>
  )
}

export default Result
