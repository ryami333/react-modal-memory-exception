import React from "react";
import App from "./App";
import { configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
	render(<App />);
});
