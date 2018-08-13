//acciones por defecto
export const createActions = store => ({
  //accion para logear o deslogear
  login: (status) => store.setState({IS_LOGED : status}),

  //accion de ejemplo para probar REACT CONTEXT API (suma o resta valores al estado count)
  increment: (num) => store.setState({ count: store.state.count + num }),
  decrement: (num) => store.setState({ count: store.state.count - num }),

  })