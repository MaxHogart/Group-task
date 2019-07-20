function roundToThousandth(num) {
    const FOR_ROUNDING = 1000;
    return Math.round(num * FOR_ROUNDING) / FOR_ROUNDING;
}

function angleInRadians(angleInDegrees) {
    const AMOUNT_OF_DEGREES_IN_RADIAN = 180;
    return angleInDegrees / AMOUNT_OF_DEGREES_IN_RADIAN * Math.PI;
}

function areaOfParallelogram(
    sideA,
    sideB,
    angleInDegrees
) {
    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined' || typeof angleInDegrees === 'undefined';
    let isSideANotValid = sideA <= 0;
    let isSideBNotValid = sideB <= 0;
    const MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM = 179;
    let validDataForAngles = angleInDegrees < 0 || angleInDegrees > MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM;
    if (isFilled || isSideANotValid || isSideBNotValid || validDataForAngles) {
        return '-';
    } else {
        let angleInRad = angleInRadians(angleInDegrees);
        return roundToThousandth(sideA * sideB * Math.sin(angleInRad));
    }
}
function heightOfParallelogram(
    sideA,
    sideB,
    angleInDegrees
) {
    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined' || typeof angleInDegrees === 'undefined';
    let isSideANotValid = sideA <= 0;
    let isSideBNotValid = sideB <= 0;
    const MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM = 179;
    let validDataForAngles = angleInDegrees < 0 || angleInDegrees > MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM;
    if (isFilled || isSideANotValid || isSideBNotValid || validDataForAngles) {
        return '-';
    } else {
        return roundToThousandth(areaOfParallelogram(sideA, sideB, angleInDegrees) / sideA);
    }
}
//  I suppose sides are more than 0, and angle will be between 0 and 180 degrees
function areaOfDisk(radius) {
    if (radius <= 0 || typeof radius === 'undefined') {
        return '-';
    } else {
        const POWER = 2;
        return roundToThousandth(Math.PI * Math.pow(radius, POWER));
    }
}
function lengthOfDisk(radius) {
    if (radius <= 0 || typeof radius === 'undefined') {
        return '-';
    } else {
        const COEFFICIENT = 2;
        return roundToThousandth(Math.PI * radius * COEFFICIENT);
    }
}
// radius is more than 0
function areaOfEllipse(horizontalRadius, verticalRadius) {
    let dataValidations = horizontalRadius <= 0 || verticalRadius <= 0;
    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
        return '-';
    } else {
        return roundToThousandth(Math.PI * horizontalRadius * verticalRadius);
    }
}
function lengthOfEllipse(horizontalRadius, verticalRadius) {
    let dataValidations = horizontalRadius <= 0 || verticalRadius <= 0;
    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
        return '-';
    } else {
        const COEFFICIENT = 2;
        const POWER = 2;
        let processOfCalc = Math.sqrt((Math.pow(horizontalRadius, POWER) + Math.pow(verticalRadius, POWER)) / COEFFICIENT);
        return roundToThousandth(Math.PI * COEFFICIENT * processOfCalc);
    }
}
// horizontal and vertical radius are more than 0
function areaOfSquare(side) {
    if (side <= 0 || typeof side === 'undefined') {
        return '-'
    } else {
        const POWER = 2;
        return roundToThousandth(Math.pow(side, POWER))
    }
}
function diagonalOfSquare(side) {
    return diagonalOfRectangle(side, side);
}
function areaOfRectangle(side1, side2) {
    const ANGLE_OF_PARALLELOGRAM_FOR_RECTANGLE = 90;
    return areaOfParallelogram(side1, side2, ANGLE_OF_PARALLELOGRAM_FOR_RECTANGLE);
}
function diagonalOfRectangle(sideA, sideB) {
    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined';
    let isSideANotValid = sideA <= 0;
    let isSideBNotValid = sideB <= 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-';
    } else {
        return roundToThousandth(Math.hypot(sideA, sideB));
    }
}
function areaOfRightTriangle(cathetus1, cathetus2) {
    const RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE = 2;
    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
    let isSideANotValid = cathetus1 <= 0;
    let isSideBNotValid = cathetus2 <= 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-'
    } else {
        return roundToThousandth(areaOfRectangle(cathetus1, cathetus2) / RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE)
    }
}
function hypotenuseOfRightTriangle(cathetus1, cathetus2) {
    return diagonalOfRectangle(cathetus1, cathetus2)
}
function heightOfRightTriangle(cathetus1, cathetus2) {
    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
    let isSideANotValid = cathetus1 <= 0;
    let isSideBNotValid = cathetus2 <= 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-'
    } else {
        const COEFFICIENT = 2;
        let areaOfTriangle = areaOfRightTriangle(cathetus1, cathetus2);
        let hypotenuse = hypotenuseOfRightTriangle(cathetus1, cathetus2);
        return roundToThousandth(COEFFICIENT * areaOfTriangle / hypotenuse);
    }
}
function angleB(cathetus1, cathetus2) {
    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
    let isSideANotValid = cathetus1 <= 0;
    let isSideBNotValid = cathetus2 <= 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-'
    } else {
        const DEGREES_IN_RADIANS = 180;
        return roundToThousandth(DEGREES_IN_RADIANS / Math.PI * Math.acos(cathetus2 / Math.hypot(cathetus1, cathetus2)));
    }
}
function angleB(cathetus1, cathetus2) {
    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
    let isSideANotValid = cathetus1 <= 0;
    let isSideBNotValid = cathetus2 <= 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-'
    } else {
        const DEGREES_IN_RADIANS = 180;
        return roundToThousandth(DEGREES_IN_RADIANS / Math.PI * Math.acos(cathetus1 / Math.hypot(cathetus1, cathetus2)));
    }
}
// events

