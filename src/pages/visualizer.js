import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { mergeSort } from "../util/shared";

export default class SortingVisulizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 2; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  doMergeSort() {
    const animations = mergeSort(this.state.array);
    const newAnimations = [];
    for (const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }

    for (let i = 0; i < newAnimations.length; i++) {
      const arrayBars =
        typeof document !== undefined &&
        document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoidx] = newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoidx].style;
        const color = i % 3 === 0 ? "red" : "turquoise";

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = newAnimations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  }

  render() {
    const { array } = this.state;

    const divList =
      array &&
      array.map((value, idx) => {
        return (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
            {value}
          </div>
        );
      });

    return (
      <Layout pageTitle="About Naresh Namani" pageName={this.props.path}>
        <Seo title="About " description={"Get to know about Naresh Namani"} />
        <div className="array-container">{divList} </div>

        <button onClick={() => this.resetArray()}>Generate new array</button>

        <button onClick={() => this.doMergeSort()}>Merge sort</button>
      </Layout>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
