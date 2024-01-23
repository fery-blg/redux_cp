import { useEffect, useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const location = useLocation();

  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    console.log(location.search.split("?"));
    if (
      location.pathname == "/" &&
      !location.search.split("?").includes("isDone") && !location.search.split("?").includes("not")
    )
      setData(tasks);
    else if (location.search.split("?").includes("isDone")) {
      const done = tasks.filter((e) => e.done);
      setData(done);
    } else if(location.search.split("?").includes("not")) {
      const not = tasks.filter((e) => !e.done);
      setData(not);
    }
    else(setData(tasks))
  }, [location]);

  return (
    <div>
      {data.map((el, i) => {
        return <Task task={el} key={i} />;
      })}
    </div>
  );
}

export default List;
