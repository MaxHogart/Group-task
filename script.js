function roundToThousandth(num) {
    const FOR_ROUNDING = 1000;
    return Math.round(num * FOR_ROUNDING) / FOR_ROUNDING;
}
function areaOfParallelogram(
    sideA,
    sideB,
    angleInDegrees
) {
    let isFilled = typeof sideA === 'undefined' || typeof sideB === 'undefined' || typeof angleInDegrees === 'undefined';
    let isSideANotValid = sideA < 0;
    let isSideBNotValid = sideB < 0;
    const MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM = 179;
    let validDataForAngles = angleInDegrees < 0 || angleInDegrees > MAX_AMOUNT_OF_ANGLES_IN_PARALLELOGRAM;
    if (isFilled || isSideANotValid || isSideBNotValid || validDataForAngles) {
        return '-';
    } else {
        const AMOUNT_OF_DEGREES_IN_RADIAN = 180;
        let angleInRadians = angleInDegrees / AMOUNT_OF_DEGREES_IN_RADIAN * Math.PI;
        return roundToThousandth(sideA * sideB * Math.sin(angleInRadians));
    }
}
function heightOfParallelogram(
    sideA,
    sideB,
    angleInDegrees
) {
    return roundToThousandth(areaOfParallelogram(sideA, sideB, angleInDegrees) / sideA);
}
//  I suppose sides are more than 0, and angle will be between 0 and 180 degrees
function areaOfDisk(radius) {
    if (radius < 0 || typeof radius === 'undefined') {
        return '-';
    } else {
        const POWER = 2;
        return roundToThousandth(Math.PI * Math.pow(radius, POWER));
    }
}
function lengthOfDisk(radius) {
    if (radius < 0 || typeof radius === 'undefined') {
        return '-';
    } else {
        const COEFFICIENT = 2;
        return roundToThousandth(Math.PI * radius * COEFFICIENT);
    }
}
// radius is more than 0
function areaOfEllipse(horizontalRadius, verticalRadius) {
    let dataValidations = horizontalRadius < 0 || verticalRadius < 0;
    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
        return '-';
    } else {
        return roundToThousandth(Math.PI * horizontalRadius * verticalRadius);
    }
}
function lengthOfEllipse(horizontalRadius, verticalRadius) {
    let dataValidations = horizontalRadius < 0 || verticalRadius < 0;
    if (dataValidations || typeof horizontalRadius === 'undefined' || typeof verticalRadius === 'undefined') {
        return '-';
    } else {
        const COEFFICIENT = 2;
        const POWER = 2;
        let processOfCalc = Math.sqrt((Math.pow(horizontalRadius, POWER) + Math.pow(verticalRadius, POWER)) / COEFFICIENT);
        return roundToThousandth(Math.PI * COEFFICIENT * processOfCalc);
    }
}
// horizontal and vertacal radius are more than 0
function areaOfSquare(side) {
    if (side < 0 || typeof side === 'undefined') {
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
    let isSideANotValid = sideA < 0;
    let isSideBNotValid = sideB < 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-';
    } else {
        return roundToThousandth(Math.hypot(sideA, sideB));
    }
}
function areaOfRightTriangle(cathetus1, cathetus2) {
    const RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE = 2;
    return roundToThousandth(areaOfRectangle(cathetus1, cathetus2) / RELATION_BETWEEN_RIGHT_TRIANGLE_AND_RECTANGLE)
}
function hypotenuseOfRightTriangle(cathetus1, cathetus2) {
    return diagonalOfRectangle(cathetus1, cathetus2)
}
function heightOfRightTriangle(cathetus1, cathetus2) {
    let isFilled = typeof cathetus1 === 'undefined' || typeof cathetus2 === 'undefined';
    let isSideANotValid = cathetus1 < 0;
    let isSideBNotValid = cathetus2 < 0;
    if (isFilled || isSideANotValid || isSideBNotValid) {
        return '-'
    } else {
        const COEFFICIENT = 2;
        let areaOfTriangle = areaOfRightTriangle(cathetus1, cathetus2);
        let hypotenuse = hypotenuseOfRightTriangle(cathetus1, cathetus2);
        return roundToThousandth(COEFFICIENT * areaOfTriangle / hypotenuse);
    }
}

// events

function defaultResultValue() {
    let outputValue = event.path[1].getElementsByClassName('output-value');
    for (let item of outputValue) {
        item.innerHTML = '-';
    }
}

