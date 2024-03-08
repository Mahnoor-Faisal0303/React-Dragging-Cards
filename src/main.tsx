<<<<<<< HEAD
// import React from 'react'
=======
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import App from "./AppRoutes"
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
=======
// // import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './screens/App.tsx'
// import React from 'react'
// //import SelectionUI from './screens/SelectionUI.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     {/* <SelectionUI/> */}
//     <App domElements={[]}/>
//   </React.StrictMode>,
// )

// import React from 'react'
>>>>>>> 15e180517e851330fc42bcf1f725a0ba556e1c81
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <App domElements={[]}/>
=======
    <AppRoutes/>
>>>>>>> 2b70df57f8c692e7c488cee109e34b42d6fcd281
>>>>>>> 15e180517e851330fc42bcf1f725a0ba556e1c81
  </React.StrictMode>,
)