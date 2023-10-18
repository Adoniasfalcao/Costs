import { useState, useEffect } from "react";
import styles from "./layout styles/Message.module.css";

function Message({ type, message }) {
  const [visible, setVisible] = useState(false);

  //Message visibility timer
  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
      
    } else {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{message} </div>
      )}
    </>
  );
}

export default Message;
