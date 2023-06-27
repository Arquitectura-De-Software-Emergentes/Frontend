
  export interface TestResponse {
    id: number,
    title: string,
    numQuestions: number,
    minimunScore: number,
    questions:QuestionResponse[]
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


  export interface OptionResponse{
    id: number,
    response: string
  }

  export interface QuestionResponse{
    id: number,
    statement: string,
    options: OptionResponse[];
    responseId: number;
    points: number
  }



