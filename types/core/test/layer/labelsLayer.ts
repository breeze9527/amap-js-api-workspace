// $ExpectType LabelsLayer
new AMap.LabelsLayer();
// $ExpectType LabelsLayer
new AMap.LabelsLayer({});
// $ExpectType LabelsLayer
const testLabelsLayer = new AMap.LabelsLayer({
    visible: true,
    zIndex: 1,
    zooms: [1, 1],
    opacity: 1
});

// $ExpectType void
testLabelsLayer.add(labelMarker);
// $ExpectType void
testLabelsLayer.add([labelMarker]);

// $ExpectType void
testLabelsLayer.remove(labelMarker);

// $ExpectType void
testLabelsLayer.clear();

// $ExpectType any
testLabelsLayer.on('click', () => { });

// $ExpectType any
testLabelsLayer.off('click', () => { });

// $ExpectType any
testLabelsLayer.on('click', (event: AMap.LabelsLayer.EventMap['click']) => {
    {
        const { data, opts } = event.data;
        // $ExpectType number
        data.id;
        // $ExpectType string
        data.name;
        // $ExpectType [number, number] | [string, string]
        data.position;
        // $ExpectType number | undefined
        data.rank;
        // $ExpectType string | undefined
        data.txt;
        // $ExpectType [number, number]
        data.zooms;

        // $ExpectType number
        opts.opacity;
        // $ExpectType number
        opts.zIndex;

        {
            // $ExpectType TextOptions
            const textOptions = opts.text;

            // $ExpectType string | undefined
            textOptions.content;
            if (textOptions.direction !== undefined) {
                // $ExpectType TextDirection
                textOptions.direction;
            } else {
                // $ExpectType undefined
                textOptions.direction;
            }

            if (textOptions.offset !== undefined) {
                // $ExpectType [number, number] | Pixel
                textOptions.offset;
            } else {
                // $ExpectType undefined
                textOptions.offset;
            }

            // $ExpectType [number, number] | undefined
            textOptions.zooms;

            {
                const textStyle = textOptions.style;
                if (textStyle) {
                    // $ExpectType string | undefined
                    textStyle.fillColor;

                    // $ExpectType string | undefined
                    textStyle.fontFamily;

                    if (textStyle.fontWeight !== undefined) {
                        // $ExpectType FontWeight
                        textStyle.fontWeight;
                    } else {
                        // $ExpectType undefined
                        textStyle.fontWeight;
                    }

                    // $ExpectType string | undefined
                    textStyle.fillColor;

                    // $ExpectType string | undefined
                    textStyle.strokeColor;

                    // $ExpectType number | undefined
                    textStyle.strokeWidth;
                }
            }
        }

        {
            const iconOptions = opts.icon;
            // $ExpectType string | undefined
            iconOptions.image;

            if (iconOptions.size !== undefined) {
                // $ExpectType number[] | Size
                iconOptions.size;
            } else {
                // $ExpectType undefined
                iconOptions.size;
            }

            if (iconOptions.clipOrigin !== undefined) {
                // $ExpectType number[] | Pixel
                iconOptions.clipOrigin;
            } else {
                // $ExpectType undefined
                iconOptions.clipOrigin;
            }

            if (iconOptions.anchor !== undefined) {
                // $ExpectType Anchor
                iconOptions.anchor;
            } else {
                // $ExpectType undefined
                iconOptions.anchor;
            }

            // $ExpectType boolean | undefined
            iconOptions.retina;
        }
    }

    // $ExpectType LngLat
    event.lnglat;

    // $ExpectType Pixel
    event.pixel;

    // $ExpectType LabelsLayer
    event.target;
});