function defaultResultValue() {
    let outputValue = event.path[1].getElementsByClassName('output-value');
    for (let item of outputValue) {
        item.innerHTML = '-';
    }
}

function getValue() {
    return {
        SIDE_A_OF_PARALLELOGRAM: document.getElementById('side-a-of-parallelogram').value,
        SIDE_B_OF_PARALLELOGRAM: document.getElementById('side-b-of-parallelogram').value,
        ANGLE_OF_PARALLELOGRAM: document.getElementById('angle-of-parallelogram').value,
        RADIUS_OF_DISK: document.getElementById('radius-of-disk').value,
        HORIZONTAL_RADIUS_OF_ELLIPSE: document.getElementById('horizontal-radius-of-ellipse').value,
        VERTICAL_RADIUS_OF_ELLIPSE: document.getElementById('vertical-radius-of-ellipse').value,
        SIDE_OF_SQUARE: document.getElementById('side-of-square').value,
        SIDE_A_OF_RECTANGLE: document.getElementById('side-a-of-rectangle').value,
        SIDE_B_OF_RECTANGLE: document.getElementById('side-b-of-rectangle').value,
        SIDE_A_OF_RIGHT_TRIANGLE: document.getElementById('side-a-of-right-triangle').value,
        SIDE_B_OF_RIGHT_TRIANGLE: document.getElementById('side-b-of-right-triangle').value
    }
}

