function debounce(callback, delay) {
    let timerId;
    return event => {
        clearTimeout(timerId);
        timerId = setTimeout(callback, delay, event);
    };
};

export default debounce;