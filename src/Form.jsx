/* eslint-disable react/prop-types */
// import IndicatorComponent from "./assets/indicator/IndicatorComponent";
import IndicatorComponent from "./assets/indicator/IndicatorComponent";
import styles from "./Form.module.css";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function Form(props) {
	var [selectedSupervisor, setSupervisor] = useState("");
	var [customSupervisor, setCustomSupervisor] = useState("");
	var [currentDate, setCurrentDate] = useState("DD/MM");
	var [userValue, setUserValue] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		if (value == "custom") {
			setSupervisor("");
		} else {
			setSupervisor(value);
			setCustomSupervisor(value);
		}
	};

	const handleCustomInput = (event) => {
		const value = event.target.value;
		setCustomSupervisor(value);
	};

	const onFocusInput = () => {
		setSupervisor("");
	};

	return (
		<>
			<div className={styles.form_container}>
				<div className={styles.header_container}>
					<div className={styles.indicator_placeholder}>
						<IndicatorComponent></IndicatorComponent>
					</div>

					<div className={styles.city_placeholder}>
						<div className={styles.city_align}>
							<h2 className={styles.city}>{props.city}</h2>
						</div>
					</div>
				</div>

				<div className={styles.input_container}>
					<div className={styles.value_names}>
						<p>DATA</p>
						<p>KIER.</p>
						<p>{props.terminal_1}</p>
						<p>{props.terminal_2}</p>
						<p>KARTY</p>
						<p>GOT.</p>
						<p>WAL.</p>
						<p>VOUCH.</p>
						<p>WEJ.</p>
						<p>SUMA</p>
					</div>

					<div className={styles.value_inputs}>
						<div className={styles.date_row}>
							<input
								type="text"
								className={styles.date_manual}
								placeholder={currentDate}
								value={userValue}
								onChange={(e) => setCurrentDate(e.target.value)}
							/>
							<input
								type="date"
								className={styles.date_input}
								value={userValue}
								onChange={(e) => setUserValue(e.target.value)}
							/>
							<input type="time" className={styles.time_input} />
						</div>

						<div className={styles.supervisor_row}>
							<input
								type="text"
								id={styles.supervisor_input}
								placeholder={selectedSupervisor}
								value={customSupervisor}
								onChange={handleCustomInput}
								onFocus={onFocusInput}
							></input>

							<select
								className={styles.supervisor}
								onChange={handleChange}
								value={selectedSupervisor}
							>
								<option></option>
								<option value={props.supervisor}>
									{props.supervisor}
								</option>
								<option value={props.assistant}>
									{props.assistant}
								</option>
								<option value="custom">
									Wprowadź ręcznie...
								</option>
							</select>
						</div>

						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
						<input type="number" step={0.01} />
					</div>

					<div className={styles.buttons}>
						<button className={styles.sms_btn}>SMS</button>
						<button className={styles.reset_btn}>RESET</button>
						<button className={styles.toggle_btn}>CLOSE</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
