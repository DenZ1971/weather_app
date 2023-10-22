// import {useState, useEffect} from 'react';
// import {getCurrentPosition} from '../utils';

// export function useLocation() {
//   const [coordinates, setCoordinates] = useState({latitude: null, longitude: null});

//   useEffect(() => {
//     (async () => {
//       const {coords} = await getCurrentPosition();
//       setCoordinates({
//         latitude: coords.latitude,
//         longitude: coords.longitude,
//     });
//       console.log(coords.latitude)
//     })();
//   }, []);

//   return coordinates;
// }