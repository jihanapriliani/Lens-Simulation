export function getDistanceReflection(distance, focus) {
    let distance_ =  (1 / focus) - (1 / distance);
    return Math.round(1 / distance_);
}

export function getDistanceReflectionconcave(distance, focus) {
    let distance_ =  (1 / focus) - (1 / distance);
    return Math.round(1 / distance_);
}

export function getSizeReflection(distance, size, distanceRef) {
    return Math.round(size * distanceRef / distance);
}

