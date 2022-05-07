const gradients = [
    ['#433CA2', '#4A73C0'],
    ['#EA40EC', '#763DFB'],
    ['#FE8055', '#ED27A2'],
    ['#763DFB', '#ED27A2'],
    ['#433CA2', '#EA40EC'],
    ['#433CA2', '#763DFB'],
    ['#EA40EC', '#4A73C0'],
];

export const getRandomGradient = () => {
    const min = 0;
    const max = gradients.length - 1;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    return gradients[randomNumber];
};