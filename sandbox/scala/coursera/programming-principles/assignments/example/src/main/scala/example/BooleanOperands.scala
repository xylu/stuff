package example

/**
  * author: xylo 
  */
object BooleanOperands {


  def and(x: Boolean, y: => Boolean): Boolean = {
    if (x) y else false
  }

  def or(x: Boolean, y: => Boolean): Boolean = {
    if (x) true else y
  }
}
