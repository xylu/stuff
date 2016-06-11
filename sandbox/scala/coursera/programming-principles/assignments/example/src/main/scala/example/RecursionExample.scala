package example

import scala.annotation.tailrec

/**
  * author: xylo 
  */
object RecursionExample {


  def factorial(n: Int): Int = {
    n match {
      case 0 => 1
      case 1 => 1
      case x if x > 1 => x * factorial(x - 1)

    }
  }

  /*
  3!
  3*2!
  3 *2 * 1

  3!
  (2,3)
  (1,2*3)
  (0,1*2*3)

   */


  def factorialTail(n: Int): Int = {
    @tailrec
    def acc(x: Int, accV: Int): Int = {
      x match {
        case 0 => accV
        case 1 => accV
        case y if y > 1 => acc(y - 1, y * accV)

      }
    }
    n match {
      case 0 => 1
      case 1 => 1
      case x if x > 1 => acc(x - 1, x)

    }

  }


}
