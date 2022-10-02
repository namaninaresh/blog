import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { selectionSort } from "../util/shared";
const unsortedArray = [5, 6, 7, 8, 8, 92, 2, 2, 3, 0, 4, 9, 10];

const divs = [],
  div_sizes = unsortedArray;

const Visualizer = (props) => {
  const arrayDataVis = div_sizes.map((val, key) => (
    <div
      style={{
        backgroundColor: "blue",
        width: "3rem",
        height: "2rem",
        border: "1px solid",
        textAlign: "center",
      }}
      key={key}
    >
      {val}
    </div>
  ));
  var arrayContainer;
  if (typeof document !== "undefined" || typeof document !== undefined)
    arrayContainer = document.getElementById("algoDisplayer");
  React.useEffect(() => {
    let array_size = unsortedArray.length;
  }, []);

  const [tabActive, setTabStatus] = React.useState("projects");

  return (
    <Layout pageTitle="About Naresh Namani" pageName={props.path}>
      <Seo title="About " description={"Get to know about Naresh Namani"} />

      <div className="profile container " style={{ marginTop: "1rem" }}>
        <div className="profile__dev">
          <div className="profile_dev container">
            <div
              ref={arrayContainer}
              id="algoDisplayer"
              style={{ display: "flex", flexDirection: "row" }}
            >
              {arrayDataVis}
            </div>
          </div>
        </div>
      </div>

      <button onClick={(e) => selectionSort(arrayDataVis, div_sizes)}>
        Clcik eme
      </button>

      {/* <main class="main">
        <section class="filters container">
          <ul class="filters__content">
            <button
              class={`filters__button ${
                tabActive === "projects" && "filter-tab-active"
              }`}
              data-target="#projects"
              onClick={() => setTabStatus("projects")}
            >
              UI Designs
            </button>
          </ul>
        </section>
      </main> */}
    </Layout>
  );
};

export default Visualizer;
