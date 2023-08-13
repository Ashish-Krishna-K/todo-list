// The evnets observer object basically the pub/sub object
const EventsObserver = {
    // all the evnets subscribed to
    events: {},
    subscribe: function (eventName: string, eventHandler: EventHandlerType<EventPayloads>) {
        // If the provided event name is present in events object, add the passed in
        // eventHandler to that event's list, if not create a new event and add the event handler
        if (this.events[eventName] === undefined) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(eventHandler);
        console.log(`${eventHandler.name} subscribed to event ${eventName}`);
    },
    publish: function (eventName: string, data?: EventPayloads) {
        console.log(`event: ${eventName} was just fired`);
        const subscribers = this.events[eventName];
        // loop through the subscribers array for the published event and call each
        // function with the provided data
        subscribers?.forEach((fn: (x: EventPayloads) => void) => fn(data));
    }
}

export default EventsObserver;