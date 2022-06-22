import { useState } from "react";

const Showcase = () => {
  const [counter, setCounter] = useState(1);
  const [freeCounter, setFreeCounter] = useState(1);

  return (
    <section className="showcase">
      <div className="showcase-row">
        <div className="showcase-col">
          <img src="./images/nft.png" alt="nft" />
        </div>
        <div className="showcase-col">
          <p className="showcase-col-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            minus omnis inventore ullam, enim
          </p>
          <h2 className="showcase-col-sub-title">
            <span className="bold-text">1 FREE</span> per wallet, next{" "}
            <span className="bold-text">0.005</span>
          </h2>
          <div className="mint-container">
            <div className="mint mint-1">
              <div className="mint-input">
                <button
                  onClick={() => {
                    setCounter(counter - 1);
                    if (counter <= 1) {
                      setCounter(1);
                    }
                  }}
                >
                  -
                </button>
                <span> {counter} </span>
                <button onClick={() => setCounter(counter + 1)}> + </button>
              </div>
              <button className="mint-button">Mint</button>
            </div>
            <div className="mint mint-2">
              <div className="mint-input">
                <button
                  onClick={() => {
                    setFreeCounter(counter - 1);
                    if (freeCounter <= 1) {
                      setFreeCounter(1);
                    }
                  }}
                >
                  -
                </button>
                <span> {freeCounter} </span>{" "}
                <button onClick={() => setFreeCounter(freeCounter + 1)}>
                  +
                </button>
              </div>
              <button className="mint-button">Free({freeCounter})</button>
            </div>
          </div>
          <h4>No Discord . No Utility . No Roadmap . Instant Reveal</h4>
        </div>
      </div>

      <div id="background"></div>
    </section>
  );
};

export default Showcase;
