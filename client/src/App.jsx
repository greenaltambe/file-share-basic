import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./service/api";
import "./App.css";

function App() {
	const fileInputRef = useRef();
	const [file, setFile] = useState("");
	const [result, setResult] = useState("");

	const onUploadClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	useEffect(() => {
		const getImage = async () => {
			if (file) {
				try {
					const data = new FormData();
					data.append("name", file.name);
					data.append("file", file);

					const response = await uploadFile(data);
					setResult(response.path);
				} catch (error) {
					console.log(error.message);
				}
			}
		};

		getImage();
	}, [file]);

	return (
		<>
			<div className="main-wrapper">
				<div className="container">
					<div className="wrapper">
						<h1>File shareing app</h1>
						<p>Upload and share file</p>
						<button onClick={onUploadClick}>Upload</button>
						<input
							type="file"
							ref={fileInputRef}
							onChange={handleFileChange}
							hidden
						/>

						{result && (
							<div className="result">
								<a href={result} target="_blank">
									Download
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
