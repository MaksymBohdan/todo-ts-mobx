import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  store: any;
};

const App: React.FC<Props> = observer(({ store }) => {
  return <>AAAs</>;
});

export default App;
