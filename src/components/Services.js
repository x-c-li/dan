import "./Services.scss";
import BrandList from "./BrandList";
import Brands from "./Brands";

function Services() {
  return (
    <div className="service-container">
      <div className="serviceBox">
        <div className="serviceList">
          <h4>Services:</h4>
          <ul>
            <li>Liquid damage repair</li>
            <li>No power repair</li>
            <li>Device randomly restarting</li>
            <li>Motherboard/logic board repair</li>
          </ul>
          <div>
            <h4>Warranty</h4>
            <p>Work warranty: 90 days</p>
            <p>Part warranties: 90 days (withstanding no physical damage)</p>
          </div>
        </div>

        <div className="brandList">
          <h4>Brands:</h4>
          <BrandList />
        </div>
      </div>
    </div>
  );
}

export default Services;
