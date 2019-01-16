import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';
import { SSL_OP_NO_QUERY_MTU } from 'constants';

interface ExtraData {
    test: number;
}
// $ExpectType ContextMenu<any>
new AMap.ContextMenu();
// $ExpectType ContextMenu<any>
new AMap.ContextMenu({});
// $ExpectType ContextMenu<ExtraData>
const contextMenu = new AMap.ContextMenu<ExtraData>({
    content: '<div>content</div>',
});

// $ExpectType void
contextMenu.addItem('item', function () {
    // $ExpectType HTMLLIElement
    this;
});
// $ExpectType void
contextMenu.addItem('item', () => { }, 1);

// $ExpectType void
contextMenu.removeItem('item', () => {});

// $ExpectType void
contextMenu.open(map, lnglatTuple);
// $ExpectType void
contextMenu.open(map, lnglat);

// $ExpectType void
contextMenu.close();

contextMenu.on('items', (event: AMap.ContextMenuEventMap<typeof contextMenu>['items']) => {
    // $ExpectType "items"
    event.type;
});

contextMenu.on('open', (event: AMap.ContextMenuEventMap<typeof contextMenu>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType ContextMenu<ExtraData>
    event.target;
});
