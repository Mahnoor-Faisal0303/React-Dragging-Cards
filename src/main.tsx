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
import ReactDOM from 'react-dom/client'
import React from 'react'
import AppRoutes from './AppRoutes.tsx'
//import SelectionUI from './screens/SelectionUI.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
)