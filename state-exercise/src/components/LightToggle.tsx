type Props = {
    onLightToggle: () => void
  }
  
  const LightToggle = ({ onLightToggle }: Props) => {
    return <button onClick={onLightToggle}>Toggle dark/light mode</button>
  }
  
  export default LightToggle