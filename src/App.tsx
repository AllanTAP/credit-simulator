import React, { ReactElement, useState } from 'react';
import FirstPage from './components/firstPage/firstPage';
import Resume from './components/resume/resume';
import SecondPage from './components/secondPage/secondPage';

function getPage(pageSelector: number, setPageSelector: React.Dispatch<React.SetStateAction<number>>): ReactElement {
  switch (pageSelector) {
    case 2:
      return <SecondPage pageSelector={pageSelector} setPageSelector={setPageSelector} />;
    case 3:
      return <Resume pageSelector={pageSelector} setPageSelector={setPageSelector} />;
    default:
      return <FirstPage pageSelector={pageSelector} setPageSelector={setPageSelector} />;
  }
}

const App = () => {
  const [pageSelector, setPageSelector] = useState<number>(1);

  return (
    <div>
      <h1>Credit simulator</h1>
      {getPage(pageSelector, setPageSelector)}
    </div>
  );
};

export default App;
