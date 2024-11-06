import { Button, Popover } from "antd";
import { SubscribeStyled } from "./styled";
import MessageAntd from "../Headers/MessageAntd";

const Subscribe = () => {
  return (
    <SubscribeStyled>
      <div className="subscribe-container">
        <h1 className="heading">Never Stop Looking</h1>
        <div className="bg-layer">
          <div className="price-holder flex">
            <h2>39.99$</h2>
            <h2 className="price-lined">49.99$</h2>
          </div>
        </div>
           <MessageAntd>
              {(showAlert) => (
                <Button
                  type="primary"
                  onClick={showAlert}
                  danger
                  className="button"
                >
                  Subscribe Now
                </Button>
              )}
            </MessageAntd>
      </div>
    </SubscribeStyled>
  );
};
export default Subscribe;
