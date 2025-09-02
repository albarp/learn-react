import { useState, type ChangeEvent, type FormEvent } from "react";

export const StatusValues = {
    Typing: 'typing',
    Submitting: 'submitting',
    Success: 'success'
} as const

export type Status = typeof StatusValues[keyof typeof StatusValues]

export default function Quiz() {

  const [status, setStatus] = useState<Status>('typing')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')

  if (status === 'success') return <h1>That's right!</h1>;

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    setStatus('submitting')
    try{
      await submitForm(answer)
      setStatus('success')
    }
    catch(e: unknown){
      setStatus('typing')
      if(e instanceof Error) {
        setError(e.message)
      }
      else{
        setError('An unknown error occurred')
      }
    }
  }

  function handleAnswerChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value)
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea 
          disabled={status === "submitting"} 
          onChange={ (e) => handleAnswerChange(e)}
          value={answer}>
          </textarea>
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          type='submit'>
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );

  function submitForm(answer: string): Promise<string | void> {
    return new Promise<string | void>( (resolve, reject) => {
      setTimeout(()=> {
        const shouldError = answer.toLowerCase() !== 'lima'
        if(shouldError)
          reject(new Error("Good guess but a wrong answer. Try again!"))
        resolve()
      },
      1500)
    })
  }
}
