function sign() {
    var exponent = Math.floor( Math.random() * 10 );
    return Math.pow( -1, exponent );
}

function random( base ) {
    return Math.floor( Math.random() * base );
}

function randomArray( size, range ) {
    var array = [];
    var base = range;
    for ( var i = 0; i < size; i++ ) {
        array.push( sign() * random( base ));
    }
    return array;
}


function mergeSortRecursion( array, start, end ) {
    var index = Math.floor( (end - start) / 2 );
    var median = array[start + index];
    
    var i = start, j = end;

    outer:
    for ( ; i <= j; ) {
        inner:
        for ( ; j >= i; ) {
            if ( array[i] < median ) {
                i++;
                continue outer;
            } else if ( array[j] > median) {
                j--;
                continue inner;
            } else {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                j--;
                i++;
            }
        }
    }

    if ( (j - start) > 0 ) {
        mergeSortRecursion( array, start, j);
    } if ( (end - i ) > 0 ) {
        mergeSortRecursion( array, i, end);
    } else {
        return;
    }
}

function mergeSort( array ) {
    mergeSortRecursion( array, 0, array.length );
}


// Now execution attempt

var array = randomArray( 100, 50);

mergeSort( array );

alert( array.join(' | ') );