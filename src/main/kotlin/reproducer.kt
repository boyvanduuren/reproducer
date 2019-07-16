import kotlinx.coroutines.delay

class Reproducer() {

    suspend fun doSomething(): Unit {
        delay(1000)

        println("Amazing result")
    }
}
