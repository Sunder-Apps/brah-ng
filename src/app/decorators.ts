export function debounce(delay: number = 300): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      let timeout = null
  
      const original = descriptor.value;
  
      descriptor.value = function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => original.apply(this, args), delay);
      }
  
      return descriptor;
    }
}

export function throttle(delay: number = 300): MethodDecorator {
  let inThrottle:boolean
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
      if(!inThrottle) {
        console.log('true')
        descriptor.value = function (...args) {
          original.apply(this, args);
          inThrottle = true
          setTimeout(() => inThrottle = false, delay)
        }
      } else {
        console.log('false')
      }
      return descriptor;
  }
}
/*
function throttle(fn, interval) {
    let lastTime;
    return function throttled() {
        let timeSinceLastExecution = Date.now() - lastTime;
        if(!lastTime || (timeSinceLastExecution >= interval)) {
            fn.apply(this, arguments);
            lastTime = Date.now();
        }
    };
}
*/