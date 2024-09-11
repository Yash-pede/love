import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const App = () => {
  const [loveSteps, setLoveSteps] = useState(0);
  const [name, setName] = useState("");

  function moveButton() {
    const button = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen w-full text-center relative">
      {loveSteps === 0 && (
        <>
          <div className="flex flex-col gap-4">
            <img
              className="w-56 h-auto"
              src="/loveshoot.gif"
              alt="Love Shoot"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl">What&apos;s your name ??</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoveSteps(1);
                  setName(e.target[0].value);
                }}
                className="flex flex-col gap-4"
              >
                <Input />
                <Button>Submit!</Button>
              </form>
            </div>
          </div>
        </>
      )}
      {loveSteps === 1 && (
        <>
          <div className="flex flex-col gap-4 items-center justify-center">
            <img className="w-96 h-auto" src="/love.gif" alt="Love" />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl">Wanna go on a date with me {name}?</h3>
              <div className="flex gap-2 mx-auto">
                <Button onClick={() => setLoveSteps(2)}>Yes</Button>
                <Button
                  id="noButton"
                  variant="destructive"
                  onMouseEnter={moveButton}
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {loveSteps === 2 && (
        <>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <img className="w-44 h-auto" src="/catblush.gif" alt="Love" />
            <h4 className="text-2xl font-bold ">
              Can&apos; wait to see you {name}
            </h4>
            <div className="flex w-full justify-between">
              <img src="/cattravel.gif" alt="Love" className="w-64   h-auto" />
              <h4 className="text-3xl font-bold text-center text-red-500">
                Let&apos; GOO!!
              </h4>
            </div>
            <img src="/ig.png" alt="Love" className="w-64 h-auto" />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
