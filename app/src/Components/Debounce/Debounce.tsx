import { useRef, useState, type ChangeEvent } from "react";
import useFruitSearch from "./useFruitSearch";

export default function Debounce() {
  const { getFruits, isLoading, error } = useFruitSearch();

  const [userInput, setUserInput] = useState("");
  const [serverReply, setServerReply] = useState("resp: ");
  const setTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null)

  async function userInputHandler(e: ChangeEvent<HTMLInputElement>) {

    setUserInput(e.target.value);

    // Handle abort requests
    if(abortControllerRef.current)
      abortControllerRef.current.abort()

    // Create new controller for this debounced request
    abortControllerRef.current = new AbortController()

    // handle debouce
    if (setTimeoutRef.current) clearTimeout(setTimeoutRef.current);
    
    setTimeoutRef.current = setTimeout(async () => {
      // we need to use e.target.value instead of userInput, otherwise we have stale data
      const names = await getFruits(e.target.value, abortControllerRef.current?.signal);
      setServerReply("resp: " + names);
    }, 1500);
  }

  function handleAbort(){
    if(abortControllerRef.current)
      abortControllerRef.current.abort()
  }

  return (
    <>
      <label>{isLoading ? 'loading..' : error ? error : serverReply}</label>
      <input
        type="text"
        onChange={(e) => userInputHandler(e)}
        value={userInput}
      ></input>
      <button onClick={handleAbort}>Abort</button>
    </>
  );
}
