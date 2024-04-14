function Stopwatch() {
    let startTime, endTime, running, duration = 0;

Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
});

Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
});
Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
});
Object.defineProperty(this, 'running', {
    get: function() { return running; }
});
}

Stopwatch.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');

        this.running = true;

        this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

        this.running = false;

        this.endTime = new Date();

        const seconds = (endTime()- startTime.getTime()) / 1000;
        duration += seconds; // duration is public readonly property
        // we cannot modify like this.duration. currently we donot have setter.
};

Stopwatch.prototype.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};

