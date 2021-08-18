import axios from "axios";

export const GetDataFromServer = () => {
  // 서버로부터 아파트 순위 정보를 가져오는 함수
   const fetchData = async () => {
    console.log("fetchData()");
    try {
      const response = await axios.get("http://localhost:8080/api/get");

      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return fetchData();
}