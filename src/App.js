import React from "react";
import MobileApp from "./MobileApp/Main";
import { v4 as uuidv4 } from "uuid";
var initial_data = {
  all: [],
  art: [],
  music: [],
  travel: [],
  shopping: [],
  study: [],
  work: [],
  home: [],
};
function sortCategoryData(data) {
  data.sort((o1, o2) => {
    if (o1.taskDate === o2.taskDate) {
      if (o1.taskTime >= o2.taskTime) return 1;
      else return -1;
    } else if (o1.taskDate >= o2.taskDate) return 1;
    else return -1;
  });
}
function addNewTaskInDataBase(setData, dataObj) {
  let objId = uuidv4();
  dataObj.newTask.id = objId;
  dataObj.newTask.done = false;
  if (dataObj.newTask.taskCategory === "") {
    setData((oldData) => {
      let newData = { ...oldData };
      let newAllCategory = [...oldData["all"], dataObj.newTask];
      sortCategoryData(newAllCategory);
      newData["all"] = newAllCategory;
      return newData;
    });
  } else {
    setData((oldData) => {
      let newData = { ...oldData };
      dataObj.newTask.taskCategory = dataObj.newTask.taskCategory.toLowerCase();
      if (oldData.hasOwnProperty(dataObj.newTask.taskCategory)) {
        let newCategory = [
          ...oldData[dataObj.newTask.taskCategory],
          dataObj.newTask,
        ];
        sortCategoryData(newCategory);
        newData[dataObj.newTask.taskCategory] = newCategory;
        return newData;
      } else {
        newData[dataObj.newTask.taskCategory] = [dataObj.newTask];
        return newData;
      }
    });
  }
}
function delCategory(category,setData){
  setData((oldData)=>{
    let newData = {...oldData};
    delete newData[category];
    return newData;
  })
}
const App = () => {
  let [data, setData] = React.useState(initial_data);
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const setDataHandler = (dataObj) => {
    if (dataObj.newTask) {
      if (dataObj.verb === "add") {
        addNewTaskInDataBase(setData, dataObj);
      }
    }
    else if(dataObj.hasOwnProperty("category")){
      if(dataObj.verb==="del"){
        delCategory(dataObj.category,setData);
      }
    }
  };
  return (
    <div>
      <MobileApp data={data} setDataHandler={setDataHandler}></MobileApp>
    </div>
  );
};

export default App;
