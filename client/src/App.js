import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchPage />
          </Route>
          <Route exact path={"/saved"}>
            <SavedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
