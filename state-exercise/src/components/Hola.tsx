type Props  = {
    onHola: () => void
}

const Hola = ({ onHola }: Props) => {
  return <button onClick={onHola}>Hi</button>
}

export default Hola