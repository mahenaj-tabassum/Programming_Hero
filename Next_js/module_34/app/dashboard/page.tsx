import CounterComponent from "@/components/counterComponent";
import PostComponent from "@/components/postComponent";

const DashboardPage = () => {
  console.log("Dashboard page rendered");
  return (
    <div>
      <h2>DashboardPage</h2>
      <li>Dashboard item 1</li>
      <li>Dashboard item 2</li>
      <li>Dashboard item 3</li>
      <hr className="my-5"/>
      <CounterComponent />
      <hr className="my-5"/>
      <PostComponent />
      <hr className="my-5"/>
      <ul></ul>
    </div>
  );
};

export default DashboardPage;
