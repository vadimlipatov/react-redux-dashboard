import { FilterPanel } from "./features/filter/FilterPanel";
import { JobList } from "./features/position/JobList";
import { TheHeader } from "./components/TheHeader";

function App() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
