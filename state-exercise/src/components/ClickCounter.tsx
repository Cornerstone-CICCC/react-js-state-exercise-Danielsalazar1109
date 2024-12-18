type Props = {
    onCounter: () => void
  }
  const ClickCounter = ({ onCounter }: Props) => {
    return <button onClick={onCounter}>ClickCounter</button>
  }
  
  export default ClickCounter