class EventEmitter {
  events: Record<
    string,
    | Array<
        Function & {
          l?: Function;
        }
      >
    | undefined
  > = {};
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

  // 在移除监听器的时候，有可能移除的once注册的
  off(eventName: string, listener: Function) {
    const listeners = this.events[eventName];
    if (listeners) {
      this.events[eventName] = listeners.filter((item) => {
        return item !== listener && item.l !== listener;
      });
    }
  }
  removeEventListener(eventName: string, listener: Function) {
    this.off.call(this, eventName, listener);
  }

  removeAllEventListeners(eventName: string) {
    this.events[eventName] = [];
  }

  /**
   *  once是一个特殊的on方法，需要对传入逇listener进行一层aop包装
   * @param eventName
   * @param listener
   */
  once(eventName: string, listener: Function) {
    const enhanced = () => {
      listener();
      // 正常的监听函数触发，并移除
      this.removeEventListener(eventName, listener);
    };
    enhanced.l = listener;

    this.on(eventName, enhanced);
  }

  emit(eventName: string) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach((fn) => fn());
    }
  }

  print() {
    console.log(this.events);
  }
}

export default EventEmitter;
