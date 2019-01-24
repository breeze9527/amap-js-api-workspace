import { map } from '../preset';

// $ExpectType ControlBar
new AMap.ControlBar();
// $ExpectType ControlBar
const controlBar = new AMap.ControlBar({
    position: {
        left: 'left',
        right: 'right',
        top: 'top',
        bottom: 'bottom'
    },
    showZoomBar: true,
    showControlButton: true
});
map.addControl(controlBar);
