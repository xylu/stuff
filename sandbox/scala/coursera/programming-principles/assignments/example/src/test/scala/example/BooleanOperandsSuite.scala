package example

import org.junit.runner.RunWith
import org.scalatest.FunSuite
import org.scalatest.junit.JUnitRunner


@RunWith(classOf[JUnitRunner])
class BooleanOperandsSuite extends FunSuite {


  import BooleanOperands._


  test("and(true,true) ") {
    assert(and(true, true) === true)
  }

  test("and(false,false) ") {
    assert(and(false, false) === false)
  }

  test("and(true,false) ") {
    assert(and(true, false) === false)
  }

  test("and(false,true) ") {
    assert(and(false, true) === false)
  }

  test("and(false,loop) ") {
    def loop: Boolean = loop
    assert(and(false, loop) === false)
  }


}
