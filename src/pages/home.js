import { useDispatch, useSelector } from "react-redux";
import Layout from "../container/layout";
import { increment } from "../features/counter/counterSlice";
import "../container/global/home.css";
export default function Home() {
  const counterState = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increment());
  };
  return (
    <Layout>
      <div className="App">
        <div className="App-header">
          <span>{counterState}</span>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </Layout>
  );
}
