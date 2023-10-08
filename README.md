# MT3 Challenge - Pendings

## Demo

https://carlink.github.io/MT3-pendings/

## Explicacion de entrega

La siguiente aplicacion fue hecha a medida de los requerimeitnos,

## Requirements

- Only front-end technologies are allowed. ✅
- The application looks like the wireframe. The color to be used in the application is #43ED3F. ✅: se uso para el titulo ya que es un color fuerte
- JS Framework: React. ✅
- When you click on the first crossed-square in the wireframe, it should display a form to add a new pending to the dashboard. Fields: Priority, text, status. Statuses allowed: Active, Done, Deleted. ✅
- There should be a way to mark the pendings as "Done". ✅
- The cards with "Done" status are not displayed in the dashboard. ✅
- The "Active" and "Done" counters are incremented according to the action performed. ✅
- The pending card is draggable to place it wherever the user needs it in the Dashboard. ✅
- The pendings could be deleted from the dashboard once created. ✅
- The cards with "Done" and "Deleted" statuses are not displayed in the dashboard. ✅ Cambié el comportamiento de Done a una especie de disabled para que hubiera una diferencia entre los dos estados

## Extras

- "Due date" is included. Rules: If the tasks should be completed within the current or the next day, the card color should be #FFD6D6. ✅
- Otherwise, the color is #FFFFFF. ✅
- Sort by "due date". ❌ no tuve tiempo de crear la logica, es algo complicado por el drag and drop, necesitaria dedicarle un buen rato a la logica mezclando el due date y el drag and drop
- Validations. ✅ aunque algo basica, implementé una validación express para el campo texto
- The application should not allow duplicated descriptions. ✅
- The application is published on GitHub Pages. Please share the application link. ✅ tambien implementé una github action para realizar el deploy al hacer merge a main

## Mis extras

- Se uso TypeScript y tipado en los elementos principales del sistema
- Se separaron los tipos y se utilizaron consistentemente en toda la app
- Se utilizaron linters y prettier para mantener cierta calidad de código
- Se separo por componentes toda la aplicacion
- Se Utilizo GitHub actions para realizar los deploys automaticos
- Se utilizó redux 8 con las ultimas especificaciones
- La aplicacion es relativamente fluida y se tomo en cuenta la experiencia de usuario
- Se añadieron toats para señalar los errores en la validación
- Definir los types, el state y manetener syncronia de todo es una tarea complicada tomando en cuenta que el tiempo de entrega fue corto
- Se documentaron los requerimeitnos cuplidos y las instrucciones para correr la app

## Mejorables

- Por los tiempos, hay warnings que no se pudieron resolver
- Se tuvieron que ignorar algunos errores de Typescript que no dieron tiempo de resolverse
- La interfaz y experiencia de usuario son bastante mejorables
- La solucion para que el boton de agregar neuvo task no sea draggable fue un parche, que aunque funcional, puede implementarse de mejor manera
- Los componentes se pudieron haber separado aun mejor, por tiempos ya no indague más en eso

## Install Instrucions

Install with force dependencies (because some libraries are not supported by the latest React version).

    npm install --force

run application

    npm run dev
