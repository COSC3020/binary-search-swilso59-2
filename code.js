function binarySearch(list, element) {
    if (list.length < 1) {
        return -1;
    }
    
    let left = 0;
    let rigt = list.length -1;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (list[middle] === element) {
            while (middle > 0 && list[middle - 1] === element) {
                middle--;
            }
            return middle;
        }
        else if (list[middle] < element) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
}