function calculation() {
    const SIDE_A_OF_PARALLELOGRAM = document.getElementById('side-a-of-parallelogram').value;
    const SIDE_B_OF_PARALLELOGRAM = document.getElementById('side-b-of-parallelogram').value;
    const ANGLE_OF_PARALLELOGRAM = document.getElementById('angle-of-parallelogram').value;
    const RADIUS_OF_DISK = document.getElementById('radius-of-disk').value;
    const HORIZONTAL_RADIUS_OF_ELLIPSE = document.getElementById('horizontal-radius-of-ellipse').value;
    const VERTICAL_RADIUS_OF_ELLIPSE = document.getElementById('vertical-radius-of-ellipse').value;
    const SIDE_OF_SQUARE = document.getElementById('side-of-square').value;
    const SIDE_A_OF_RECTANGLE = document.getElementById('side-a-of-rectangle').value;
    const SIDE_B_OF_RECTANGLE = document.getElementById('side-b-of-rectangle').value;
    const SIDE_A_OF_RIGHT_TRIANGLE = document.getElementById('side-a-of-right-triangle').value;
    const SIDE_B_OF_RIGHT_TRIANGLE = document.getElementById('side-b-of-right-triangle').value;
    document.getElementById('area-of-parallelogram').innerHTML = areaOfParallelogram(
        SIDE_A_OF_PARALLELOGRAM,
        SIDE_B_OF_PARALLELOGRAM,
        ANGLE_OF_PARALLELOGRAM
    );
    document.getElementById('height-of-parallelogram').innerHTML = heightOfParallelogram(
        SIDE_A_OF_PARALLELOGRAM,
        SIDE_B_OF_PARALLELOGRAM,
        ANGLE_OF_PARALLELOGRAM
    );
    document.getElementById('area-of-disk').innerHTML = areaOfDisk(RADIUS_OF_DISK);
    document.getElementById('length-of-disk').innerHTML = lengthOfDisk(RADIUS_OF_DISK);
    document.getElementById('area-of-ellipse').innerHTML = areaOfEllipse(HORIZONTAL_RADIUS_OF_ELLIPSE, VERTICAL_RADIUS_OF_ELLIPSE);
    document.getElementById('length-of-ellipse').innerHTML = lengthOfEllipse(HORIZONTAL_RADIUS_OF_ELLIPSE, VERTICAL_RADIUS_OF_ELLIPSE);
    document.getElementById('area-of-square').innerHTML = areaOfDisk(SIDE_OF_SQUARE);
    document.getElementById('diagonal-of-square').innerHTML = diagonalOfSquare(SIDE_OF_SQUARE);
    document.getElementById('area-of-rectangle').innerHTML = areaOfRectangle(SIDE_A_OF_RECTANGLE, SIDE_B_OF_RECTANGLE);
    document.getElementById('diagonal-of-rectangle').innerHTML = diagonalOfRectangle(SIDE_A_OF_RECTANGLE, SIDE_B_OF_RECTANGLE);
    document.getElementById('side-c-of-right-triangle').innerHTML = hypotenuseOfRightTriangle(SIDE_A_OF_RIGHT_TRIANGLE, SIDE_B_OF_RIGHT_TRIANGLE);
    document.getElementById('angle-a-of-right-triangle').innerHTML = '?';
    document.getElementById('angle-b-of-right-triangle').innerHTML = '?';
    document.getElementById('angle-c-of-right-triangle').innerHTML = 90;
    document.getElementById('area-of-right-triangle').innerHTML = areaOfRightTriangle(SIDE_A_OF_RIGHT_TRIANGLE, SIDE_B_OF_RIGHT_TRIANGLE);
    document.getElementById('height-of-right-triangle').innerHTML = SIDE_A_OF_RIGHT_TRIANGLE;
}

document.getElementById('calculate').onclick = calculation;

let inputValue = document.getElementsByClassName('input-value');
for (let item of inputValue) {
    item.addEventListener('input', defaultResultValue);
}

function instantCalc() {
    calculation();
    if (document.getElementById('checkbox').checked) {
        let inputValue = document.getElementsByClassName('input-value');
        for (let item of inputValue) {
            item.addEventListener('input', calculation);
        }
    } else {
        let inputValue = document.getElementsByClassName('input-value');
        for (let item of inputValue) {
            item.removeEventListener('input', calculation);
        }
    }
}

document.getElementById('checkbox').onchange = instantCalc;