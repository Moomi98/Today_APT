import TopBar from './components/TopBar';
import RankingBox from './components/RankingBox';
import SearchBar from './components/SearchBar';
function App(){
    return (
      <div className="App">
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <RankingBox></RankingBox>
      </div>
    );
  
}

export default App;
