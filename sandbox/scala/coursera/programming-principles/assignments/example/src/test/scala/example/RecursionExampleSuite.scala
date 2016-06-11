package example

import org.junit.runner.RunWith
import org.scalatest.FunSuite
import org.scalatest.junit.JUnitRunner


@RunWith(classOf[JUnitRunner])
class RecursionExampleSuite extends FunSuite {


  import RecursionExample._


  test("factorialTail(0) == 1 ") {
    assert(factorialTail(0) === 1)
  }

  test("factorialTail(1) == 1 ") {
    assert(factorialTail(0) === 1)
  }

  test("factorialTail(2) == 2 ") {
    assert(factorialTail(2) === 2)
  }

  test("factorialTail(5) == 30 ") {
    assert(factorialTail(5) === 120)
  }

}
