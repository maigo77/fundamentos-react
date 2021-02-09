// nao importa o react porque nao usa codigo jsx

export default props => {
  if(props.test){
    return props.children
  }else {
    return false
  }
}