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
    if (eventName !== "newListener") {
      // * 重要的副作用: 如果注册了一个newListener的监听器, 可以在该监听器中获取到任何新来的事件和监听器，并添加一些逻辑处理
      this.emit("newListener", eventName, listener);
    }
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
      this.removeEventListener(eventName, enhanced);
    };
    enhanced.l = listener;

    this.on(eventName, enhanced);
  }

  emit(eventName: string, ...args: any) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach((fn) => fn.call(this, args));
    }
  }

  print() {
    console.log(this.events);
  }
}

export default EventEmitter;
