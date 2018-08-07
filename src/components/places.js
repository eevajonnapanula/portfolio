import React from 'react'

import WorldMap from 'grommet/components/WorldMap';
import Legend from 'grommet/components/Legend';
import Responsive from 'grommet/utils/Responsive';

export default class Places extends React.Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {};
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  render() {
    return (
      <div>
      {this.state.small ?
        <div>
        <WorldMap series={[ {
          "place": [29.8168824,-95.6814839],
          "label": "Houston",
          "colorIndex": "accent-2",
          "id": "houston"
          }]}
          zoom />
          <WorldMap series={[{
            "place": [59.9390,29.5303],
            "label": "St. Petersburg",
            "colorIndex": "graph-1",
            "id": "stpetersburg"
          }, {
            "place": [62.7900965,22.6892906],
            "label": "Seinäjoki",
            "colorIndex": "graph-2",
            "id": "seinajoki"
          }, {
            "place": [60.1098678,24.7385084],
            "label": "Helsinki",
            "colorIndex": "graph-3",
            "id": "helsinki"
          }
          ]}
            zoom={true} />
            </div> :
            <WorldMap series={[{
              "place": [59.9390, 29.5303],
              "label": "St. Petersburg",
              "colorIndex": "graph-1",
              "id": "stpetersburg"
            }, {
              "place": [62.7900965,22.6892906],
              "label": "Seinäjoki",
              "colorIndex": "graph-2",
              "id": "seinajoki"
            }, {
              "place": [60.1098678,24.7385084],
              "label": "Helsinki",
              "colorIndex": "graph-3",
              "id": "helsinki"
            },
            {
              "place": [29.8168824,-95.6814839],
              "label": "Houston",
              "colorIndex": "accent-2",
              "id": "houston"
              }
            ]}
              zoom={true} />
          }
          <Legend
            series={[
              {"label": "Seinäjoki", "colorIndex": "graph-2"},
              {"label": "Helsinki", "colorIndex": "graph-3"},
              {"label": "Houston", "colorIndex": "accent-2"},
              {"label": "St. Petersburg", "colorIndex": "graph-1"}]}
            />
      </div>
    )
  }
}
