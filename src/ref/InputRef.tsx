import {useRef,useEffect} from  "react"

const InputRef=()=>{
  const inputRef=useRef<HTMLInputElement>(null!)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return(
    <div>
      <label>User Name : </label>
      <input ref={inputRef} />
    </div>
  )
}
export default InputRef
