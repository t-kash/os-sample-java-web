import Link from "./Link";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from '../actions/todo-action';

const Footer = () => (
    <p>
        show:
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
);

export default Footer;