function calculation() {
    let value = getValue();
    document.getElementById('area-of-parallelogram').innerHTML = areaOfParallelogram(
        value.SIDE_A_OF_PARALLELOGRAM,
        value.SIDE_B_OF_PARALLELOGRAM,
        value.ANGLE_OF_PARALLELOGRAM
    );
    document.getElementById('height-of-parallelogram').innerHTML = heightOfParallelogram(
        value.SIDE_A_OF_PARALLELOGRAM,
        value.SIDE_B_OF_PARALLELOGRAM,
        value.ANGLE_OF_PARALLELOGRAM
    );
    document.getElementById('area-of-disk').innerHTML = areaOfDisk(value.RADIUS_OF_DISK);
    document.getElementById('length-of-disk').innerHTML = lengthOfDisk(value.RADIUS_OF_DISK);
    document.getElementById('area-of-ellipse').innerHTML = areaOfEllipse(
        value.HORIZONTAL_RADIUS_OF_ELLIPSE,
        value.VERTICAL_RADIUS_OF_ELLIPSE
    );
    document.getElementById('length-of-ellipse').innerHTML = lengthOfEllipse(
        value.HORIZONTAL_RADIUS_OF_ELLIPSE,
        value.VERTICAL_RADIUS_OF_ELLIPSE
    );
    document.getElementById('area-of-square').innerHTML = areaOfSquare(value.SIDE_OF_SQUARE);
    document.getElementById('diagonal-of-square').innerHTML = diagonalOfSquare(value.SIDE_OF_SQUARE);
    document.getElementById('area-of-rectangle').innerHTML = areaOfRectangle(
        value.SIDE_A_OF_RECTANGLE,
        value.SIDE_B_OF_RECTANGLE
    );
    document.getElementById('diagonal-of-rectangle').innerHTML = diagonalOfRectangle(
        value.SIDE_A_OF_RECTANGLE,
        value.SIDE_B_OF_RECTANGLE
    );
    document.getElementById('side-c-of-right-triangle').innerHTML = hypotenuseOfRightTriangle(
        value.SIDE_A_OF_RIGHT_TRIANGLE,
        value.SIDE_B_OF_RIGHT_TRIANGLE
    );
    document.getElementById('angle-a-of-right-triangle').innerHTML = angleA(
        value.SIDE_A_OF_RIGHT_TRIANGLE,
        value.SIDE_B_OF_RIGHT_TRIANGLE
    );
    document.getElementById('angle-b-of-right-triangle').innerHTML = angleB(
        value.SIDE_A_OF_RIGHT_TRIANGLE,
        value.SIDE_B_OF_RIGHT_TRIANGLE
    );
    document.getElementById('angle-c-of-right-triangle').innerHTML = 90;
    document.getElementById('area-of-right-triangle').innerHTML = areaOfRightTriangle(
        value.SIDE_A_OF_RIGHT_TRIANGLE,
        value.SIDE_B_OF_RIGHT_TRIANGLE
    );
    document.getElementById('height-of-right-triangle').innerHTML = heightOfRightTriangle(
        value.SIDE_A_OF_RIGHT_TRIANGLE,
        value.SIDE_B_OF_RIGHT_TRIANGLE
    );
}

function draw() {
    let value = getValue();
    let parallelogram = document.querySelector('.parallelogram');
    let disk = document.querySelector('.disk');
    let ellipse = document.querySelector('.ellipse');
    let square = document.querySelector('.square');
    let rectangle = document.querySelector('.rectangle');
    let rightTriangle = document.querySelector('.right-triangle polygon');

    parallelogram.style.height = value.SIDE_A_OF_PARALLELOGRAM * Math.sin(angleInRadians(value.ANGLE_OF_PARALLELOGRAM)) + 'px';
    parallelogram.style.width = value.SIDE_B_OF_PARALLELOGRAM + 'px';
    parallelogram.style.transform = `skew(${value.ANGLE_OF_PARALLELOGRAM - 90}deg)`;

    disk.style.width = value.RADIUS_OF_DISK + 'px';
    disk.style.height = value.RADIUS_OF_DISK + 'px';

    ellipse.style.width = value.HORIZONTAL_RADIUS_OF_ELLIPSE + 'px';
    ellipse.style.height = value.VERTICAL_RADIUS_OF_ELLIPSE + 'px';

    square.style.width = value.SIDE_OF_SQUARE + 'px';
    square.style.height = value.SIDE_OF_SQUARE + 'px';

    rectangle.style.width = value.SIDE_A_OF_RECTANGLE + 'px';
    rectangle.style.height = value.SIDE_B_OF_RECTANGLE + 'px';

    rightTriangle.setAttribute(
        'points', `0 0, ${value.SIDE_A_OF_RIGHT_TRIANGLE} ${value.SIDE_B_OF_RIGHT_TRIANGLE}, 0 ${value.SIDE_B_OF_RIGHT_TRIANGLE}`
    )
}

document.getElementById('calculate').addEventListener('click', calculation);
document.getElementById('calculate').addEventListener('click', draw);

const INPUT_VALUE = document.getElementsByClassName('input-value');
for (let item of INPUT_VALUE) {
    item.addEventListener('input', defaultResultValue);
}

function instantCalc() {
    calculation();
    if (document.getElementById('checkbox').checked) {
        for (let item of INPUT_VALUE) {
            item.addEventListener('input', calculation);
            item.addEventListener('input', draw);
        }
    } else {
        for (let item of INPUT_VALUE) {
            item.removeEventListener('input', calculation);
            item.removeEventListener('input', draw);
        }
    }
}

document.getElementById('checkbox').onchange = instantCalc;