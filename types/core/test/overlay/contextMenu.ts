interface ContextMenuExtraData {
    test: number;
}
// $ExpectType ContextMenu<any>
new AMap.ContextMenu();
// $ExpectType ContextMenu<any>
new AMap.ContextMenu({});
// $ExpectType ContextMenu<ContextMenuExtraData>
const testContextMenu = new AMap.ContextMenu<ContextMenuExtraData>({
    content: '<div>content</div>',
});

// $ExpectType void
testContextMenu.addItem('item', function() {
    // $ExpectType HTMLLIElement
    this;
});
// $ExpectType void
testContextMenu.addItem('item', () => { }, 1);

// $ExpectType void
testContextMenu.removeItem('item', () => {});

// $ExpectType void
testContextMenu.open(map, lnglatTuple);
// $ExpectType void
testContextMenu.open(map, lnglat);

// $ExpectType void
testContextMenu.close();

testContextMenu.on('items', (event: AMap.ContextMenu.EventMap<typeof testContextMenu>['items']) => {
    // $ExpectType "items"
    event.type;
});

testContextMenu.on('open', (event: AMap.ContextMenu.EventMap<typeof testContextMenu>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType ContextMenu<ContextMenuExtraData>
    event.target;
});
