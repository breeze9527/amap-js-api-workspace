testWrapper(() => {
    interface ExtraData {
        test: number;
    }

    const map = new AMap.Map('map');
    const lnglat = map.getCenter();

    const contextMenu = new AMap.ContextMenu<ExtraData>({
        // content: '<div>test</div>'
    });
    const callback = function (this: any) {
        test('ContextMenu#addItem@click$this', this);
    }

    contextMenu.on('click', function (event) {
        test('ContextMenu@click@event', event);
    })

    test('new ContextMenu()', new AMap.ContextMenu());
    test('new ContextMenu({})', new AMap.ContextMenu({}));
    test('new ContextMenu(options)', contextMenu);

    test('ContextMenu#addItem(string, Function)', contextMenu.addItem('item1', callback));
    test('ContextMenu#addItem(string, Function, number)', contextMenu.addItem('item1', callback, 1));

    test('ContextMenu#removeItem', contextMenu.removeItem('item1', callback));

    test('ContextMenu#close', contextMenu.close());

    test('ContextMenu#open', contextMenu.open(map, lnglat));

    return {
        contextMenu,
        map,
        lnglat
    }
})
