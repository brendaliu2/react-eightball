import "./EightBall.css"
import { useState } from "react";
import answers from "./Answers";
import getRandom from "./helpers";


/** EightBall that displays random answers to questions
 *
 * Props: resp [{answer}...] is an array of answers
 * State: ball msg and color changes
 *
 * App -> EightBall
 */

function EightBall({ resp = answers }) {
  const question = { msg: "Think of a question", color: "black"};
  const [ball, setBall] = useState(question);

  function getBall() {
    const index = getRandom(resp.length - 1);
    setBall(resp[index]);
  }

  return (
    <div
      className="EightBall"
      onClick={getBall}
      style={{
        backgroundColor:  ball.color,
        }}>
      <p>{ ball.msg }</p>
    </div>
  )
}

export default EightBall;