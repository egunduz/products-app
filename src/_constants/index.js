
const CurrencySign = {
    TL: '&#8378;'
}

const SortingCode = {
    LowToHeigh: 'price&_order=asc',
    HeighToLow: 'price&_order=desc',
    NewToOld: 'added&_order=asc',
    OldToNew: 'added&_order=desc'
};

const ItemTypeOptions = [
    { name: "mug", value: "mug", },
    { name: "shirt", value: "shirt", },
  ];

const SortingOptions = [
    { name: "Price low to heigh", value: SortingCode.LowToHeigh },
    { name: "Price heigh to low", value: SortingCode.HeighToLow },
    { name: "New to old", value: SortingCode.NewToOld },
    { name: "Old to new", value: SortingCode.OldToNew },
];

const TagOptions = [
    { name: "Beach", value: "Beach", quantity: 1 },
    { name: "People", value: "People", quantity: 18 },
    { name: "Outdoor", value: "Outdoor", quantity: 3 },
];

export { CurrencySign, SortingCode, ItemTypeOptions, SortingOptions, TagOptions};