export function getDistanceReflection(distance, focus) {
    if(focus !== distance && focus !== 0 && distance !== 0) {
        let distance_ =  (1 / focus) - (1 / distance);
        return Math.round(1 / distance_);
    }
}

export function getDistanceReflectionconcave(distance, focus) {
    if(focus !== distance && focus !== 0 && distance !== 0) {
        let distance_ =  (1 / focus) - (1 / distance);
        return Math.round(1 / distance_);
    }
}

export function getSizeReflection(distance, size, distanceRef) {
    if(distance !== 0 && size !== 0 && distanceRef !== 0) {
        return Math.round(size * distanceRef / distance);
    }
}



