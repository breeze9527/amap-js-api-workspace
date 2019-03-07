const massMarksStyle1 = {
    anchor: pixel,
    url: '',
    size,
    rotation: 1
};
const massMarksStyle2 = {
    anchor: pixel,
    url: '',
    size
};
const massMarksData1 = {
    lnglat
};

interface MassMarksCustomData extends AMap.MassMarks.Data {
    name: string;
    id: string;
}
const massMarksMassMarksCustomData: MassMarksCustomData = {
    lnglat: [1, 2],
    style: 1,
    name: '',
    id: ''
};

// $ExpectError
new AMap.MassMarks();
// $ExpectError
new AMap.MassMarks([], {});

new AMap.MassMarks([], {
    style: [massMarksStyle1, massMarksStyle2]
});
new AMap.MassMarks([massMarksData1], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType MassMarks<MassMarksCustomData>
const testMassMarks = new AMap.MassMarks<MassMarksCustomData>([massMarksMassMarksCustomData], {
    style: [massMarksStyle1, massMarksStyle2]
});

// $ExpectType void
testMassMarks.setStyle(massMarksStyle1);
// $ExpectType void
testMassMarks.setStyle([massMarksStyle1]);

// $ExpectType Style | Style[]
testMassMarks.getStyle();

// $ExpectType void
testMassMarks.setData('');

// $ExpectError
testMassMarks.setData(massMarksData1);
// $ExpectError
testMassMarks.setData(massMarksMassMarksCustomData);

const massMarksCustomData = testMassMarks.getData()[0];
// $ExpectType string
massMarksCustomData.name;
// $ExpectType string
massMarksCustomData.id;
// $ExpectType LngLat
massMarksCustomData.lnglat;

// $ExpectType void
testMassMarks.clear();

testMassMarks.on('click', (event: AMap.MassMarks.EventMap<typeof testMassMarks>['click']) => {
    // $ExpectType "click"
    event.type;

    // $ExpectType MassMarksCustomData
    event.data;

    // $ExpectType MassMarks<MassMarksCustomData>
    event.target;
});
