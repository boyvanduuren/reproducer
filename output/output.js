(function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Reproducer() {
  }
  function Coroutine$doSomething($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$doSomething.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doSomething.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doSomething.prototype.constructor = Coroutine$doSomething;
  Coroutine$doSomething.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(L1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            println('Amazing result');
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Reproducer.prototype.doSomething = function (continuation_0, suspended) {
    var instance = new Coroutine$doSomething(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Reproducer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reproducer',
    interfaces: []
  };
  _.Reproducer = Reproducer;
  Kotlin.defineModule('output', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-coroutines-core')));

//# sourceMappingURL=output.js.map
