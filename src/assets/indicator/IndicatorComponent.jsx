import "./IndicatorComponent.css";
import PowerIcon from "../icon/PowerSVG";

function IndicatorComponent() {
	return (
		<div className="indicator-holder">
			<div className="indicator-outter">
				<div className="indicator-inner">
                    <PowerIcon></PowerIcon>
                </div>
			</div>
        </div>
		
	);
}
export default IndicatorComponent;
