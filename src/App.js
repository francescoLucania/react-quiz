import React from 'react';
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz';

function App() {
  return (
      <Layout>
        {/*<div style={{width: 400, border: '1px solid #000'}}>*/}
          {/*<h1>Layout</h1>*/}
        {/*</div>*/}
          <Quiz></Quiz>
      </Layout>
  );
}

export default App;
