/* eslint-disable react/prop-types */
import styles from "./Form.module.css";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function Form(props) {
	var [selectedSupervisor, setSupervisor] = useState("");
	var [customSupervisor, setCustomSupervisor] = useState("");

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
	}

	const onFocusInput = () =>{
		setSupervisor("");
	}

	

	return (
		<>
			<div className={styles.form_container}>
				<h2 className={styles.city}>{props.city}</h2>

				<div className={styles.input_container}>
					<div className={styles.value_names}>
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

						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
						<input type="number" step={0.01}/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Form;
