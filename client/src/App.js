import TopBar from './components/TopBar';
import RankingBox from './components/RankingBox';
import SearchBar from './components/SearchBar';
import * as Data from './components/Data';

function App(){
    return (
      <div className="App">
        {Data.GetDataFromServer()}
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <RankingBox></RankingBox>
      </div>
    );
  
}

export default App;
