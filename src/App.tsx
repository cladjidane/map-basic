import * as React from 'react';

import Map, {Layer, Source} from 'react-map-gl';
import {useCallback, useEffect, useMemo, useState} from 'react';

import ControlPanel from './control-panel';
import {createRoot} from 'react-dom/client';
import data from "./assets/finistere-contours-20-60.json"
import {dataLayer} from './map-style';
import {updatePercentiles} from './utils';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamVvZnVuIiwiYSI6ImNrd3huZXZjMzAwMWkycXFtb29zeDMxdnMifQ.N0SyKbZ6Br7bCL0IPmUZIg'; // Set your mapbox token here

export default function App() {
  const [allData, setAllData] = useState(data);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source type="geojson" data={allData}>
          <Layer {...dataLayer} />
        </Source>
      </Map>

    </>
  );
}
