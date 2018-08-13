import React  from 'react'
import { createConsumer } from './../createConsumer'

import CloseSesionButton from './../components/closeSesionButton'
import CounterExample from './../components/counterExample'
import UserListExample from './../components/userListExample'
/*Este es un contenedor de pruebas... sirve como ejemplo de acceso al estado
de la aplicacion mediante react contextUi
*/
//invoca al boton para cerrar la sesion 
const ContainerComponent = context => (
  <div>

    <CloseSesionButton {...context} />
  <CounterExample {...context} />

  <UserListExample {...context} />

  </div>
)

const exampleContainer = createConsumer(ContainerComponent)

export default exampleContainer