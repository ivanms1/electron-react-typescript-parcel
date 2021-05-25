import React, { useState } from "react";

import styles from "./App.module.scss";

const { api } = window;

function App() {
  const [appOS, setAppOS] = useState(null);

  const getOs = async () => {
    const os = await api.getAppOS();

    setAppOS(os);
  };

  return (
    <div>
      <h1 className={styles.Title}>Hello World</h1>
      <button type="button" onClick={getOs}>
        Get App OS
      </button>
      {appOS && <p>{appOS}</p>}
    </div>
  );
}

export default App;
