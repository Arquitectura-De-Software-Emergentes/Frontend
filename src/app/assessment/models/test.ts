
  export interface TestResponse {
    id: number,
    title: string,
    numQuestions: number,
    minimunScore: number
  }


  export interface TestRequest{
    title: string,
    recruiterId: number,
    minimunScore: number|null
  }

  export interface QuestionRequest{
    statement: string,
    options: OptionRequest[]
    points: number|null
  }

  export interface OptionRequest{
    response: string,
    isCorrect: boolean
  }

