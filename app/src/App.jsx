import React from "react";
 
const RemoteButton = React.lazy(() => import('lib/Button')) ;
 
const App = () => {
  console.log(2);
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton>remote button</RemoteButton>
      </React.Suspense>
    </div>
  )
};
 
export default App;