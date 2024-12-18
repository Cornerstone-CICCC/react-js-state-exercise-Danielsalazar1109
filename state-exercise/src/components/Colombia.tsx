type Props = {
    onColombia: () => void
}

const Colombia = ({ onColombia }: Props) => {
  return <button onClick={onColombia}>Colombia</button>
}

export default Colombia