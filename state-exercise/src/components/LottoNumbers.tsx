type Props = {
    onLottoNumbers: () => void
  }
  
  const LottoNumbers = ({ onLottoNumbers }: Props) => {
    return <button onClick={onLottoNumbers}>Generate Lotto Numbers</button>
  }
  
  export default LottoNumbers