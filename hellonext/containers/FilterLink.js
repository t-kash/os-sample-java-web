import { setVisibilityFilter } from "../actions/todo-action";
import { connect } from "react-redux";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
    return { active: ownProps.filter === state.visibilityFilterReducer };

    // return { state: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        },
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;