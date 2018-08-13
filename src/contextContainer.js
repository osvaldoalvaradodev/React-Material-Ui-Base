import React  from 'react'
import { createConsumer } from './createConsumer'

import MainView from './views/mainView'

//invoca la pantalla principal, pasandole como parametro el contexto para poder utilizar CONTEXT APi de react
const ContainerComponent = context => (
  <MainView { ...context } />
)

const ContextContainer = createConsumer(ContainerComponent)

export default ContextContainer