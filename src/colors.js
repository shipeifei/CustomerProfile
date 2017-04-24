let colors = [
  '#58C9F3',
  '#EF7063',
  '#A8D76F',
  '#41C9BF',
  '#F8D347'
];
colors = [...colors, ...colors];

export const colorsFunc = function(params) {
    return colors[params.dataIndex];
};

export default colors;
