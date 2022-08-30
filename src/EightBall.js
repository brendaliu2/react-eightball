
import { useState } from "react";
import answers from "./Answers";


/** EightBall that displays random answers to questions
 *
 * Props: resp [{answer}...] is an array of answers
 * State: ball msg and color changes
 *
 * App -> EightBall
 */

function EightBall({ resp = answers }) {
  const question = { msg: "Think of a question", color: "black"};
  const [ball, setAnswer] = useState(question);

  function getAnswer() {
    const index = getRandom(resp.length - 1);
    setAnswer(resp[index]);
  }

  return (
    <div
      className="EightBall"
      onClick={getAnswer}
      style={{
          backgroundColor:  ball.color,
          color: "white",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
      <p>{ ball.msg }</p>
    </div>
  )
}

/** Get a random integer between 0 and max
 * Helper function to EightBall
*/

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export default EightBall;