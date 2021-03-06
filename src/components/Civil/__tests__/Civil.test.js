import React from "react";
import Civil from "../Civil";
import { Civildata } from "../../../ducks/civil/selectors";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureMockStore from "redux-mock-store";
configure({ adapter: new Adapter() }); //ES6 modules

jest.mock("../../../ducks/civil/selectors");
const mockFnDispatch = jest.fn();
const mockFnEffect = jest.fn();
const mockFnSelector = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: () => mockFnSelector(),
  useDispatch: () => mockFnDispatch,
  useEffect: () => mockFnEffect,
}));

describe("<Civil />", () => {
  const mockFn = jest.fn();
  const props = {
    match: {
      url: "Make some url",
    },
    onClick: mockFn,
    text: "Bye",
  };

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Civil {...props} propsUrl={props.match.url} />);
  });

  it("Is Civil component", () => {
    expect(wrapper).toHaveLength(1);
  });

  //-----------------------------------------------//

  it("Is data from store", () => {
    Civildata.mockReturnValue();
    expect(wrapper).toHaveLength(1);
  });

  //-----------------------------------------------//

  it("should are working Methods in Civil", () => {
    const middlewares = []; //middlewares are empty
    const mockStore = configureMockStore(middlewares); // create Stor
    const ACTION_GET = () => ({ type: "ACTION_GET" }); // create Action
    const initialState = { data: [1, 2, 3, 4] }; // Init StorContain
    const store = mockStore(initialState); // Put contain into Stor
    const civil = store.getState().data; //useSelector
    const props = { match: { url: "some http..." } }; // add Props
    const Sort = jest.fn("hello");

    const getFetch = (url, path, res) => {
      if (Boolean(res) == false) {
        mockFnDispatch(ACTION_GET(`${url}${path}`));
      } else null;
    };
    mockFnEffect(getFetch("www.dev.by", "/avto", civil));

    // console.log(`civil -- `, store.getState().data)
    // console.log(`props -- `, props.match.url)

    const wrapper = mount(
      // <Provider store={store}>
      <Civil
        data={civil}
        getFetch={getFetch}
        useEffect={mockFnEffect}
        {...props}
        Sort={Sort}
      />
      // {/* </Provider> */}
    );
    expect(wrapper).toMatchSnapshot();
  });

  //-----------------------------------------------//

  it("should to find div element in the DOM", () => {
    expect(wrapper.find("div")).toHaveLength(1); // ???????????????? ???? ????, ?????? ???????? ?????????????? ?? className = CivilizationsWrapper
  });

  //-----------------------------------------------//

  it("should to find CivilizationsWrapper in the DOM", () => {
    expect(wrapper.find("div.civilizationsWrapper")).toHaveLength(1); // ???????????????? ???? ????, ?????? ???????? ?????????????? ?? className = CivilizationsWrapper
  });

  //--------------------------------------------//

  it("should set props correctly", () => {
    // console.log(`wrapper.props().text`, wrapper.props().text)
    const nextText = "Hello";
    wrapper.setProps({ text: nextText });
    expect(wrapper.props().text).toEqual(nextText);
    // console.log(`wrapper.props().text`, wrapper.props().text)
  });
});

//?????????????? shallow ???????????????????????? ?????? ????????, ?????????? ???????????????????? ??????????????????(return)
