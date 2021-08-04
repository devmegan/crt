/* Config for Enzyme tests */

import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });