import { useEffect, useRef, useState } from "react";
import useGetFruits from "./useFruitSearch";

export default function Debounce() {
  const { getFruits, getFruitsIsLoading, getFruitsError } = useGetFruits();

  const [userInput, setUserInput] = useState("");
  const [serverReply, setServerReply] = useState("");
  const setTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() =>{

    if(userInput === '') return

    // Handle abort requests
    if(abortControllerRef.current)
      abortControllerRef.current.abort()

    // Create new controller for this debounced request
    abortControllerRef.current = new AbortController()

    // handle debouce
    if (setTimeoutRef.current) clearTimeout(setTimeoutRef.current);
    
    setTimeoutRef.current = setTimeout(async () => {
      const fruits = await getFruits(userInput, abortControllerRef.current?.signal);
      setServerReply(fruits);
    }, 1500);

    return () => {
      if (setTimeoutRef.current) clearTimeout(setTimeoutRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort()

    }
  // getFruits shouldn't have closure variables that get stale,
  // but to be on the safe side, add a dep on getFruits to avoid stale data
  }, [userInput, getFruits]) 


  function handleAbort(){
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
