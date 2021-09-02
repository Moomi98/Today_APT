import axios from "axios";

export const GetDataFromServer = async () => {
  // 서버로부터 아파트 순위 정보를 가져오는 함수
    try {
      const response = await axios.get("http://localhost:8080/api/get/aptInfo");
      return response.data;

    } catch (e) {
      console.log(e);
    }

};

export const searchDataFromServer = async (text) =>{ // 검색 시 서버로부터 정보를 찾아오는 함수
  console.log("searchDataFromServer()");
  try{
    const response = await axios.get("http://localhost:8080/api/get/search?aptName=" + text);
    return response.data;

  } catch (e){
    console.log(e);
  }
}