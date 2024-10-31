import { Button } from "antd";
import { SubscribeStyled } from "./styled";

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
        <Button size="large" type="primary" danger>
          Subsribe Now
        </Button>
      </div>
    </SubscribeStyled>
  );
};
export default Subscribe;
