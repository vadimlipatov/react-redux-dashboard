import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { selectAllFilters } from "../store/filters/filter-selectors";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter, removeFilter } from "../store/filters/filter-actions";

const FilterPanel = () => {
  const filters = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  if (filters.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter, i) => {
            return (
              <Badge
                onClear={() => dispatch(removeFilter(filter))}
                key={filter + i}
                variant="clearable"
              >
                {filter}
              </Badge>
            );
          })}
        </Stack>
        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
