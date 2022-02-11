import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearchfield, requestRobots } from "./actions";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import "./App.css";

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

function App(props) {
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const { searchField, onSearchChange, robots, isPending } = props;
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return isPending ? (
    <h1 className="tc title">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="title">User Profile Search</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <Cardlist robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
