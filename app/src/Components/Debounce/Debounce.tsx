import { useEffect, useRef, useState } from "react";
import useGetFruits from "./useFruitSearch";

export default function Debounce() {
  const { getFruits, getFruitsIsLoading, getFruitsError } = useGetFruits();

  const [userInput, setUserInput] = useState("");
  const [serverReply, setServerReply] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() =>{

    // Handle abort requests
   const controller = new AbortController()
   abortControllerRef.current = controller // save it so that the abort button can access it
    
    const timeoutId = setTimeout(async () => {
      const fruits = await getFruits(userInput, controller.signal);
      setServerReply(fruits);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
      controller.abort()

    }
  // getFruits shouldn't have closure variables that get stale,
  // but to be on the safe side, add a dep on getFruits to avoid stale data
  }, [userInput, getFruits]) 


  function handleAbort(){
    // always abort the last abort controller
    if(abortControllerRef.current)
      abortControllerRef.current.abort()
  }

  return (
    <>
      <label>{getFruitsIsLoading ? 'loading..' : getFruitsError ? getFruitsError : serverReply}</label>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      ></input>
      <button onClick={handleAbort}>Abort</button>
    </>
  );
}
