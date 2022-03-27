class EventEmitter {
  events: Record<string, Function[]> = {};
  on(eventName: string, listener: Function) {
    const existed = this.events[eventName];
    if (!existed) {
      this.events[eventName] = [listener];
    } else {
      existed.push(listener);
    }
  }
  addEventListener(eventName: string, listener: Function) {
    this.on.call(this, eventName, listener);
  }
  off(eventName: string, listener: Function) {
    const listeners = this.events[eventName].filter((item) => {
      item !== listener;
    });
    this.events[eventName] = listeners;
  }
  removeEventListener(eventName: string, listener: Function) {
    this.off.call(this, eventName, listener);
  }
  once(eventName: string, listener: Function) {
    const enhanced = () => {
      listener();
      this.removeEventListener(eventName, listener);
    };

    const existed = this.events[eventName];
    if (!existed) {
      this.events[eventName] = [enhanced];
    } else {
      existed.push(enhanced);
    }
  }

  emit(eventName: string) {
    const listeners = this.events[eventName];
    listeners.forEach((fn) => fn());
  }

  print() {
    console.log(this.events);
  }
}

export default EventEmitter;
